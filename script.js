document.addEventListener('DOMContentLoaded', function() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const navMenu = document.querySelector('.list-left');
  const navLinks = document.querySelectorAll('.list-left ul li a');

  // Fullscreen Image Viewer
  const costlRegisterImg = document.getElementById('costl-register-img');
  const cartrawlerWidgetImg = document.getElementById('cartrawler-widget-img');
  const fullscreenModal = document.getElementById('fullscreen-modal');
  const fullscreenImg = document.getElementById('fullscreen-img');
  const closeModal = document.getElementById('close-modal');

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

  // Open fullscreen when clicking the image
  if (costlRegisterImg) {
    costlRegisterImg.addEventListener('click', function() {
      fullscreenModal.classList.add('active');
      fullscreenImg.src = this.src;
      document.body.classList.add('no-scroll');
    });
  }

  // Open fullscreen when clicking the image
  if (cartrawlerWidgetImg) {
    cartrawlerWidgetImg.addEventListener('click', function() {
      fullscreenModal.classList.add('active');
      fullscreenImg.src = this.src;
      document.body.classList.add('no-scroll');
    });
  }

  // Close fullscreen when clicking the X button
  if (closeModal) {
    closeModal.addEventListener('click', function() {
      fullscreenModal.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  }

  // Close fullscreen when clicking outside the image
  if (fullscreenModal) {
    fullscreenModal.addEventListener('click', function(e) {
      if (e.target === fullscreenModal) {
        fullscreenModal.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  }

  // Close fullscreen with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && fullscreenModal.classList.contains('active')) {
      fullscreenModal.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });
});
