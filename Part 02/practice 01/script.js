gsap.from("#box-1", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        trigger: "#box-1",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
});

gsap.from("#box-2", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        trigger: "#box-2",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
});

gsap.from("#box-3", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        trigger: "#box-3",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
})