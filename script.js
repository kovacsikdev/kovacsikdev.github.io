document.addEventListener('DOMContentLoaded', function() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const navMenu = document.querySelector('.list-left');
  const navLinks = document.querySelectorAll('.list-left ul li a');

  // Toggle menu when clicking hamburger icon
  hamburgerIcon.addEventListener('click', function() {
    hamburgerIcon.classList.toggle('open');
    navMenu.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  });

  // Close menu when clicking a navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburgerIcon.classList.remove('open');
      navMenu.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  });
});
