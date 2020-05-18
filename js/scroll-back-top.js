const $targetHome = document.getElementById('home');
const $upArrown = document.querySelector('.up-arrown');

$upArrown.style.display = 'none';

window.addEventListener('scroll', function (event) {
  const scroll = this.scrollY || this.pageYOffset;
  const heightHomePointScroll = $targetHome.offsetHeight / 2;

  if (scroll <= heightHomePointScroll) {
    $upArrown.style.display = 'none';
  } else {
    $upArrown.style.display = 'inline';
  }
});
