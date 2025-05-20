// This file handles the image hover effects for the profile image.

document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.getElementById("me");
    const defaultImage = "assets/img/profile.png";
    const images = [
        "assets/img/profile-fun1.png",
        "assets/img/profile-fun2.png",
        // Add more fun images here if needed
    ];

    let isRandomImage = false; // Track whether a random image is displayed

    // Function to get a random image
    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    // Add hover functionality (for desktop)
    profileImage.addEventListener("mouseover", function () {
        profileImage.src = getRandomImage();
    });

    profileImage.addEventListener("mouseout", function () {
        profileImage.src = defaultImage;
    });

    // Add click functionality (for touchscreen devices)
    profileImage.addEventListener("click", function () {
        if (isRandomImage) {
            profileImage.src = defaultImage; // Revert to default image
            isRandomImage = false;
        } else {
            profileImage.src = getRandomImage(); // Show random image
            isRandomImage = true;
        }
    });
});