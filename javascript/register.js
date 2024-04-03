document.getElementById('signup').addEventListener('submit', signUp);
// function addAlert(message) {
//     $('#alerts').append(
//         '<div class="alert alert-danger">' + message + '</div>');
// }



function signUp(e){
    e.preventDefault();
    let username = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let formData =  JSON.stringify({username:username, email:email, password:password})
  
    
    fetch('https://stackoverflow-v2.onrender.com/api/v2/signup', {
    
  
    method: "POST",
    redirect: "manual",
   
    body: formData,
    

    headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
        'Access-Control-Allow-Methods': '*',
        "Content-Type": "application/json; charset=UTF-8",
    })

})

.then((res) => {
    if(!res.ok){
        alert(`failed to fetch posts: ${res.status}: username ${username} or email ${email} already exist`)
    }else if(res.ok){
        alert(`${username} is Registerd Successfully`)
        return window.location.assign("/login.html");
    }
    return res.json()})
.then((data)=> {
    alert(data.message)
    console.log(data)})
};