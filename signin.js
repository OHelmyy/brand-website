function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email !== "amr123@gmail.com" || password !== "1234") {
        alert("Invalid email or password. Please try again.");
        return false;
    } else {
        // Redirect to the home page
        window.location.href = "home.html";
        return false; // Prevent form submission
    }
}
