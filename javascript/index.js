
function allQuestion(){
    fetch('http://127.0.0.1:5000/api/v2/question')
    .then((res) => res.json())
    .then((data) => {
        const sample = document.querySelector('#output');
        const div = document.createElement('div');
        sample.append(div);
        let output = '<h2>Posts</h2>';


        for (var i = 0; i < data.data.length; i++) {
            console.log(data.data[i]);
            output += `<h3 id=${data.data[i].id}>${data.data[i].title}</h3>
            <p>${data.data[i].body}</p>
            `;
            div.innerHTML = output;
        }
    
    div.addEventListener("click", function(e){
        if(e.target?.tagName === "H3"){

            
        }
        window.location.href = "answers.html?id=" + e.target.id;
    })

    })
}
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    allQuestion()
  })