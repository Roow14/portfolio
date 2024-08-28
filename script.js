let currentIndex = 0;

    function moveSlide(step) {
        const slides = document.querySelectorAll('.carousel-item');
        const itemsToShow = getItemsToShow();
        const totalSlides = slides.length / 2; // Número real de slides
        const maxIndex = totalSlides - itemsToShow;

        currentIndex = (currentIndex + step + totalSlides) % totalSlides;
        if (currentIndex < 0) {
            currentIndex = maxIndex;
        }
        const offset = -currentIndex * (100 / itemsToShow);
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }

    function getItemsToShow() {
        if (window.innerWidth <= 480) {
            return 1; // Em dispositivos móveis menores, mostrar 1 item
        } else if (window.innerWidth <= 768) {
            return 2; // Em tablets, mostrar 2 itens
        } else {
            return 3; // Em telas maiores, mostrar 3 itens
        }
    }

    window.addEventListener('resize', () => {
        moveSlide(0); // Recalcula a posição do carrossel ao redimensionar
    });