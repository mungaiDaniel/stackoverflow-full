
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
        const sample2 = document.querySelector('#ques');
        const p = document.createElement('p');
        sample2.append(p);
        let output2 = '<h2>Top Questions</h2>'

        for(let i = 0; i<data.data.length; i++){
            output2 += `
            <p id = ${data.data[i].id}>${data.data[i].body}</p>
            `;
            p.innerHTML = output2
        }
    
    div.addEventListener("click", function(e){
        if(e.target?.tagName === "H3"){

            window.location.href = "answer.html?id=" + e.target.id;            
        }
       
    })

    })
}
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    allQuestion()
  })

  