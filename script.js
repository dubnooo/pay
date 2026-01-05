// 1. Оновлення іконки (кількості)
function updateCartIcon() {
    const countSpan = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('eloriaCart')) || [];
    if (countSpan) countSpan.innerText = cart.length;
}

// 2. Додавання товару (для головної сторінки)
function addToCart(name, price, img) {
    let cart = JSON.parse(localStorage.getItem('eloriaCart')) || [];
    cart.push({ name: name, price: parseFloat(price), img: img });
    localStorage.setItem('eloriaCart', JSON.stringify(cart));
    updateCartIcon();
    alert("Товар додано!");
}

// 3. ФУНКЦІЯ ПІДРАХУНКУ ТА ВИВОДУ (те, чого не вистачало)
function renderPayPage() {
    const container = document.getElementById('cart-items-display');
    const totalDisplay = document.getElementById('total-price-display');
    
    // Перевіряємо, чи ми взагалі на сторінці оплати
    if (!container) return; 

    let cart = JSON.parse(localStorage.getItem('eloriaCart')) || [];
    
    if (cart.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>Кошик порожній</p>";
        if (totalDisplay) totalDisplay.innerText = "Разом: 0 ₴";
        return;
    }

    let total = 0;
    container.innerHTML = ""; // Очищуємо заглушку "Завантаження..."

    cart.forEach((item) => {
        total += item.price; // Додаємо ціну кожного товару до загальної суми
        
        container.innerHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding:10px 0;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <img src="${item.img}" width="50" height="60" style="object-fit:cover; border-radius:5px;">
                    <span>${item.name}</span>
                </div>
                <b>${item.price} ₴</b>
            </div>
        `;
    });

    // Виводимо фінальну суму
    if (totalDisplay) {
        totalDisplay.innerText = "Разом: " + total.toFixed(2) + " ₴";
    }
}

// 4. Оплата та очищення
function processPayment() {
    localStorage.removeItem('eloriaCart');
    alert("Дякуємо! Оплата успішна, кошик очищено.");
    window.location.href = "index.html";
}

// Запуск функцій при завантаженні будь-якої сторінки
document.addEventListener('DOMContentLoaded', () => {
    updateCartIcon(); // Для головної
    renderPayPage();  // Для сторінки оплати
});
