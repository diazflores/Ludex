 // Simple search functionality: filters game items based on the game title.
    document.getElementById("searchInput").addEventListener("keyup", function() {
      const query = this.value.toLowerCase();
      const games = document.querySelectorAll(".game-item");
      games.forEach(function(game) {
        const title = game.querySelector(".game-title").textContent.toLowerCase();
        if (title.includes(query)) {
          game.style.display = "";
        } else {
          game.style.display = "none";
        }
      });
    });