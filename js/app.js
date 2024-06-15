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
 *
 */

const makeSections = (n_sections) => {
  const navBar = document.querySelector("#navbar__list");
  for (let i = 0; i < n_sections; i++) {
    const newListItem = document.createElement("li");
    newListItem.innerText = `Section 0${i + 1}`;

    navBar.appendChild(newListItem);
  }
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
//
// select the nav bar
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
