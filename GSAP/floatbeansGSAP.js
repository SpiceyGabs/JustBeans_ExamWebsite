gsap.registerPlugin(MotionPathPlugin);

document.addEventListener("DOMContentLoaded", () => {
  const beans = document.querySelectorAll(".floatBean");

  beans.forEach((bean, i) => {
    // each bean’s path and speed below
    gsap.to(bean, {
      duration: 20 + i * 5,   //
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 100 * (i % 2 === 0 ? 1 : -1), y: -60 },
          { x: 200 * (i % 2 === 0 ? 1 : -1), y: 30 },
          { x: 0, y: 0 }
        ],
        curviness: 3
      }
    });
  });
});