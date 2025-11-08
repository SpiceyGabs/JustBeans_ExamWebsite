// Register plugin
gsap.registerPlugin(ScrollTrigger);

// Team photo - slide from left to right
gsap.from(".teamImg", {
  x: -150,
  opacity: 0,
  duration: 0.3,
  scrollTrigger: {
    trigger: ".teamImg",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// Cart photo - slide from right to left
gsap.from(".cartImg", {
  x: 150,
  opacity: 0,
  duration: 0.3,
  scrollTrigger: {
    trigger: ".cartImg",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
