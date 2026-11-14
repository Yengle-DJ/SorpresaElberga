/* =========================================
   ABRIR LA SORPRESA
========================================= */

function abrirSorpresa() {

    const inicio = document.getElementById("inicio");
    const contenido = document.getElementById("contenido");

    inicio.style.display = "none";

    contenido.classList.remove("oculto");

    lluviaDeAbuelos();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   LLUVIA DE ABUELITOS
========================================= */

function lluviaDeAbuelos() {

    const emojis = [
        "👴🏻",
        "🦯",
        "👓",
        "🧓",
        "📰",
        "🧦"
    ];

    for (let i = 0; i < 35; i++) {

        const abuelo = document.createElement("div");

        abuelo.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        abuelo.style.position = "fixed";
        abuelo.style.top = "-50px";
        abuelo.style.left = Math.random() * 100 + "vw";
        abuelo.style.fontSize = (20 + Math.random() * 20) + "px";
        abuelo.style.zIndex = "100";
        abuelo.style.pointerEvents = "none";

        document.body.appendChild(abuelo);

        const duracion = 3000 + Math.random() * 3000;

        const animacion = abuelo.animate(

            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform: "translateY(110vh) rotate(360deg)",
                    opacity: 0.2
                }
            ],

            {
                duration: duracion,
                easing: "linear"
            }

        );

        animacion.onfinish = () => {
            abuelo.remove();
        };

    }

}


/* =========================================
   VOLVER AL INICIO
========================================= */

function volverArriba() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
