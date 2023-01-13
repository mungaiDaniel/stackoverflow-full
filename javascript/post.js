document.getElementById('post').addEventListener('submit', signUp);

function signUp(e){
    e.preventDefault();
    let title = document.getElementById('name').value;
    let body = document.getElementById('content').value;
    let formData =  JSON.stringify({title:title, body:body})
    console.log(typeof(formData));
  
    fetch('http://127.0.0.1:5000/api/v2/question', {
    
    method: "POST",
    body: formData,
    headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
        'Access-Control-Allow-Methods': '*',
        "Content-Type": "application/json; charset=UTF-8",
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    })

})

.then((res) => {
    console.log(res);
    if(!res.ok){
        const err = new Error('detail required')
        window.alert(err);
        
    }
    return res.json()})
.then((data)=> {
    console.log(data)
    window.alert('posted sucessfull')
}
    )
};