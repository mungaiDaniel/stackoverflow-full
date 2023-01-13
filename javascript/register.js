document.getElementById('signup').addEventListener('submit', signUp);

function signUp(e){
    e.preventDefault();
    let username = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let formData =  JSON.stringify({username:username, email:email, password:password})
  
    // POST request using fetch()
    fetch('http://127.0.0.1:5000/api/v2/signup', {
    
    // Adding method type
    method: "POST",
    redirect: "manual",
    // Adding body or contents to send
    body: formData,
    
    // Adding headers to the request
    headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
        'Access-Control-Allow-Methods': '*',
        "Content-Type": "application/json; charset=UTF-8",
    })

})

.then((res) => {
    if(!res.ok){
        const err = new Error(`failed to fetch posts: ${res.status}: username ${username} or email ${email} already exist`)
        window.alert(err);
    }else if(res.ok){
        window.alert(`${username} is Registerd Sucessfully`)
        return window.location.assign("http://127.0.0.1:5502/login.html");
    }
    return res.json()})
.then((data)=> {
    window.alert(data.message)
    console.log(data)})
};