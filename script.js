// open Menu
function openNav() {
    document.getElementById("myNav").style.width = "80%"
}
// close menu
function closeNav() {
    document.getElementById("myNav").style.width = "0"
}
// show user data and platform
function showUserdeviceInfo() {
    console.log(navigator.userAgentData.platform);
    console.log(navigator.userAgent);
    console.log(navigator.userAgentData.platform);
    console.log(navigator.userAgentData.mobile);
    console.log(navigator.userAgentData.brands);
    return
}
// export default showUserdeviceInfo
showUserdeviceInfo()
// select all start divs
const startContainerDivs = document.querySelectorAll("#Start-container")
startContainerDivs.forEach(startdiv=>{
    startdiv.style.border = "1px solid gray"
})

const logibBtn = document.querySelector("#login-btn")

logibBtn.addEventListener('click' , ()=>{
    if(!localStorage.getItem("codeAmozemail")){
        window.location.href = "form.html"
    } else{
        logibBtn.style.display = "none"
        course.style.display = "flex"
    }
})


// mobile navs (Li)
const homeLi = document.getElementById("homeLi")
const courseLi = document.getElementById("courseLi")
const userLi = document.getElementById("userLi")
window.addEventListener('click' , ()=>{
    if(window.location.href.includes("index.html")){
        homeLi.style.backgroundColor = "gray"
        homeLi.style.color = "white"
    }
})






