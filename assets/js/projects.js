/*
 * ==========================================
 * =           PROJECTS DATA FILE           =
 * ==========================================
 *
 * This file contains the data for the Projects section.
 * You can add, edit, or remove projects by modifying the projects array below.
 *
 * INSTRUCTIONS FOR EDITING PROJECTS:
 * ----------------------------------
 * 1. To Add a New Project:
 *    - Copy one of the existing project objects (everything between { and }, inside the projects array).
 *    - Paste it at the end of the array (before the closing square bracket ]).
 *    - Make sure to add a comma (,) after the previous object if you're adding a new one.
 *    - Update the properties:
 *      * img: Path to the project image (e.g., "assets/img/your-image.jpg")
 *      * subtitle: The category or type of project (e.g., "Website", "App", "Design")
 *      * title: The name of the project
 *      * description: A brief description of what the project is about
 *      * link: The URL to the project (e.g., GitHub link or live demo)
 *
 * 2. To Edit an Existing Project:
 *    - Locate the project object within the 'projects' array.
 *    - Change the values of the properties you want to update.
 *
 * 3. To Remove a Project:
 *    - Delete the entire object block (from { to }) corresponding to the project you want to remove.
 *    - Ensure the remaining objects are separated by commas.
 *
 * ==========================================
 */

const projects = [
  {
    img: "assets/img/project-1.jpg",
    subtitle: "Website",
    title: "Restaurant Website",
    description:
      "Project that you carry out in the design and structure of the layout, showing the design at the client's request.",
    githubLink: "https://github.com/",
    dribbbleLink: "#",
  },
  {
    img: "assets/img/project-2.jpg",
    subtitle: "App",
    title: "Yoga App",
    description:
      "Project that you carry out in the design and structure of the layout, showing the design at the client's request.",
    githubLink: "https://github.com/",
    dribbbleLink: "#",
  },
  {
    img: "assets/img/project-3.jpg",
    subtitle: "App",
    title: "Fast Food App",
    description:
      "Project that you carry out in the design and structure of the layout, showing the design at the client's request.",
    githubLink: "https://github.com/",
    dribbbleLink: "#",
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
         <a href="${project.dribbbleLink}" target="_blank" class="projects__link">
            <i class="ri-dribbble-line"></i> View
         </a>
      </div>
    `;

    // Append to container
    projectsContainer.appendChild(article);
  });
}
