const endpoint = 'http://localhost:3002/api/v1/users';
const homePageUrl = './Home.jsx';

const signin = async () => {
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;
	const payload = { email, password };

	const params = {
		method  : 'POST',
		mode    : 'cors',
		headers : {
			'Content-Type' : 'application/json'
		},
		body    : JSON.stringify(payload)
	};

	try {
		const response = await fetch(endpoint, params);
		if (!response.ok) {
			throw response;
		}
		window.location.href = homePageUrl;
	} catch (err) {
		const errorParagraph = document.querySelector('#errorParagraph');
		if (!errorParagraph) {
			const body = document.querySelector('body');
			const errorDiv = document.createElement('div');
			const errorPar = document.createElement('p');
			errorPar.innerText = err.error || 'An error occurred.';
			errorPar.id = 'errorParagraph';
			errorDiv.appendChild(errorPar);
			body.appendChild(errorDiv);
		} else {
			errorParagraph.innerText = err.error || 'An error occurred.';
		}
	}
};
