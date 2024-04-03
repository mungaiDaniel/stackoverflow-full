document.getElementById('post').addEventListener('submit', signUp);

function signUp(e){
    e.preventDefault();
    let title = document.getElementById('name').value;
    let body = document.getElementById('content').value;
    let formData =  JSON.stringify({title:title, body:body})
    console.log(typeof(formData));
  
    fetch('https://stackoverflow-v2.onrender.com/api/v2/question', {
    
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
    document.getElementById('name').value = '';
    document.getElementById('content').value='';
    
}
    )
};