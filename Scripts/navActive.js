
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

document.addEventListener('DOMContentLoaded', () => {
  // Select all nav links inside both topNav and sideNav
  const navLinks = document.querySelectorAll('.topNav, .sideNav .navLink');

  // Get the current page file name (e.g. "Products.html")
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