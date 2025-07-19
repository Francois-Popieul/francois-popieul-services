document.addEventListener("DOMContentLoaded", function () {
    let carousels = document.querySelectorAll(".carousel-container");

    carousels.forEach(carouselContainer => {
        let carousel = carouselContainer.querySelector(".carousel");
        let items = carousel.querySelectorAll(".item");
        let dotsContainer = carouselContainer.querySelector(".dots");
        let prevButton = carouselContainer.querySelector(".prev");
        let nextButton = carouselContainer.querySelector(".next");

        // Insert dots into the DOM
        items.forEach((_, index) => {
            let dot = document.createElement("span");
            dot.classList.add("dot");
            if (index === 0) dot.classList.add("active");
            dot.dataset.index = index;
            dotsContainer.appendChild(dot);
        });

        let dots = dotsContainer.querySelectorAll(".dot");

        // Function to show a specific item
        function showItem(index) {
            items.forEach((item, idx) => {
                item.classList.remove("active");
                dots[idx].classList.remove("active");
                if (idx === index) {
                    item.classList.add("active");
                    dots[idx].classList.add("active");
                }
            });
        }

        // Event listeners for buttons
        prevButton.addEventListener("click", () => {
            let index = [...items].findIndex(item =>
                item.classList.contains("active")
            );
            showItem((index - 1 + items.length) % items.length);
        });

        nextButton.addEventListener("click", () => {
            let index = [...items].findIndex(item =>
                item.classList.contains("active")
            );
            showItem((index + 1) % items.length);
        });

        // Event listeners for dots
        dots.forEach(dot => {
            dot.addEventListener("click", () => {
                let index = parseInt(dot.dataset.index);
                showItem(index);
            });
        });
    });
});

function displayImage(id) {
   let largeImage = document.getElementById(id);
   largeImage.style.display = 'block';
   largeImage.style.width=100+"auto";
   let url=largeImage.getAttribute('src');
   open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}