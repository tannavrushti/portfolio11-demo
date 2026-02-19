
//Log in
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid Credentials");
    }
}

//sign up
function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("userEmail", "-tanna123@gmail.com");
    localStorage.setItem("userPassword", "123456");

    alert("Signup Successful!");
    window.location.href = "login.html";
}

//navbar 
const isLoggedIn = localStorage.getItem("isLoggedIn");
const loginLink = document.getElementById("loginLink");
const signupLink = document.getElementById("signupLink");
const logoutLink = document.getElementById("logoutLink");

if (isLoggedIn === "true") {
    loginLink.classList.add("hidden");
    signupLink.classList.add("hidden");
    logoutLink.classList.remove("hidden");
}

//logout
logoutLink.addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");

    loginLink.classList.remove("hidden");
    signupLink.classList.remove("hidden");
    logoutLink.classList.add("hidden");

    alert("Logged Out Successfully");

    window.location.reload();
});
//contact
function sendMessage() {

    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const message = document.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("⚠ Please fill all fields!");
        return;
    }

    if (!validateEmail(email)) {
        alert("⚠ Enter valid email address!");
        return;
    }

    alert("✅ Message Sent Successfully 🚀");

}

