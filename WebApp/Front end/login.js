ifSuccess = (response) => {
	console.log('USER LOGGED IN.');
};

ifError = (error) => {
	console.log(error);
};

login = () => {
	const data = {
		email: document.getElementsByName('email')[0].value,
		password: document.getElementsByName('password')[0].value
	};
	url = 'http://localhost:3002/api/v1/sign-in';
	options = {
		body: JSON.stringify(data),
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	fetch(url, options).then(ifSuccess).catch(ifError);
};
