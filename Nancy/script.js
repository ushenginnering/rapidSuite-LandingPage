const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.querySelector('img').src = type === 'password' ? 'images/eye-slash.svg' : 'images/eye-slash.svg';
});

passwordInput.addEventListener('input', function () {
    const passwordValue = passwordInput.value;
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const isValidPassword = pattern.test(passwordValue);

    if (!isValidPassword) {
      teacherPasswordInput.setCustomValidity('Password must contain at least 8 characters, including one letter, one number, and one special character.');
    } else {
        passwordInput.setCustomValidity('');
    }
});
// Get the necessary elements
const signUpButton = document.getElementById('signUp');
const signUpWrapper = document.querySelector('.signup-wrapper'); 
const closeButton = document.getElementById('closeButton');
const popup = document.getElementById('popUp');
const form = document.querySelector('form');

function showPopup() {
  signUpWrapper.style.display = 'none'; 
  popup.classList.remove('d-none');
}

function hidePopup() {
  signUpWrapper.style.display = 'block'; 
  popup.classList.add('d-none');
}
signUpButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  showPopup();
});

closeButton.addEventListener('click', function() {
  hidePopup();
});

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
});

const loginButton = document.getElementById('loginButton');
const signUpPage = document.querySelector('.signup-wrapper');
const optPage = document.getElementById('popUp');
const loginPage = document.getElementById('loginPage');

function showLoginPage() {
  signUpPage.style.display = 'none';
  optPage.style.display = 'none';
  loginPage.classList.remove('d-none');
}
loginButton.addEventListener('click', showLoginPage);

const loginPasswordInput = document.getElementById('loginPasswordInput');
const toggleLoginPassword = document.getElementById('toggleLoginPassword');

toggleLoginPassword.addEventListener('click', function () {
  const type = loginPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  loginPasswordInput.setAttribute('type', type);
  toggleLoginPassword.querySelector('img').src = type === 'password' ? 'images/eye-slash.svg' : 'images/eye-slash.svg';
});

loginPasswordInput.addEventListener('input', function () {
  const passwordValue = loginPasswordInput.value;
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const isValidPassword = pattern.test(passwordValue);

  if (!isValidPassword) {
    teacherPasswordInput.setCustomValidity('Password must contain at least 8 characters, including one letter, one number, and one special character.');
  } else {
    loginPasswordInput.setCustomValidity('');
  }
});

const closeLoginButton = document.getElementById('closeLoginButton');

closeLoginButton.addEventListener('click', function() {
  loginPage.classList.add('d-none');
  signUpWrapper.style.display = 'block';
});

positionSelect.addEventListener("change", function () {
    if (positionSelect.value === "teacher") {
        schoolAccountContainer.style.display = "block";
    } else {
        schoolAccountContainer.style.display = "none";
    }
});
















