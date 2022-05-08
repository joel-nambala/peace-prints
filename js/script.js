'use strict';

/******************************
CHANGE THE COPYRIGHT YEAR DYNAMICALLY
*/
const copyrightYear = document.querySelector('.copyright-year');

const setCopyrightYear = function () {
  const today = new Date().getFullYear();
  copyrightYear.textContent = today;
};

setCopyrightYear();

///////////////////////////////
// FIXED NAVIGATION BAR
const navigation = document.querySelector('.navigation');
const arrowUp = document.querySelector('.arrow__up');
const header = document.querySelector('.header');

const fixedNavigation = function () {
  // 1. Calculate the heights
  const scrollHeight = window.scrollY;
  const navHeight = navigation.getBoundingClientRect().height;
  const headerHeight = header.getBoundingClientRect().height;

  // 2. Check if the scroll height is greator than nav height
  if (scrollHeight > navHeight) navigation.classList.add('sticky');
  else navigation.classList.remove('sticky');

  // 3. Show and hide back to top button
  if (scrollHeight > headerHeight - navHeight) arrowUp.style.display = 'block';
  else arrowUp.style.display = 'none';
};

window.addEventListener('scroll', fixedNavigation);

/////////////////////////////////////////////////
// RESPONSIVE NAVIGATION
const navToggle = document.querySelector('.navigation__menu');
const linksContainer = document.querySelector('.links__container');
const navList = document.querySelector('.navigation__list');

const toggleNav = function () {
  // 1. Calculate the heights
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const navHeight = navList.getBoundingClientRect().height;

  // 2. Add the height to the links container
  if (containerHeight === 0) linksContainer.style.height = `${navHeight}px`;
  else linksContainer.style.height = 0;
};

navToggle.addEventListener('click', toggleNav);

///////////////////////////////////////////////////////////
// SMOOTH SCROLL
const scrollLink = document.querySelectorAll('.scroll-link');

// Loop over the node list
scrollLink.forEach(function (link, i) {
  // Add an event listener to the links
  link.addEventListener('click', function (e) {
    e.preventDefault();
    // 1. Get the target element
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    // Calculate the heights
    const navHeight = navigation.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navigation.classList.contains('sticky');

    // Calculate the current position of the scroll
    let position = element.offsetTop - navHeight;

    if (!fixedNav) position = position - navHeight;
    if (navHeight > 82) position = position + containerHeight;

    // Add the scroll method with the scroll method
    window.scroll({
      left: 0,
      top: position,
    });

    // Remove the height from the links container
    linksContainer.style.height = 0;
  });
});

//////////////////////////////////////////////
// POPUP FUNCTIONALITY
const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.navigation__btn');
const closePopup = document.querySelector('.popup__close');

const openModal = function () {
  popup.classList.remove('remove-popup');
  linksContainer.style.height = 0;
};

const closeModal = function () {
  popup.classList.add('remove-popup');
};

openPopup.addEventListener('click', openModal);
closePopup.addEventListener('click', closeModal);

document.addEventListener('blur', closeModal);
