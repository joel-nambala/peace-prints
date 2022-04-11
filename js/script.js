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
