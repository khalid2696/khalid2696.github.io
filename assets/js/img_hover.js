// This file handles the image hover effects for the profile image.

function getRandomImage() {
    const images = [
        'img/profile-fun1.png',
        // Add more fun images here if needed
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById('me').src = images[randomIndex];
}