gsap.to("#page-2 h1", {
    transform: "translate(-300%)",
    scrollTrigger: {
        trigger: "#page-2 h1",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 1,
        pin: true,
    }
})