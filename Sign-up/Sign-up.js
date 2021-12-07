var signupLink = document.querySelector('form .signup-link a');
var signupButton = document.querySelector('form .signup-link a');
var cancelLink = document.querySelector('form .signup-link a');
const loginText = document.querySelector('.title-text .login');
const loginForm = document.querySelector('form.login');
const loginBtn = document.querySelector('label.login');
const signupBtn = document.querySelector('label.signup');
const signupLink = document.querySelector('form .signup-link a');

signupBtn.onclick = () => {
	loginForm.style.marginLeft = '-50%';
	loginText.style.marginLeft = '-50%';
};

loginBtn.onclick = () => {
	loginForm.style.marginLeft = '0%';
	loginText.style.marginLeft = '0%';
};

signupLink.onclick = () => {
	signupBtn.click();
	return false;
};

signupLink = () => {
	fetch('http://localhost:3005/users')
		.then((response) => response.json())
		.then((json) => console.log(json))
		.catch((err) => console.log('Error', err));
};

cancelLink = () => {
	const div = document.getElementById('err');
	const p = document.createElement('p');
	p.innerText = 'Warning! You are about to reset your inputs. Are you sure you want to continue ?';
	div.insertBefore(p, div.children[1]);
};
