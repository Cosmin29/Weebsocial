var ifSuccess = (response) => {
	console.log('USER SIGNED UP.');
};

var ifError = (error) => {
	console.log(error);
};

const signup = () => {
	const data = {
		name: document.getElementsByName('name')[0].value,
		email: document.getElementsByName('email')[0].value,
		password: document.getElementsByName('password')[0].value
	};
	url = 'http://localhost:3002/api/v1/users';
	options = {
		body: JSON.stringify(data),
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	fetch(url, options).then(ifSuccess).catch(ifError);
};
