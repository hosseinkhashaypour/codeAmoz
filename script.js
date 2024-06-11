import  {find}  from "./search.js";
find();
// open Menu
const openMenu = document.querySelector(".menu-mobile")
openMenu.addEventListener('click' , ()=>{
    document.getElementById("myNav").style.width = "80%"
})
//close menu
const closeMenu = document.querySelector(".closebtn")
closeMenu.addEventListener('click' , ()=>{
    document.getElementById("myNav").style.width = "0"
})
// select all start divs
const startContainerDivs = document.querySelectorAll("#Start-container")
startContainerDivs.forEach(startdiv => {
    startdiv.style.border = "1px solid gray"
})

const logibBtn = document.querySelector("#login-btn")

logibBtn.addEventListener('click', () => {
    if (!localStorage.getItem("codeAmozemail")) {
        window.location.href = "form.html"
    } else {
        logibBtn.style.display = "none"
        course.style.display = "flex"
    }
})


// mobile navs (Li)
const homeLi = document.getElementById("homeLi")
const courseLi = document.getElementById("courseLi")
const userLi = document.getElementById("userLi")
window.addEventListener('click', () => {
    if (window.location.href.includes("index.html")) {
        homeLi.style.backgroundColor = "gray"
        homeLi.style.color = "white"
    }
})

const form = document.querySelector("form")
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

