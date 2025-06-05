function modoOscuro() {
    document.body.classList.toggle("dark-mode");
    const btn = document.getElementById("dark-mode-toggle");
    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "Modo Claro";
    } else {
        btn.textContent = "Modo Oscuro";
    }
}


window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("dark-mode-toggle");
    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "Modo Claro";
    } else {
        btn.textContent = "Modo Oscuro";
    }
});

ocument.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            document.querySelector('.bar.html').style.width = "90%";
            document.querySelector('.bar.css').style.width = "80%";
            document.querySelector('.bar.js').style.width = "70%";
            document.querySelector('.bar.python').style.width = "60%";
        }, 400);
    });