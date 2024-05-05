gsap.to("#box-1", {
    x: 400,
    rotate: 360,
    backgroundColor: "blue",
    borderRadius: "50%",
    duration: 2,
    delay: 1,
    repeat: -1,
    yoyo: true,
});

gsap.from("#box-2", {
    x: 400,
    rotate: 360,
    backgroundColor: "blue",
    borderRadius: "0%",
    duration: 2,
    delay: 1,
    repeat: -1,
    yoyo: true,
});
