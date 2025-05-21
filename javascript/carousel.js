  let currentSlide = 0;
        const slides = document.querySelectorAll('[id^="slide"]');
        const indicators = document.querySelectorAll('.absolute.bottom-6 button');

        function showSlide(index) {
            slides.forEach(slide => {
                slide.classList.remove('opacity-100', 'animate-fade-in');
                slide.classList.add('opacity-0');
            });
            
            slides[index].classList.remove('opacity-0');
            slides[index].classList.add('opacity-100', 'animate-fade-in');
            
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('bg-white', i === index);
                indicator.classList.toggle('bg-white/50', i !== index);
            });
            
            currentSlide = index;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        function goToSlide(index) {
            showSlide(index);
        }

        // Auto-rotate slides every 5 seconds
        setInterval(nextSlide, 5000);

        // Initialize first slide
        showSlide(0);