gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".aboutParagraph").forEach((paragraph) => {
  gsap.to(paragraph, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: paragraph,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});