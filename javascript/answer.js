const id = window.location.search;

const urlParams = new URLSearchParams(id);

const question_id = urlParams.get('id');
function getOneQuestion(){
    fetch(`https://stackoverflow-v2.onrender.com/api/v2/question/${question_id}`)
        .then((res) => res.json())
        .then((data) => { 
        const sample = document.querySelector('#output');
        const div = document.createElement('div');
        sample.append(div);
        let output = '<h2>Question Details</h2>';
            output += `<h3>${data.data.title}</h3>
            <span class="dates">
            <p>Asked: ${data.data.date_created}</p>
            <p>Modified: ${data.data.date_modified}</p>
            </span>
            <p>${data.data.body}</p>
            `;
            div.innerHTML = output;
        })
}

document.getElementById('myAnswer').addEventListener('submit', PostAnswer);
function PostAnswer(e){

    e.preventDefault();
    let body = document.getElementById('content').value;
    let formData =  JSON.stringify({body:body})
    console.log(typeof(formData));
    fetch(`https://stackoverflow-v2.onrender.com/api/v2/answer/${question_id}`, {
    
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
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        window.alert('posted sucessfull')
})}
function getAllAnwers(){
    fetch(`https://stackoverflow-v2.onrender.com/api/v2/answers/${question_id}`)
    .then((res) => res.json())
    .then((data) => {console.log(data)

    const sample2 = document.querySelector('#output2');
    const div2 = document.createElement('div');
    sample2.append(div2);
    let output = '<h2>My Answers</h2>';


    for (var i = 0; i < data.data.length; i++) {
        console.log(data.data[i]);
        output += `
        <p>${data.data[i].body}</p>
        `;
        div2.innerHTML = output;
    }}
    )
}

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    getOneQuestion()
    getAllAnwers()
  })