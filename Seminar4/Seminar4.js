var signupLink = document.querySelector("form .signup-link a");
var signupButton = document.querySelector("form .signup-link a");
var cancelLink = document.querySelector("form .signup-link a");

signupLink = (() => {
    fetch('https://api.github.com/users/manishmshiva')
    .then(response => response.json())  
    .then(json => console.log(json)) 
    .catch(err => console.log('Success !', err)); 
});


cancelLink = (()=> {
   const div = document.getElementById('err');
    const p = document.createElement('p');
    p.innerText = 'Warning! You are about to reset your inputs. Are you sure you want to continue ?';
    div.insertBefore(p, div.children[1]);
});