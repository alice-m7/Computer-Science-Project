var loginForm = document.querySelector('#login-form');
//when login form is submitted
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    var username = loginForm.elements["username-input"].value
    var password = loginForm.elements["password-input"].value

    //validate username and password
    if (username === "admin" && password === "password") {
        //store in local memory
        localStorage.setItem("authenticated", "true")
        console.log("test")
        // Redirect user to main page
        window.location.href = 'index.html';
    } else {
        // Display error message
    alert("Invalid username or password");
    }

});
