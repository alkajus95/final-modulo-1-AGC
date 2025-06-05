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