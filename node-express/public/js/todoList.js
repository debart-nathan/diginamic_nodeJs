const root = document.getElementById("root");

const ul= document.createElement("ul")
root.appendChild(ul)

async function loadList(){
    const data= await (await fetch("/tasks")).json()
    for(let pair  of Object.entries(data)){
        const li =document.createElement("li");
        li.innerHTML=JSON.stringify(pair[1]);
        ul.appendChild(li);
    }

}


loadList()