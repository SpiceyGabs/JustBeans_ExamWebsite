
//GSAP animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate product cards on scroll
    gsap.registerPlugin(ScrollTrigger);

    // Animate all product cards
    gsap.utils.toArray('.productCard, .beanCard, .packageCard').forEach((card, i) => {
        gsap.fromTo(card, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Animate gallery images
    gsap.utils.toArray('.galleryImg').forEach((img, i) => {
        gsap.fromTo(img, {
            scale: 0.8,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.05,
            scrollTrigger: {
                trigger: img,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });
    });
});