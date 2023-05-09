const homeLink = document.getElementById('home-link');
const navHead = document.querySelector('.nav-head');
const mainContent = document.querySelector('main');
const col3 = document.querySelector('.col-3');
const col9 = document.querySelector('.col-9');

homeLink.addEventListener('click', function() {
  navHead.classList.toggle('home-hidden');
  mainContent.classList.toggle('home-hidden');
  col3.classList.toggle('col-3');
  col3.classList.toggle('col-1');
  col9.classList.toggle('col-9');
  col9.classList.toggle('col-11');
});
