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




document.querySelector(".input-fields").addEventListener("submit", submitForm)

function submitForm(event) {
    event.preventDefault()

    let name = document.querySelector(".name").value
    let email = document.querySelector(".email").value
    let message = document.querySelector(".message").value

    document.querySelector(".input-fields").reset()

    sendEmail(name, email, message)
}

// send email info
function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "artur.friedrich.harka@gmail.com",
        Password: "fplqvyogfanioljg",
        To: "artur.friedrich.harka@gmail.com",
        From: "artur.friedrich.harka@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
    }).then((message) => alert("Sent successfully!"))
}
