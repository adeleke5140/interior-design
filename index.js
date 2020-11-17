const hamburger = document.querySelector('.hamburger');

const navLinks = document.querySelector('.nav__link');

const links = document.querySelectorAll('.nav__link li');

const line1 = document.querySelector('.line1');

const line2 = document.querySelector('.line2');

const line3 = document.querySelector('.line3');

hamburger.addEventListener('click', () =>{
  navLinks.classList.toggle('open');
  links.forEach(link =>{
    link.classList.toggle('fade');
  });
  line1.classList.toggle('rotateDown');
  line2.classList.toggle('disappear');
  line3.classList.toggle('rotateUp');
});

