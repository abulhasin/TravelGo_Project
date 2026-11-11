// Show Sign Up Form
function showSignup() {
    document.getElementById("signupSection").style.display = "block";
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

// Login Validation
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        if (email === "iiuc@gmail.com" && password === "1234") {

            alert("Login Successful!");

        } else {

            alert("Invalid email or password!");

            loginForm.reset();

        }

    });

}

// Sign Up Validation
const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {

            alert("Passwords do not match!");

            return;

        }

        alert("Registration Successful!");

        signupForm.reset();

    });

}

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you! Your message has been sent.");

        contactForm.reset();

    });

}