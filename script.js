function pay() {
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!phone || !email || !password) {
        alert("Будь ласка, заповніть всі поля!");
        return;
    }

    alert(
        "Дані введено:\n" +
        "Телефон: " + phone + "\n" +
        "Email: " + email
    );
}
