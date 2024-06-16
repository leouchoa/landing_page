/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

NUMBER_OF_SECTIONS = 4;

/**
 * End Global Variables
 * Start Helper Functions
 */

const makeSections = (n_sections) => {
  const navBar = document.querySelector("#navbar__list");
  let activeLink = null; // Track the currently active link

  for (let i = 0; i < n_sections; i++) {
    const newListItem = document.createElement("li");

    const newLink = document.createElement("a");
    newLink.innerText = `Section 0${i + 1}`;
    newLink.href = `#section${i + 1}`;
    newLink.classList.add("menu__link");

    // Add click event listener to scroll and highlight the clicked item
    newLink.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionId = `section${i + 1}`;
      document.querySelector(`#${sectionId}`).scrollIntoView({
        behavior: "smooth",
      });

      // Remove active class from previously active link
      if (activeLink) {
        activeLink.classList.remove("active");
        activeLink.style.color = "black"; // Reset text color
      }

      // Add active class to the clicked link
      newLink.classList.add("active");
      newLink.style.color = "white"; // Set text color to white for active link
      activeLink = newLink;
    });

    // Add mouseover event to change background color
    newListItem.addEventListener("mouseover", () => {
      if (newLink !== activeLink) {
        newListItem.style.backgroundColor = "white";
        newLink.style.color = "white";
      }
    });

    // Add mouseout event to revert background color
    newListItem.addEventListener("mouseout", () => {
      if (newLink !== activeLink) {
        newListItem.style.backgroundColor = "";
        newLink.style.color = "black";
      }
    });

    navBar.appendChild(newListItem);
    newListItem.appendChild(newLink);
  }
};

/**
 * End Helper Functions
 * Begin Main Functions
 */

// build the nav
makeSections(NUMBER_OF_SECTIONS);
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

//
// Set sections as active
