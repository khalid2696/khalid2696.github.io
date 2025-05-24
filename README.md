# Khalid M Jaffar's Personal Website

## Overview
This project is for hosting my personal website, showcasing my research, publications, teaching, and personal interests.

## Project Structure
The repo is organized into the following directories and files:

- **assets/**: Contains all static assets including CSS, images, and JavaScript files.
  - **css/**: Stylesheets for the website.
    - `stylesheet.css`: Defines the layout, colors, fonts, and other visual aspects of the website.
  - **img/**: Images used throughout the website.
    - `favicon-16x16.png`: Favicon displayed in the browser tab.
    - `profile.png`: Main profile image.
    - `profile-fun1.png`, `profile-fun2.png`, etc.: Alternate profile images for hover and click effects.
  - **js/**: JavaScript files for interactive features.
    - `img_hover.js`: Handles hover and click effects for the profile image.
    - `theme_toggle.js`: Manages light/dark mode toggle functionality.

- **content/**: Contains markdown and HTML files for different sections of the website.
  - `about-me.md`: Content for the "About Me" section.
  - `fun-stuff.md`: Content for the "Fun Stuff" section.
  - **cv.pdf**: Khalid M Jaffar's CV.
  - **research/**: Contains HTML files for research-related content.
    - `journal-conferences.html`: Lists journal and conference publications.
    - `workshops-posters.html`: Lists workshop papers and posters.
  - **projects/**: Contains HTML files for project-related content.
    - `applied-projects.html`: Lists applied engineering projects with technical reports and documentation.
  - **teaching/**: Contains HTML files for teaching-related content.
    - `teaching-experience.html`: Details teaching experience and courses taught.
  - **mirrors/**: Cached useful academic resources in PDF format.
  - **misc/**: Contains additional resources.

- **index.html**: The main HTML file for the website, dynamically linking to the content and templates.

- **README.md**: Documentation for the project, explaining its structure and usage.

## Usage
To run the website, open `index.html` in a web browser. You can modify the content in the markdown or HTML files located in the `content/` directory to update the website's sections. The styles can be adjusted in `assets/css/stylesheet.css`, and any JavaScript functionality can be modified in `assets/js/`.

## Features
- **Dynamic Content Rendering**: Markdown files are dynamically converted to HTML using Showdown.js.
- **Light/Dark Mode Toggle**: A toggle button allows users to switch between light and dark themes.
- **Interactive Profile Image**: The profile image changes on hover and click, with alternate images and GIFs.
- **Responsive Design**: The website is mobile-friendly and adapts to different screen sizes.

## Future Updates
This project is designed to be easily modifiable. You can:
- Add new sections by creating new markdown or HTML files in the `content/` directory.
- Enhance the website's appearance by updating `stylesheet.css`.
- Add new interactive features by modifying or adding JavaScript files in `assets/js/`.

## License
This project is open-source and can be modified or redistributed under the terms of the MIT License.