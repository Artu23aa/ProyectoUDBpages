 document.addEventListener('DOMContentLoaded', function() {
            const myCarousel = new bootstrap.Carousel('#myCarousel', {
                interval: 3000, // Cambia cada 3 segundos
                wrap: true, // Bucle infinito
                pause: 'hover' // Pausa al pasar el mouse
            });
            
            // Eventos personalizados
            const carousel = document.querySelector('#myCarousel');
            
            carousel.addEventListener('slide.bs.carousel', event => {
                console.log('Cambiando a slide:', event.to);
            });
            
            carousel.addEventListener('slid.bs.carousel', event => {
                console.log('Slide cambiado:', event.to);
            });
            
            // Control manual con teclado
            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowLeft') {
                    myCarousel.prev();
                } else if (e.key === 'ArrowRight') {
                    myCarousel.next();
                }
            });
        });