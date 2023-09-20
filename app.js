document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const emailInput = document.getElementById("email");
    const errorMsg = document.querySelector('.error');
    const dismissBtn = document.querySelector('.dismiss__btn');
    const thanksPage = document.querySelector('.thanks__article');
    const mainPage = document.querySelector('.main__article');
    const uEmail = document.querySelector('.user__email');
    form.addEventListener("submit", function (event) {
        if (!emailInput.checkValidity()) {
            // Prevent form submission
            event.preventDefault();
            errorMsg.style.display = 'block';
            emailInput.classList.add('error__input');
        } else {
            // Hide the error message if the email is valid
            errorMsg.style.display = 'none';
            mainPage.style.display='none';
            thanksPage.style.display='grid';
            const userEmail = emailInput.value;
            uEmail.textContent = userEmail

            event.preventDefault();
        }
    });

    // Add an event listener to the dismiss button
    dismissBtn.addEventListener('click', function () {
        mainPage.style.display='flex';
            thanksPage.style.display='none'
    });
});
