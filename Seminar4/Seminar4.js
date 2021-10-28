var signupLink = document.querySelector("form .signup-link a");
var signupButton = document.querySelector("form .signup-link a");
var cancelLink = document.querySelector("form .signup-link a");

signupLink = (() => {
    console.log('Congratulations! You have successfully created an account');
    signupButton = (numbers) => {
        var total = 0;
        for (var index = 1; index <= numbers; ++index) {
            total += index;
        }
        return total;
    }
    console.log(`Sum of all numbers up to 10: ${signupButton(10)}`);
});


cancelLink = (()=>{
    console.log('Warning! You are about to reset your inputs. Are you sure you want tocontinue ?');

});