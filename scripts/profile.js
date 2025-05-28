// Get user profile
fetch('https://api.escuelajs.co/api/v1/auth/profile', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
    }
})
    .then(response => response.json())
    .then(data => {
        //Access user info div from DOM
        const userInfo = document.getElementById('user-info');
        //create and append user to user info div
        const userName = document.createElement('h1');
        userName.innerText = data.name;
        userName.classList.add('text-3xl', 'font-bold', 'underline')
        userInfo.appendChild(userName);
        // Create and append user avatar to user info div
        const userAvatar = document.createElement('img');
        userAvatar.src = data.avatar;
        userAvatar.alt = data.name;
        userInfo.appendChild(userAvatar);
    })
    .catch(error => console.log(error));