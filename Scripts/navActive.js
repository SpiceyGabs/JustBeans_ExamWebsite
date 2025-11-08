
// document.addEventListener('DOMContentLoaded', () => {
//   const navLinks = document.querySelectorAll('.navLink');

//   const currentPage = window.location.pathname.split('/').pop();

//   navLinks.forEach(link => {
//     const linkPage = link.getAttribute('href').split('/').pop();

//     if (linkPage === currentPage) {
//       link.classList.add('active');
//     }
//   });
// });


document.addEventListener("DOMContentLoaded", () => {
  const sideNav = document.querySelector(".sideNav");
  const bannerVideo = document.querySelector(".bannerVideo");

  if (!sideNav || !bannerVideo) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        sideNav.classList.add("visible");
      } else {
        sideNav.classList.remove("visible");
      }
    });
  }, { threshold: 0.3 });

  observer.observe(bannerVideo);
});


document.addEventListener('DOMContentLoaded', () => {
  // Selects all nav links inside both topNav and sideNav
  const navLinks = document.querySelectorAll('.topNav .navLink, .sideNav .navLink');

  // Get the current page file name (so "Products.html")
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();

    // Add the 'active' class if the link matches the current page
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active'); // just to reset others
    }
  });
});
