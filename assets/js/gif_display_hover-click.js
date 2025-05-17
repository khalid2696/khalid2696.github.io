document.addEventListener("DOMContentLoaded", function () {
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
});