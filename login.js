// Function to validate email and password
function validateLogin(email, password) {
    const validEmail = 'lucas';
    const validPassword = 'password123';

    return email === validEmail && password === validPassword;
}

document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('.submit-btn');
    const emailInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.password');

    // Set toastr options
    toastr.options = {
        "positionClass": "toast-bottom-center", // Position toastr at the bottom-center
        "closeButton": true, // Shows a close button
        "progressBar": true, // Shows a progress bar
        "preventDuplicates": true, // Prevents showing duplicates
        "newestOnTop": false // Shows new toasts at the bottom
    };

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form from submitting normally

        if (validateLogin(emailInput.value, passwordInput.value)) {
            // Redirect to another page if login is successful
            window.location.href = 'loading.html';
        } else {
            // Display an error message using toastr
            toastr.error("Password or Username Incorrect!");
        }

    document.getElementById('registerLink').addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default anchor action
            window.location.href = 'loading.html'; // Redirect to the registration page
        });
    });
});