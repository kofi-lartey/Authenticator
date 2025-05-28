
const registerBtn = document.getElementById('register-btn');
// Access register form from the DOM
const registerForm = document.getElementById("register-form");
// attach submit event listener to register form
registerForm.addEventListener('submit', function (event) {
    // show loading indicator
   
    // Prevent default Submit Behaviour
    event.preventDefault();
     registerBtn.classList.add('animate-spin');
    //collect user inputs
    const data = new FormData(registerForm);
    // Post inputs to backend API
    fetch('https://api.escuelajs.co/api/v1/users/', {
        method: 'POST',
        body: JSON.stringify({
            "email" : data.get('email'),
            "name": data.get('text'),
            "password": data.get('password'),
            "role": data.get('role'),
            "avatar": data.get('avatar'),
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            if (response.ok) {
                location.replace('./login.html');
            }
            return response.json();
        })
        .then(data => alert(data.message))
        .catch(error => console.log(error))
        .finally(() => {
            // Hide loading indicator
            registerBtn.classList.remove('animate-spin');
        });
});