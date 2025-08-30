
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const links = document.querySelector('.links');

  if (hamburger && links) {
    hamburger.addEventListener('click', function () {
      links.classList.toggle('active');
    });
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        links.classList.remove('active');
      });
    });
  }
});
