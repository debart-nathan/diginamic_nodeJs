
const form = document.getElementById("form-add-task")

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const data = new FormData(ev.target)
    const json = JSON.stringify({
        taskName: data.get("task-name"),
        taskStatus: data.get("task-status"),
        taskDueD: data.get("task-due-date")
    })

    fetch("/tasks", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: json
    }).then((res)=>{
        if (res.status!=200){
            console.log("ERROR: ",res.status)
        }else{
            const success = document.createElement("div");
            success.innerHTML="success in adding :"+json
            form.appendChild(success);

        }
    }).catch(err=>console.log(err));

    



})