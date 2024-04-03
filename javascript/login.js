document.getElementById('login').addEventListener('submit', logIn);
function addAlert(message) {
    $('#alerts').append(
        '<div class="alert alert-danger">' + message + '</div>');
}

function logIn(e){
    e.preventDefault();
    let username = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let formData =  JSON.stringify({username:username, password:password})

    fetch('http://127.0.0.1:5000/api/v2/login',{

        method: 'POST',
        body: formData,
        headers:  new Headers({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
            'Access-Control-Allow-Methods': '*',
            "Content-Type": "application/json; charset=UTF-8"
        })

    })
        .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('access_token',data.access_token)
        if (data.access_token){ 
            window.location.assign("/index.html");
            
        } else{
            const err = new Error(`failed to fetch posts username or password is incorrect`)
                window.alert(err);}
    });
}
