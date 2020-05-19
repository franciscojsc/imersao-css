const $menu = document.querySelector('.menu');
const $targetAbout = document.getElementById('about');
const $targetPortfolio = document.getElementById('portfolio');
const $targetContact = document.getElementById('contact');

document
  .querySelector('.menu [href="#about"]')
  .addEventListener('click', function (event) {
    event.preventDefault();
    location.href = '#about';
    const scroll = $targetAbout.offsetTop - $menu.scrollHeight;
    window.scroll(0, scroll);
  });

document
  .querySelector('.menu [href="#portfolio"]')
  .addEventListener('click', function (event) {
    event.preventDefault();
    location.href = '#portfolio';
    const scroll = $targetPortfolio.offsetTop - $menu.scrollHeight;
    window.scroll(0, scroll);
  });

document
  .querySelector('.menu [href="#contact"]')
  .addEventListener('click', function (event) {
    event.preventDefault();
    location.href = '#contact';
    const scroll = $targetContact.offsetTop - $menu.scrollHeight;
    window.scroll(0, scroll);
  });
