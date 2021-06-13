const openBtn = document.getElementById("hamburger")
const closeBtn = document.getElementById("cross")
const navBar = document.getElementById("navModal")
// const contentContainer = document.getElementById(".container")

openBtn.addEventListener("click", toggle)
closeBtn.addEventListener("click", toggle)

function toggle() {
    navBar.classList.toggle("active-nav")
    console.log("hello")
    // contentContainer.classList.toggle("inactive-container")
}

// contentContainer.addEventListener("click", close)

function close(event) {
    if (!event.target.classList.contains("material-icons-outlined")) {
        navBar.classList.remove("active-nav")
        // contentContainer.classList.remove("inactive-container")
    }
}


const navLinks = document.querySelectorAll(".nav-list-item-a")

for (let link of navLinks) {
    link.addEventListener("click", toggle)
}
