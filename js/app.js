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
 * Define Global Variables
 * 
*/

const navbarList = document.querySelector('#navbar__list');
const sections = document.getElementsByClassName('landing__container');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const buildNav = () => {

  for (const element of sections) {
    const sectionHeading = element.firstElementChild;
    const sectionHeadingText = sectionHeading.innerText;
    const anchor = "#" + element.parentElement.id;
      
      const navItem = document.createElement('li');
      navItem.setAttribute('class', 'navbar__menu');

      const navLink = document.createElement('a');
      navLink.innerText = sectionHeadingText;
      navLink.setAttribute('href', anchor)
      navLink.setAttribute('class', 'menu__link')

      navItem.appendChild(navLink);
      navbarList.appendChild(navItem);
    }
}

// Add class 'active' to section when near top of viewport

const makeActive = () => {
  const section = document.querySelectorAll('section');
  for (const active of section) {
    const box = active.getBoundingClientRect();
    if (box.top <= 150 && box.bottom >= 150) {
      // Apply active state on the current section.
      active.classList.add('your-active-class');
    } else {
      // Remove active state from other section.
      active.classList.remove('your-active-class'); 
    }
  }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

buildNav();

// Hides navbar when user is not scrolling

const hideNav = () => {
let lastScrollTop = 0;
let navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top = '-100px';
  } else {
    navbar.style.top='0';
  }
  lastScrollTop = scrollTop;
});
}

hideNav();


// Make sections active
document.addEventListener("scroll", function() {
  makeActive();
});

// Scroll to section on link click

const navLinks = document.querySelectorAll('a')
 
for (const link of navLinks) {
    link.addEventListener('click', event => {
        const href = link.getAttribute('href')
        const target = document.querySelector(href)
        target.scrollIntoView({
            behavior: 'smooth',
        });
        history.pushState(null, '', href)
        event.preventDefault()
    });
}

// Set sections as active

// Set sections as active

// Back to Top button

topButton = document.getElementById("topButton");

window.onscroll = () => {scrollFunction()};

const scrollFunction = () => {
  if (document.documentElement.scrollTop > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

const backToTop = () => {
  document.documentElement.scrollTop = 0;
}