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
    document.body.classList.add('noscroll');
  } else {
    document.body.classList.remove('noscroll');
  }
}
