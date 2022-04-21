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

//////////////////////////////////////
// SIDE NAV
const navToggle = document.querySelector('.navigation__icon');
const navBar = document.querySelector('.navigation__list');
const navClose = document.querySelector('.side-nav__icon');
const sideNav = document.querySelector('.side-nav');

navToggle.addEventListener('click', function () {
  sideNav.style.transform = `translateX(${0})`;
});

navClose.addEventListener('click', function () {
  sideNav.style.transform = `translateX(${-100}%)`;
});

navBar.addEventListener('click', function () {
  sideNav.style.transform = `translateX(${-100}%)`;
});

////////////////////////////////////////////////
// FIXED NAVIGATION BAR
const header = document.querySelector('.header');
const nav = document.querySelector('.navigation');

window.addEventListener('scroll', function () {
  const scrollHeight = this.window.scrollY;
  const navHeight = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeight) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
