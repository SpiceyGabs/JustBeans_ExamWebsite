// gsapAnimations.js
// safe init for GSAP + ScrollTrigger

(function() {
  // wait until window load to be certain images/layout are present
  window.addEventListener('load', () => {
    if (typeof gsap === 'undefined') {
      console.error('gsap not found — check that gsap.min.js is loaded BEFORE ScrollTrigger and this file.');
      return;
    }
    if (typeof ScrollTrigger === 'undefined') {
      console.error('ScrollTrigger plugin not found — check that ScrollTrigger.min.js is loaded.');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // debug: show matched elements
    console.log('teamImg elements:', document.querySelectorAll('.teamImg').length);
    console.log('cartImg elements:', document.querySelectorAll('.cartImg').length);

    // Team photo - slide from left -> right
    gsap.from(".teamImg", {
      x: -150,
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".teamImg",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Cart photo - slide from right -> left
    gsap.from(".cartImg", {
      x: 150,
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".cartImg",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });
})();

//Solution from assistive tool:This waits for load (images done) and prints console errors if gsap/ScrollTrigger are missing.
//Open browser DevTools → Console to see the debug logs. If counts are 0 that means class names don't match your HTML.