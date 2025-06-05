function modoOscuro() {
    document.body.classList.toggle("dark-mode");
    const btn = document.getElementById("dark-mode-toggle");
    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "Modo Claro";
    } else {
        btn.textContent = "Modo Oscuro";
    }
}

// Cambia el texto al cargar según el modo guardado
window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("dark-mode-toggle");
    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "Modo Claro";
    } else {
        btn.textContent = "Modo Oscuro";
    }

    // Animación de barras de habilidades
    setTimeout(() => {
        document.querySelector('.bar.html').style.width = "85%";
        document.querySelector('.bar.css').style.width = "70%";
        document.querySelector('.bar.js').style.width = "50%";
    }, 400);

    // Animaciones fade-in al hacer scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity = 1;
            entry.target.style.transform = "none";
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});