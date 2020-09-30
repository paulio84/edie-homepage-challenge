const menuTrigger = document.querySelector('#menu-trigger');
menuTrigger.addEventListener('change', triggerNoScroll);

const navLinks = document.querySelectorAll('.navigation__link');
navLinks.forEach(function (nl) {
  nl.addEventListener('click', function () {
    menuTrigger.checked = false;
    triggerNoScroll();
  });
});

function triggerNoScroll() {
  if (menuTrigger.checked) {
    document.body.classList.add('u-noscroll');
  } else {
    document.body.classList.remove('u-noscroll');
  }
}

const contactForms = document.querySelectorAll('.contact-form');
contactForms.forEach(function (cf) {
  cf.addEventListener('submit', function (e) {
    e.preventDefault();
  });
});

const pageHeader = document.querySelector('.page-header');
document.addEventListener('scroll', function () {
  if (window.pageYOffset >= 50 && !pageHeader.classList.contains('u-bottom-shadow')) {
    pageHeader.classList.add('u-bottom-shadow');
  } else if (window.pageYOffset < 50 && pageHeader.classList.contains('u-bottom-shadow')) {
    pageHeader.classList.remove('u-bottom-shadow');
  }
});
