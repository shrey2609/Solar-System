// Smooth Scrolling with offset
$('.sections a, .btn a, .logo a').on('click', function (event) {
  if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      if ($(hash).length) {
          $('html, body').animate(
              {
                  scrollTop: $(hash).offset().top - 80
              },
              800
          );
      }
  }
});

// Remove anchor from URL bar
var Webflow = Webflow || [];
Webflow.push(function () {
  $('a').click(function () {
      setTimeout(function () {
          history.replaceState(null, null, ' ');
      }, 0);
  });
});

// Hamburger Menu
const hamButton = document.querySelector('.hamwrap');
const navbarLinks = document.querySelector('.navbar-links ul');
const closeHam = document.querySelector('.navbar-links');
const cross = document.querySelector('.first');
const cross1 = document.querySelector('.second');
const cross2 = document.querySelector('.third');

if (hamButton && navbarLinks && closeHam && cross && cross1 && cross2) {
  hamButton.addEventListener('click', (e) => {
      e.preventDefault();
      navbarLinks.classList.toggle('navbar-links_active');
      cross.classList.toggle('f');
      cross1.classList.toggle('s');
      cross2.classList.toggle('t');
      closeHam.classList.toggle('navbar-links_expanded');
  });

  closeHam.addEventListener('click', () => {
      hamButton.click();
  });

  window.addEventListener('scroll', () => {
      navbarLinks.classList.remove('navbar-links_active');
      hamButton.classList.remove('hamwrap_active');
      cross.classList.remove('f');
      cross1.classList.remove('s');
      cross2.classList.remove('t');
      closeHam.classList.remove('navbar-links_expanded');
  });
}

//  Phobos
const modalbtnPhobos = document.getElementsByClassName('modalbtnPhobos')[0];
const modalPhobos = document.getElementById('phobos_overlay');
const closebtnPhobos = document.getElementsByClassName('closebtnPhobos')[0];

if (modalbtnPhobos && modalPhobos && closebtnPhobos) {
  modalbtnPhobos.addEventListener('click', openmodalPhobos);
  closebtnPhobos.addEventListener('click', closemodalPhobos);
  window.addEventListener('click', outsideclickPhobos);
}

function openmodalPhobos() {
  if (modalPhobos) {
      modalPhobos.style.display = 'block';
      document.body.style.overflow = 'hidden';
  }
}

function closemodalPhobos() {
  if (modalPhobos) {
      modalPhobos.style.display = 'none';
      document.body.style.overflow = 'auto';
  }
}

function outsideclickPhobos(e) {
  if (e.target === modalPhobos) {
      closemodalPhobos();
  }
}

//  Deimos
const modalbtnDeimos = document.getElementsByClassName('modalbtnDeimos')[0];
const modalDeimos = document.getElementById('deimos_overlay');
const closebtnDeimos = document.getElementsByClassName('closebtnDeimos')[0];

if (modalbtnDeimos && modalDeimos && closebtnDeimos) {
  modalbtnDeimos.addEventListener('click', openmodalDeimos);
  closebtnDeimos.addEventListener('click', closemodalDeimos);
  window.addEventListener('click', outsideclickDeimos);
}

function openmodalDeimos() {
  if (modalDeimos) {
      modalDeimos.style.display = 'block';
      document.body.style.overflow = 'hidden';
  }
}

function closemodalDeimos() {
  if (modalDeimos) {
      modalDeimos.style.display = 'none';
      document.body.style.overflow = 'auto';
  }
}

function outsideclickDeimos(e) {
  if (e.target === modalDeimos) {
      closemodalDeimos();
  }
}
