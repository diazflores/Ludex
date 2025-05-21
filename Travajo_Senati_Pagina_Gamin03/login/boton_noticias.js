   function filterArticles(category) {
        const articles = document.querySelectorAll("article");
        articles.forEach((article) => {
          if (category === "all") {
            article.style.display = "flex";
          } else {
            if (article.classList.contains(category)) {
              article.style.display = "flex";
            } else {
              article.style.display = "none";
            }
          }
        });
      }