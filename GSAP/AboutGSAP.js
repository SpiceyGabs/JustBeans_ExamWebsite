gsap.registerPlugin(ScrollTrigger, ModifiersPlugin);

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
      duration: 3,
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
      duration: 3,
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
//Open browser DevTools and go to Console to see the debug logs. If counts are 0 that means class names don't match my HTML.

//SCROLLTRIGGER RAAHHHH
gsap.registerPlugin(ScrollTrigger, ModifiersPlugin);

// Get elements
const track = document.querySelector(".carouselTrack");
const slides = gsap.utils.toArray(".productCard");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

function getSlideWidth() {
  return slides[0].offsetWidth + 20;
}

function initInfiniteCarousel() {
  const totalWidth = getSlideWidth() * slides.length;

  // Position slides horizontally
  gsap.set(slides, {
    x: (i) => i * getSlideWidth()
  });

  // Infinite loop animation
  gsap.to(slides, {
    x: "+=" + getSlideWidth(),             // Moves right, for left change x: "-=" 
    duration: 3,                           // Speed
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => {
        return (parseFloat(x) % totalWidth);
      })
    }
  });
}

// init?? after images load:
window.addEventListener("load", initInfiniteCarousel);