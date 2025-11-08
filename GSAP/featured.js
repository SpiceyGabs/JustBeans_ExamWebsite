
const cards = document.querySelectorAll(
  ".packageCard, .relatedCard, .productCard, .beanCard, .galleryGrid img"
);
const merchImgs = document.querySelectorAll(".merchImg");
merchImgs.forEach((img, i) => {
  gsap.fromTo(
    img,
    { y: 60, opacity: 0, scale: 0.95 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: i * 0.05,
      scrollTrigger: {
        trigger: img,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
});