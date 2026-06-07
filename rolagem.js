function revelarAoScroll() {
    const elementos = document.querySelectorAll(".reveal");

    elementos.forEach((elemento) => {
        const topoElemento = elemento.getBoundingClientRect().top;
        const alturaJanela = window.innerHeight;

        if (topoElemento < alturaJanela - 100) {
            elemento.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revelarAoScroll);
revelarAoScroll();