/* =========================================================
   DIARIO DE ABI
   JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTOS
    ====================================================== */

    const abrirBtn =
        document.getElementById("abrirBtn");

    const intro =
        document.getElementById("intro");

    const diario =
        document.getElementById("diario");

    const final =
        document.getElementById("final");

    const book =
        document.getElementById("book");

    const bookCover =
        document.getElementById("bookCover");

    const turningPage =
        document.getElementById("turningPage");

    const prevBtn =
        document.getElementById("prevBtn");

    const nextBtn =
        document.getElementById("nextBtn");

    const currentPage =
        document.getElementById("currentPage");

    const totalPages =
        document.getElementById("totalPages");

    const leftNumber =
        document.getElementById("leftNumber");

    const leftTitle =
        document.getElementById("leftTitle");

    const leftText =
        document.getElementById("leftText");

    const rightNumber =
        document.getElementById("rightNumber");

    const rightDate =
        document.getElementById("rightDate");

    const rightTitle =
        document.getElementById("rightTitle");

    const rightText =
        document.getElementById("rightText");

    const turnNumber =
        document.getElementById("turnNumber");

    const restartBtn =
        document.getElementById("restartBtn");

    const musica =
        document.getElementById("musica");

    const musicButton =
        document.getElementById("musicButton");


    /* =====================================================
       DATOS DEL DIARIO
    ====================================================== */

    const paginas = [

        {
            numero: "01",
            fecha: "El comienzo",
            titulo: "Dos personas",

            texto: `
Hay historias que comienzan con un momento
perfectamente planeado.
La nuestra no.
Comenzó de una manera mucho más sencilla:
Dos personas trabajando en el mismo lugar.
Sin saber que aquella coincidencia
terminaría convirtiéndose en algo
que ninguno de los dos esperaba.
`
        },


        {
            numero: "02",
            fecha: "2024",
            titulo: "Cuando nos conocimos",

            texto: `
Al principio simplemente éramos dos
personas que coincidían en el trabajo.

Poco a poco empezamos a hablar.

Y sin darnos cuenta comenzamos a
conocernos de verdad.

Entre conversaciones, bromas y momentos
compartidos nació una amistad que para mí
terminaría significando muchísimo.
`
        },


        {
            numero: "03",
            fecha: "Una amistad",

            titulo: "Antes de nosotros",

            texto: `
Antes de ser pareja fuimos amigos.

Y creo que esa es una de las partes
más bonitas de nuestra historia.

Porque antes de llamarnos "novios",
aprendimos a escucharnos, a confiar
y a conocernos.

Tú llegaste a contarme cosas que
quizá no le contabas a cualquiera y eso significo
mucho mas de lo que imaginas.

Y yo fui descubriendo poco a poco
lo especial que eras para mí.
`
        },


        {
            numero: "04",
            fecha: "Una pausa",

            titulo: "A veces alejarse",

            texto: `
Hubo un momento en el que pensé que
lo mejor era tomar distancia.

No porque dejara de importarme.

Todo lo contrario.

Me alejé porque no quería sentir que
estaba interfiriendo en tu vida.

Pero incluso durante aquella distancia
me di cuenta de algo:

Nuestra amistad seguía importándome
más de lo que quería aceptar y egoistamente
queria mas que una amistad.
`
        },


        {
            numero: "05",
            fecha: "Volver a encontrarnos",

            titulo: "Otra oportunidad",

            texto: `
Y entonces volvimos a coincidir.

Volvimos a hablar.

Volvimos a reírnos.

Y poco a poco recuperamos aquella
amistad que habíamos dejado atrás.

Creo que fue ahí cuando entendí que
algunas personas pueden alejarse
durante un tiempo

pero cuando realmente importan,
encuentran la manera de volver.
`
        },


        {
            numero: "06",
            fecha: "7 de Marzo",

            titulo: "Y nos hicimos nosotros",

            texto: `
Después de todo lo que había pasado,
llegó el momento que cambió nuestra historia.

Decidimos darnos una oportunidad.

Y aquel día comenzó oficialmente
una nueva etapa.

Ya no éramos solamente amigos.

Ahora éramos nosotros.

Y aunque solamente llevamos un pequeño
capítulo de nuestra historia juntos,
para mí ya significa muchísimo.
`
        },


        {
            numero: "07",
            fecha: "Hoy",

            titulo: "Lo que sigue",

            texto: `
No sé exactamente qué capítulos
vendrán después.

No sé cuántas páginas tendrá
nuestra historia.

Pero sí sé algo.

Quiero seguir llenándola de momentos.

De risas.

De conversaciones.

De días buenos y días difíciles.

Porque después de todo lo que nos
tocó recorrer para llegar hasta aquí...

me alegra muchísimo que finalmente
estemos escribiendo esta historia
juntos.

Gracias por darme la oportunidad de ser nosotros.

Y gracias por formar parte de mi vida.
`
        }


        

    ];


    


    /* =====================================================
       ESTADO
    ====================================================== */

    let paginaActual = 0;

    let diarioAbierto = false;

    let animando = false;

    let musicaActiva = false;


    totalPages.textContent =
        paginas.length;


    /* =====================================================
       MOSTRAR PÁGINA
    ====================================================== */

    function mostrarPagina() {

        const pagina =
            paginas[paginaActual];


        if (!pagina) {
            return;
        }


        rightNumber.textContent =
            pagina.numero;

        rightDate.textContent =
            pagina.fecha;

        rightTitle.textContent =
            pagina.titulo;

        rightText.textContent =
            pagina.texto;


        /*
         * La página izquierda muestra
         * la página anterior cuando existe.
         */

        if (paginaActual > 0) {

            const anterior =
                paginas[paginaActual - 1];

            leftNumber.textContent =
                anterior.numero;

            leftTitle.textContent =
                anterior.titulo;

            leftText.textContent =
                anterior.texto;

        } else {

            leftNumber.textContent =
                "01";

            leftTitle.textContent =
                "El comienzo";

            leftText.textContent =
                paginas[0].texto;

        }


        currentPage.textContent =
            paginaActual + 1;


        prevBtn.disabled =
            paginaActual === 0;

    }


    /* =====================================================
       ANIMACIÓN DE APERTURA
    ====================================================== */

    function abrirDiario() {

        if (diarioAbierto) {
            return;
        }


        diarioAbierto = true;


        /*
         * Intentar reproducir música.
         *
         * Como esto ocurre después de tocar
         * el botón, el navegador normalmente
         * permite la reproducción.
         */

        reproducirMusica();


        intro.classList.add("fade-out");


        setTimeout(() => {

            intro.classList.add("oculto");

            diario.classList.remove("oculto");

            mostrarPagina();


            /*
             * Pequeña pausa antes de abrir
             * la portada del libro.
             */

            setTimeout(() => {

                book.classList.add("opening");

            }, 150);


        }, 750);

    }


    /* =====================================================
       PASAR PÁGINA
    ====================================================== */

    function siguientePagina() {

        if (
            animando ||
            paginaActual >= paginas.length - 1
        ) {
            return;
        }


        animando = true;


        turnNumber.textContent =
            String(paginaActual + 2)
                .padStart(2, "0");


        turningPage.classList.remove(
            "turn-prev"
        );


        /*
         * Forzar reinicio de animación
         */

        void turningPage.offsetWidth;


        turningPage.classList.add(
            "turn-next"
        );


        setTimeout(() => {

            paginaActual++;

            mostrarPagina();

        }, 360);


        setTimeout(() => {

            turningPage.classList.remove(
                "turn-next"
            );

            animando = false;


            /*
             * Si llegamos a la última página,
             * actualizamos el botón.
             */

            if (
                paginaActual ===
                paginas.length - 1
            ) {

                nextBtn.textContent =
                    "Terminar →";

            }

        }, 760);

    }


    /* =====================================================
       PÁGINA ANTERIOR
    ====================================================== */

    function paginaAnterior() {

        if (
            animando ||
            paginaActual <= 0
        ) {
            return;
        }


        animando = true;


        turnNumber.textContent =
            String(paginaActual)
                .padStart(2, "0");


        turningPage.classList.remove(
            "turn-next"
        );


        void turningPage.offsetWidth;


        turningPage.classList.add(
            "turn-prev"
        );


        setTimeout(() => {

            paginaActual--;

            mostrarPagina();


            nextBtn.innerHTML =
                'Siguiente <span>→</span>';

        }, 360);


        setTimeout(() => {

            turningPage.classList.remove(
                "turn-prev"
            );

            animando = false;

        }, 760);

    }


    /* =====================================================
       TERMINAR DIARIO
    ====================================================== */

    function terminarDiario() {

        if (
            paginaActual !==
            paginas.length - 1
        ) {
            return;
        }


        diario.classList.add("oculto");

        final.classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =====================================================
       BOTÓN SIGUIENTE
    ====================================================== */

    nextBtn.addEventListener(
        "click",
        () => {

            if (
                paginaActual ===
                paginas.length - 1
            ) {

                terminarDiario();

            } else {

                siguientePagina();

            }

        }
    );


    /* =====================================================
       BOTÓN ANTERIOR
    ====================================================== */

    prevBtn.addEventListener(
        "click",
        paginaAnterior
    );


    /* =====================================================
       BOTÓN ABRIR
    ====================================================== */

    abrirBtn.addEventListener(
        "click",
        abrirDiario
    );


    /* =====================================================
       TECLADO
    ====================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (!diarioAbierto) {
                return;
            }


            if (event.key === "ArrowRight") {

                if (
                    paginaActual ===
                    paginas.length - 1
                ) {

                    terminarDiario();

                } else {

                    siguientePagina();

                }

            }


            if (event.key === "ArrowLeft") {

                paginaAnterior();

            }

        }
    );


    /* =====================================================
       MÚSICA
    ====================================================== */

    async function reproducirMusica() {

        if (!musica) {
            return;
        }


        try {

            await musica.play();

            musicaActiva = true;

            actualizarBotonMusica();

        } catch (error) {

            /*
             * Si el navegador bloquea la reproducción,
             * el botón de música seguirá funcionando.
             */

            musicaActiva = false;

            actualizarBotonMusica();

        }

    }


    function pausarMusica() {

        if (!musica) {
            return;
        }


        musica.pause();

        musicaActiva = false;

        actualizarBotonMusica();

    }


    function actualizarBotonMusica() {

        if (musicaActiva) {

            musicButton.textContent =
                "🔊";

            musicButton.classList.add(
                "music-on"
            );

            musicButton.setAttribute(
                "aria-label",
                "Pausar música"
            );

        } else {

            musicButton.textContent =
                "🎵";

            musicButton.classList.remove(
                "music-on"
            );

            musicButton.setAttribute(
                "aria-label",
                "Reproducir música"
            );

        }

    }


    musicButton.addEventListener(
        "click",
        () => {

            if (musicaActiva) {

                pausarMusica();

            } else {

                reproducirMusica();

            }

        }
    );


    /* =====================================================
       REINICIAR
    ====================================================== */

    restartBtn.addEventListener(
        "click",
        () => {

            paginaActual = 0;

            animando = false;

            final.classList.add(
                "oculto"
            );

            diario.classList.remove(
                "oculto"
            );

            book.classList.remove(
                "opening"
            );


            nextBtn.innerHTML =
                'Siguiente <span>→</span>';


            mostrarPagina();


            /*
             * Volver a abrir la portada
             * después de un pequeño tiempo.
             */

            setTimeout(() => {

                book.classList.add(
                    "opening"
                );

            }, 300);


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       INICIO
    ====================================================== */

    mostrarPagina();

});