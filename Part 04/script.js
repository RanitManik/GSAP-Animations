const main = document.querySelector("#main")
const cursor = document.querySelector("#cursor")
const image = document.querySelector("#image")
const cursorImage =
    document.getElementById('cursor-up-arrow-icon');

// window.cursor.style.display = "none";

main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "black.out",
    })
})

image.addEventListener("mouseenter", () => {
    cursorImage.style.display = "block";
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "rgba(255, 255, 255, 0.6)"
    })
})
image.addEventListener("mouseleave", () => {
    cursorImage.style.display = "none";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white"
    })
})