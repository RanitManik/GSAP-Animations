const string = document.getElementById("string");
let path = `M 100 200 Q 500 200 900 200`
let finalPath = `M 100 200 Q 500 200 900 200`

string.addEventListener("mousemove", (dets) => {
    path = `M 100 200 Q ${dets.x} ${dets.y} 900 200`

    gsap.to("svg path", {
        attr: {d: path},
        duration: 0.3,
        ease: "power3.out",
    })
})
string.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
    })
})