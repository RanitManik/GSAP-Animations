// TimeLine

let tl = gsap.timeline();

tl.to("#box-1", {
    x: 150,
    rotate: 360,
    duration: 1.5,
    delay: 0.5,
})

tl.to("#box-2", {
    x: 150,
    rotate: 360,
    duration: 1.5,
    delay: 0.5,
})

tl.to("#box-3", {
    x: 150,
    rotate: 360,
    duration: 1.5,
    delay: 0.5,
})


/*
gsap.to("#box-1", {
    x:150,
    rotate: 360,
    duration: 1.5,
    delay: 0.5,
});

gsap.to("#box-2", {
    x:150,
    rotate: 360,
    duration: 1.5,
    delay: 2,
});

gsap.to("#box-3", {
    x:150,
    rotate: 360,
    duration: 1.5,
    delay: 3.5,
})*/
