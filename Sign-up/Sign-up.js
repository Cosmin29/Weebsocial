let signupBtnOnTheForm = document.querySelector('form .signup-link a');
let signupButton = document.querySelector('form .signup-link a');
let loginText = document.querySelector('.title-text .login');
let loginForm = document.querySelector('form.login');
let loginBtn = document.querySelector('label.login');
let signupBtn = document.querySelector('label.signup');
var signupLink = document.querySelector(' form.signup-link a');

signupBtn = () => {
	loginForm.style.marginLeft = '-50%';
	loginText.style.marginLeft = '-50%';
};

loginBtn = () => {
	loginForm.style.marginLeft = '0%';
	loginText.style.marginLeft = '0%';
};

signupLink = () => {
	signupBtn.click();
	return false;
};

signupBtnOnTheForm = () => {
	fetch('http://localhost:3005/users')
		.then((response) => response.json())
		.then((json) => console.log(json))
		.catch((err) => console.log('Error', err));
};
