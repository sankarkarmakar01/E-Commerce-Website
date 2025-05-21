 // Mobile Menu Toggle
      const mobileMenuButton = document.querySelector(".mobile-menu-button");
      const mobileMenu = document.querySelector(".mobile-menu");

      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenuButton.innerHTML = mobileMenu.classList.contains("hidden")
          ? '<i class="fas fa-bars text-xl"></i>'
          : '<i class="fas fa-times text-xl"></i>';
      });



