gsap.registerPlugin(ScrollTrigger);

gsap.from('.dish', {
    y: 400,
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
        trigger: ".menu",
        ease: "circ.out",
        start: "top 70%",
        markers: false,
    }
});

gsap.from('.animate', {
    xPercent: -100,
    duration: 5,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "plate",
        start: "top 80%",
        markers: false,
    }

});