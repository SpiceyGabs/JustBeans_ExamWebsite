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








//SCROLLTRIGGER RAAHHHH,broken
// gsap.registerPlugin(ScrollTrigger, ModifiersPlugin);

// // Get elements
// const track = document.querySelector(".carouselTrack");
// const slides = gsap.utils.toArray(".productCard");
// // const prevBtn = document.querySelector(".prev");
// // const nextBtn = document.querySelector(".next");

// function getSlideWidth() {
//   return slides[0].offsetWidth + 20;
// }

// function initInfiniteCarousel() {
//   const totalWidth = getSlideWidth() * slides.length;

//   // Position slides horizontally
//   gsap.set(slides, {
//     x: (i) => i * getSlideWidth()
//   });

//   // Infinite loop animation
//   gsap.to(slides, {
//     x: "+=" + getSlideWidth(),             // Moves right, for left change x: "-=" 
//     duration: 3,                           // Speed
//     ease: "none",
//     repeat: -1,
//     modifiers: {
//       x: gsap.utils.unitize((x) => {
//         return (parseFloat(x) % totalWidth);
//       })
//     }
//   });
// }

// // init?? after images load:
// window.addEventListener("load", initInfiniteCarousel);

//SCROLLTRIGGER RAAHHHH
// Continuous infinite product-card carousel (wraps existing markup)
// Requires: gsap, ScrollTrigger (optional), ModifiersPlugin
(function() {
  // safety guard
  if (typeof gsap === "undefined") {
    console.error("gsap missing");
    return;
  }
  if (typeof ModifiersPlugin === "undefined") {
    console.error("ModifiersPlugin missing — include ModifiersPlugin.min.js before this file.");
    return;
  }

  gsap.registerPlugin(ModifiersPlugin, ScrollTrigger);

  // Config
  const GAP = 20; // px gap between slides (match your CSS)
  let anim;

  function buildCarousel() {
    // find container that currently holds .productCard elements
    const productsSection = document.querySelector(".productsSection");
    if (!productsSection) {
      console.error(".productsSection not found");
      return;
    }

    // get all productCard children
    const cards = Array.from(productsSection.querySelectorAll(".productCard"));
    if (!cards.length) {
      console.error("No .productCard elements found inside .productsSection");
      return;
    }

    // create viewport + track and move cards into track
    let viewport = productsSection.querySelector(".carouselViewport");
    if (!viewport) {
      viewport = document.createElement("div");
      viewport.className = "carouselViewport";
      // move the cards' parent children into viewport
      // create a track
      const track = document.createElement("div");
      track.className = "carouselTrack";

      // move only the productCard nodes into the track
      cards.forEach(card => {
        track.appendChild(card);
      });

      // append track into viewport, and viewport into productsSection
      viewport.appendChild(track);
      // if productsSection had other text (like .productText), keep it: insert viewport after .productText
      const productText = productsSection.querySelector(".productText");
      if (productText) {
        productText.insertAdjacentElement("afterend", viewport);
      } else {
        productsSection.appendChild(viewport);
      }
    }

    const track = viewport.querySelector(".carouselTrack");
    const slides = gsap.utils.toArray(track.querySelectorAll(".productCard"));

    // ensure track and slides exist
    if (!track || slides.length === 0) {
      console.error("carouselTrack or slides missing");
      return;
    }

    // helper to compute slide width (+ gap)
    function getSlideWidth() {
      const rect = slides[0].getBoundingClientRect();
      return Math.round(rect.width + GAP);
    }

    // set initial positions (x)
    function positionSlides() {
      const slideW = getSlideWidth();
      gsap.set(slides, {
        x: (i) => i * slideW
      });
      return slideW;
    }

    // init/refresh infinite animation
    function initAnimation() {
      const slideW = positionSlides();
      const totalWidth = slideW * slides.length;

      // kill previous anim if exists
      if (anim) anim.kill();

      anim = gsap.to(slides, {
        x: "+=" + slideW,      // direction and chunk to move each tick
        duration: 3,           // lower = faster
        ease: "none",
        repeat: -1,
        modifiers: {
          x: function(x) {
            // x is a string like "123.45px" or "-10px"
            const n = parseFloat(x);
            // positive mod in range [0, totalWidth)
            const mod = ((n % totalWidth) + totalWidth) % totalWidth;
            return mod + "px";
          }
        }
      });
    }

    // pause/resume on hover
    viewport.addEventListener("mouseenter", () => anim && anim.pause());
    viewport.addEventListener("mouseleave", () => anim && anim.resume());

    // responsive: recompute on resize (debounced)
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initAnimation();
      }, 150);
    });

    // start
    initAnimation();
  }

  // Wait until window load so images have size
  if (document.readyState === "complete") {
    buildCarousel();
  } else {
    window.addEventListener("load", buildCarousel);
  }
})();
