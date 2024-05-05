let tl = gsap.timeline();

tl.from("h1", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    delay: 0.2,
});

tl.from("li", {
    y: 20,
    opacity: 0,
    duration: 0.3,
    delay: 0.1,
    stagger: 0.2,
})

tl.from("h2", {
    y: -300,
    scale: 0.1,
    opacity: 0,
    duration: 0.6,
    delay: 0.2,
})
