const circle = document.getElementById("circle");
const close = document.getElementById("close")
const open = document.getElementById("open")
const horiNav = document.getElementById("horiz-nav")
const content = document.getElementById("content")
const items = document.getElementById("items")
open.addEventListener('click' , () => {
    circle.classList.remove("circle-back")
    circle.classList.add("circle-rotate")
    content.classList.add("rotate")
    content.classList.remove("rotate-back")
    items.classList.add("rotating")
    items.classList.remove("rotating1")
})

close.addEventListener('click' , () => {
    circle.classList.add("circle-back")
    circle.classList.remove("circle-rotate")
    content.classList.add("rotate-back")
    content.classList.remove("rotate")
    items.classList.add("rotating1")
    items.classList.remove("rotating")
})