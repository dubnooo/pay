// Функція додавання (для index.html)
function addToCart(name, price, img) {
    let cart = JSON.parse(localStorage.getItem('eloriaCart')) || [];
    cart.push({ name: name, price: price, img: img });
    localStorage.setItem('eloriaCart', JSON.stringify(cart));
    updateCartIcon();
    alert("Товар додано!");
}

function updateCartIcon() {
    const countSpan = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('eloriaCart')) || [];
    if (countSpan) countSpan.innerText = cart.length;
}

// ГОЛОВНА ФУНКЦІЯ ОЧИЩЕННЯ (для pay.html)
function processPayment() {
    // Видаляємо дані
    localStorage.removeItem('eloriaCart');
    
    // Повідомлення
    alert("Дякуємо! Оплата успішна, кошик очищено.");
    
    // Перехід на головну
    window.location.href = "index.html";
}

// Запуск при завантаженні
document.addEventListener('DOMContentLoaded', () => {
    updateCartIcon();
    
    // Прив'язуємо функцію до кнопки "Сплатити все", якщо вона є на сторінці
    const payBtn = document.querySelector('.pay-btn') || document.querySelector('button[onclick="processPayment()"]');
    if (payBtn) {
        payBtn.addEventListener('click', processPayment);
    }
});
