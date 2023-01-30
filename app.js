const circle = document.getElementById("circle");
const close = document.getElementById("close")
const open = document.getElementById("open")
const horiNav = document.getElementById("horiz-nav")
const content = document.getElementById("content")
const items = document.getElementById("items")
open.addEventListener('click' , () => {
    circle.classList.remove("circle-back")
    circle.classList.add("circle-rotate")
    content.classList.toggle("rotate")
    items.classList.toggle("rotating")
})

close.addEventListener('click' , () => {
    circle.classList.add("circle-back")
    circle.classList.remove("circle-rotate")
    content.classList.toggle("rotate")
    items.classList.toggle("rotating")
})