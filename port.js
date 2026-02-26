//Log in
document.addEventListener("DOMContentLoaded", function () {
    let Form = document.getElementById("loginForm");
    if (Form) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let email = document.getElementById("liemail").value;
            let password = document.getElementById("lipassword").value;

            let savedUser = JSON.parse(localStorage.getItem("user"));


            if (savedUser && email === savedUser.email && password === savedUser.password) {
                localStorage.setItem("isLoggedIn", "true");
                alert("Login Successful!");
                window.location.href = "index.html";

            } else {
                alert("Invalid data");
            }
        });
    }
});
//sign up
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("signupForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;


            if (name == "" || email == "" || password == "") {
                alert("please fill all fields");
                return;
            }

            let user = {
                name: name,
                email: email,
                password: password
            };
            localStorage.setItem("user", JSON.stringify(user));
            alert("Signup Successful!");

            window.location.href = "login.html";
        });
    }
});

// LOGOUT
document.addEventListener("DOMContentLoaded", function () {
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    let authLinks = document.getElementById("authLinks");
    let logoutBtn = document.getElementById("logoutBtn");

    if (isLoggedIn === "true") {
        authLinks.classList.add("hidden");
        logoutBtn.classList.remove("hidden");
    }else {
        authLinks.classList.remove("hidden");
        logoutBtn.classList.add("hidden");
    }
     let logoutlink = document.getElementById("logoutlink");
     
        logoutlink.addEventListener("click", function () {


            localStorage.removeItem("isLoggedIn");
            alert("Logout Successful!");
            window.location.reload();
        });
    
});
//contact form
function sendMessage() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert(" Please fill all fields!");

    }
    alert("Message Sent Successfully!");

    // Reset form
    document.querySelector("input[type='text']").value = "";
    document.querySelector("input[type='email']").value = "";
    document.querySelector("textarea").value = "";
}

