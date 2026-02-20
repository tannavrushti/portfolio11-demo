//Log in
function login() {
    let email = document.getElementById("liemail").value;
    let password = document.getElementById("lipassword").value;
    let storedUser = JSON.parse(localStorage.getItem("user"));


    if (email === storedUser.email && password === storedUser.password) {
        localStorage.setItem("isLoggedIn", "true");
        window.location = "log.html"

    } else {
        alert("Invalid data");
    }
}

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

            localStorage.setItem("userEmail", email);
            localStorage.setItem("userpassword", password);



            let user = {
                name: name,
                email: email,
                password: password
            };
            localStorage.setItem("userData", JSON.stringify("user"));
            alert("Signup Successful!");

            window.location = "login.html";
        });
    }
});


//CHECK LOGIN
window.onload = function () {
    let path = window.location.pathname;

    if (path.includes("dashboard.html")) {
        let logged = localStorage.getItem("isLoggedIn");
        if (logged !== "true") {
            alert("Please login first");
            window.location = "login.html";
        } else {
            let user = JSON.parse(localStorage.getItem("user"));
            document.getElementById("userDisplay").innerText = "Hi " + user.name;
        }
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("isLoggedIn");
    alert("Logout successful");
    window.location = "login.html";
}