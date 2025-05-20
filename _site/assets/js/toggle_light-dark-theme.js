document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "🌙"; // Set to moon icon for dark mode
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Update the icon and save the theme to localStorage
        if (body.classList.contains("dark-mode")) {
            toggleButton.textContent = "🌙"; // Moon icon for dark mode
            localStorage.setItem("theme", "dark");
        } else {
            toggleButton.textContent = "🌞"; // Sun icon for light mode
            localStorage.setItem("theme", "light");
        }
    });
});