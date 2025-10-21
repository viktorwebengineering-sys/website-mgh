console.log('Hey there');

// Auto-reload every 1 second (adjust as needed)
// setInterval(() => {
//   fetch(window.location.href, { method: 'HEAD', cache: 'no-store' })
//     .then(() => location.reload(true))
//     .catch(() => {});
// }, 1000);

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    // trigger after scrolling 50px
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
