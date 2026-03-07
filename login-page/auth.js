function switchForm() {
    document.getElementById("loginForm").classList.toggle("active");
    document.getElementById("registerForm").classList.toggle("active");
}

// Demo Submit
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
});
