/**
 * PROJECTS DATA
 * Update the 'projects' array to manage portfolio items.
 * Maintain the existing object structure (img, subtitle, title, description, links).
 */

const projects = [
    {
        img: "assets/img/project-1.jpg",
        subtitle: "Website",
        title: "Somthing here ",
        description:
            "Here goes project description .",
        githubLink: "https://github.com/",
        deployedLink: "#",
    },
    {
        img: "assets/img/project-2.jpg",
        subtitle: "App",
        title: "Yoga App",
        description:
            "Project that you carry out in the design and structure of the layout, showing the design at the client's request.",
        githubLink: "https://github.com/",
        deployedLink: "#",
    },
];

/*
 * Function to render projects dynamically
 */
const projectsContainer = document.querySelector(".projects__container");

if (projectsContainer) {
    projects.forEach((project) => {
        // Create the article element
        const article = document.createElement("article");
        article.classList.add("projects__card");

        // Build the inner HTML
        article.innerHTML = `
      <div class="projects__image">
         <img src="${project.img}" alt="${project.title}" class="projects__img">
         <a href="#" class="projects__button button">
            <i class="ri-arrow-right-up-line"></i>
         </a>
      </div>

      <div class="projects__content">
         <span class="projects__subtitle">${project.subtitle}</span>
         <h3 class="projects__title">${project.title}</h3>
         <p class="projects__description">
            ${project.description}
         </p>
      </div>

      <div class="projects__buttons">
         <a href="${project.githubLink}" target="_blank" class="projects__link">
            <i class="ri-github-line"></i> View
         </a>
         <a href="${project.deployedLink}" target="_blank" class="projects__link">
            <i class="ri-global-line"></i> View
         </a>
      </div>
    `;

        // Append to container
        projectsContainer.appendChild(article);
    });
}
