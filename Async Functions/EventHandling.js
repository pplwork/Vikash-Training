const outer = document.querySelector(".outer")
const middle = document.querySelector(".middle")
const inner = document.querySelector(".inner")

const heading = document.querySelector(".heading")
const paragraph = document.querySelector(".paragraph")

const keypressEvents = document.querySelector(".keypressEvents")

outer.addEventListener("click", (e) => e.target.style.backgroundColor = "blue")
middle.addEventListener("click", (e) => e.target.style.backgroundColor = "green")
inner.addEventListener("click", (e) => e.target.style.backgroundColor = "pink")


outer.addEventListener("click", (e) => console.log(e.target.style))
middle.addEventListener("click", (e) => console.log(e.target))
inner.addEventListener("click", (e) => console.log(e.target))

middle.addEventListener("click", (e) => e.target.style.backgroundColor = "blue")
inner.addEventListener("click", (e) => e.target.style.backgroundColor = "blue")

heading.addEventListener("click", (e) => e.target.textContent = "This is Changed Text")
heading.addEventListener("click", (e) => paragraph.textContent = "This is Changed Text")


keypressEvents.addEventListener("click", (e) => console.log(e.target))
keypressEvents.addEventListener("mousemove",(e)=>{
    e.target.textContent="yo"
    setTimeout(()=>{
        console.log(e.target.textContent="Event after key is pressed")
    },300)
})
keypressEvents.addEventListener('keydown', logKey)

function logKey(e) {
    console.log(e)
    inner.textContent = "changed"
    inner.textContent += ` ${e.code}`;
}