# landing_page

## Accomplishing the Landing Page Project

### Project Objective

The primary goal of this project was to convert a static landing page into a
dynamic and interactive one. The original project contained basic HTML
and CSS structures, and the task was to enhance the page's functionality using
JavaScript to add dinamic styling (here in the number of sections in the
navigation bar, as well dynamic scrolling).

### Dynamic Navigation Menu

To begin, the `app.js` file was integrated into the `index.html` file, placing
it at the end of the body section. This setup ensured that all DOM elements were
fully loaded before any JavaScript code execution.

Now one of the significant enhancements involved creating a dynamic navigation menu
that updates based on the number of sections present in the DOM. This was
accomplished by:

1. **Navigation Construction**: A function was written to construct the
navigation menu items dynamically. This function iterated through each section
in the document, adding corresponding navigation links to the menu.

2. **Adding Event Listeners**: For each navigation item, an event listener was
added to scroll the page smoothly to the respective section upon a click event,
a mouse-over event and a mouse-out event. This feature significantly improved
navigation and user experience by letting it know which section was being
scrolled into.

Finally, ensuring the landing page was responsive was crucial. The navigation
bar layout was adjusted to adapt to different screen sizes on smaller screens,
like tablet and mobile devices, to maintain readability and usability.

In conclusion, by dynamically constructing the navigation menu and implementing smooth
scrolling, a static landing page was transformed into an interactive and
responsive web application.

