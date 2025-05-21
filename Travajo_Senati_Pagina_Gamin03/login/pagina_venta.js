 // First search functionality (using the "input" event) that toggles the display of section buttons and bottom slider
      document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("buscador").addEventListener("input", function () {
          var term = this.value.toLowerCase();
          var sectionButtons = document.querySelectorAll(".section-button");
          var bottomSlider = document.querySelector(".bottom-slider");
          if (term.trim().length > 0) {
            sectionButtons.forEach(function (btn) {
              btn.style.display = "none";
            });
            if (bottomSlider) {
              bottomSlider.style.display = "none";
            }
          } else {
            sectionButtons.forEach(function (btn) {
              btn.style.display = "";
            });
            if (bottomSlider) {
              bottomSlider.style.display = "";
            }
          }
          // Toggle visibility so the grid layout remains with the same spacing.
          var cards = document.querySelectorAll(
            ".grid > .bg-steam, .max-w-6xl .bg-steam"
          );
          cards.forEach(function (card) {
            var titleElem = card.querySelector("h2, h3");
            var title = titleElem ? titleElem.textContent.toLowerCase() : "";
            card.style.visibility = title.includes(term) ? "visible" : "hidden";
          });
        });
      });
      // Additional search functionality using "keyup" for filtering game cards with display property
      document.getElementById("buscador").addEventListener("keyup", function() {
        const query = this.value.toLowerCase();
        // Hide or show additional elements based on search query
        const sectionButtons = document.querySelectorAll(".section-button");
        const bottomSlider = document.querySelector(".bottom-slider");
        if(query.trim().length > 0){
          sectionButtons.forEach(btn => btn.style.display = "none");
          if(bottomSlider) bottomSlider.style.display = "none";
        } else {
          sectionButtons.forEach(btn => btn.style.display = "");
          if(bottomSlider) bottomSlider.style.display = "";
        }
        // Filter game cards by toggling their display property directly.
        const cards = document.querySelectorAll(".game-item");
        cards.forEach(function(card) {
          const titleElem = card.querySelector("h2, h3");
          const title = titleElem ? titleElem.textContent.toLowerCase() : "";
          if (title.includes(query)) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      });
      // Global cart array to store game names added to the cart
      let cartItems = [];
      function updateCartButton() {
        document.querySelector(".shopping-cart-btn").innerHTML =
          `🛒 Carrito (${cartItems.length})`;
      }
      
      // Add event listeners to "Comprar" buttons to add games to the cart
      document.querySelectorAll("button").forEach((btn) => {
        if (btn.textContent.trim() === "Comprar") {
          btn.addEventListener("click", function () {
            const card = this.closest(".bg-steam");
            const titleElement = card.querySelector("h2, h3");
            const gameTitle = titleElement ? titleElement.textContent : "Juego desconocido";
            cartItems.push(gameTitle);
            updateCartButton();
          });
        }
      });
      // Main game card sliders: change images every 4 seconds
      document.querySelectorAll(".game-slider").forEach((slider) => {
        let images = slider.querySelectorAll("img");
        let currentIndex = 0;
        setInterval(() => {
          images[currentIndex].classList.remove("active");
          currentIndex = (currentIndex + 1) % images.length;
          images[currentIndex].classList.add("active");
        }, 4000);
      });
      // Bottom slider: auto-change images every 7 seconds
      let bottomSliderImages = document.querySelectorAll(".bottom-slider img");
      let currentBottomIndex = 0;
      let bottomInterval = setInterval(() => {
        bottomSliderImages[currentBottomIndex].classList.remove("active");
        currentBottomIndex = (currentBottomIndex + 1) % bottomSliderImages.length;
        bottomSliderImages[currentBottomIndex].classList.add("active");
      }, 7000);
      // Bottom slider manual controls
      document.querySelector(".bottom-slider .next-button").addEventListener("click", () => {
        clearInterval(bottomInterval);
        bottomSliderImages[currentBottomIndex].classList.remove("active");
        currentBottomIndex = (currentBottomIndex + 1) % bottomSliderImages.length;
        bottomSliderImages[currentBottomIndex].classList.add("active");
      });
      document.querySelector(".bottom-slider .prev-button").addEventListener("click", () => {
        clearInterval(bottomInterval);
        bottomSliderImages[currentBottomIndex].classList.remove("active");
        currentBottomIndex = (currentBottomIndex - 1 + bottomSliderImages.length) % bottomSliderImages.length;
        bottomSliderImages[currentBottomIndex].classList.add("active");
      });
      // Extra game cards inner slider: change images every 4 seconds
      document.querySelectorAll(".inner-slider").forEach((slider) => {
        let slides = slider.querySelectorAll("img");
        let currentIndexExtra = 0;
        setInterval(() => {
          slides[currentIndexExtra].classList.remove("active");
          currentIndexExtra = (currentIndexExtra + 1) % slides.length;
          slides[currentIndexExtra].classList.add("active");
        }, 4000);
      });