/*document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".image-container");

    containers.forEach(container => {
        const staticImage = container.querySelector(".static");
        const gifImage = container.querySelector(".gif");

        container.addEventListener("click", function () {
            if (gifImage.style.display === "block") {
                gifImage.style.display = "none";
                staticImage.style.display = "block";
            } else {
                gifImage.style.display = "block";
                staticImage.style.display = "none";
            }
        });
    });
});*/

// This file handles the image hover effects for thumbnails
    document.addEventListener("DOMContentLoaded", function () {
        const containers = document.querySelectorAll(".image-container");

        containers.forEach(container => {
            const staticImage = container.querySelector(".static");
            const gifImage = container.querySelector(".gif");

            // Add click event listener to toggle between static and GIF
            container.addEventListener("click", function () {
                if (gifImage.style.display === "block") {
                    gifImage.style.display = "none"; // Hide GIF
                    staticImage.style.display = "block"; // Show static image
                } else {
                    gifImage.style.display = "block"; // Show GIF
                    staticImage.style.display = "none"; // Hide static image
                }
            });
        });
    });