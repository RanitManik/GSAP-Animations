gsap.from("header h1", {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "linear"
});

gsap.from("main h1", {
    x: 500,
    opacity: 0,
    duration: 0.5,
    ease: "linear",
    scrollTrigger: {
        trigger: "main h1",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
});

gsap.from("main h2", {
    x: -500,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    ease: "linear",
    scrollTrigger: {
        trigger: "main h2",
        scroller: "body",
        markers: true,
        start: "top 90%"
    }
});

gsap.from("footer h2", {
    y: -200,
    opacity: 0,
    duration: 0.5,
    ease: "linear",
    scrollTrigger: {
        trigger: "footer h2",
        scroller: "body",
        markers: true,
        start: "top 50%"
    }
});
