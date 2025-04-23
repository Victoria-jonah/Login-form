

function showMessage() {
    let nameInput = document.getElementById("userName").value.trim();
    let emailInput = document.getElementById("Email").value.trim();
    let passwordInput = document.getElementById("Password").value.trim();

    let error = document.getElementById("errorMsg");
    let messageBox = document.getElementById("message");

    error.innerText = "";
    messageBox.innerHTML = "";

    if (nameInput === "") {
        error.innerText = "Please enter your name properly.";
        error.style.color = "red";
        return;
    }

    if (emailInput === "") {
        error.innerText = "Your email is required.";
        error.style.color = "red";
        return;
    }
    
    if (passwordInput.length > 6) {
        error.innerText = "Your password shouldn't be more than six characters.";
        error.style.color = "red";
        return;
    }

    messageBox.innerHTML = `Hello and welcome <b>${nameInput}</b>!<br>You've successfully registered for this program.`;
    messageBox.style.color = "white";
}