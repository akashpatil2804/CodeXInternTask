let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let text = document.querySelector('.text');


signInBtn.addEventListener('click', () => {
    nameField.style.display = 'none';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password <a href="#">Click Here!</a>';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.tranform ='translateX(35px)';
});

signUpBtn.addEventListener('click', () => {
    nameField.style.display = 'flex';
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestion <a href="#">Click Here!</a>';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.tranform ='translateX(0)';
});


function validateForm(event) {
    event.preventDefault(); 
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');

    let isValid = true;
    
    
    if (nameField.style.display !== 'none' && nameInput.value.trim().length < 3) {
        alert('Name must be at least 3 characters long.');
        isValid = false;
    }

    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if (passwordInput.value.trim().length < 6) {
        alert('Password must be at least 6 characters long.');
        isValid = false;
    }
    if (isValid) {
        alert('Form submitted successfully!');
        form.submit(); 
    }
}

submitBtn.addEventListener('click', validateForm);
