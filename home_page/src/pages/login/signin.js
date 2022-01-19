const endpoint = "http://localhost:3002/api/v1/users";
const homePageUrl = './Home.jsx';

function success(response) {
    if (!response.ok) {
        throw response;
    }
    return response;
}

function onSuccess(response) {
    window.location.href = homePageUrl;
}

function onFailure(response) {
    return response.json().then(error);
}

function error(response) {
    const errorParagraph = document.getElementsByName("errorParagraph")[0];

    if (!errorParagraph) {
        const body = document.getElementsByTagName("body")[0];
        const errorDiv = document.createElement("div");
        const errorPar = document.createElement("p");
        errorPar.innerText = response.error;
        errorPar.setAttribute("name", "errorParagraph");
        errorDiv.appendChild(errorPar);
        body.appendChild(errorDiv);
    } else {
        errorParagraph.innerText = response.error;
    }
}

function signin() {
    const payload = {
        "email": document.getElementsByName("email")[0].value,
        "password": document.getElementsByName("password")[0].value
    }
 
    const params = {
        body: JSON.stringify(payload),
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch(endpoint, params)
        .then(success)
        .then(onSuccess, onFailure)
        .catch(error);
}

