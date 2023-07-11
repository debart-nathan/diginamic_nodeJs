const exp = require('constants');
const express = require('express');
const {resolve} = require('path')
const fs = require('fs')

const app =express();

app.use(express.json()); 

app.use(express.static(resolve('public')));
app.use(express.static(resolve('db')));

app.get('/',(req, res)=>{
    res.sendFile(resolve('public',"home.html"));
});

app.get('/add-task',(req, res)=>{
    res.sendFile(resolve('public',"html/addTask.html"));
});

app.post('/tasks', (req,res)=>{
    let json = JSON.parse(fs.readFileSync(resolve('db',"db.json")));
    const id = Math.max.apply(null, Object.keys(json)) +1;
    console.log(req.body)
    json[id] = req.body;
    fs.writeFileSync(resolve('db',"db.json"),JSON.stringify(json));
    return res.send("200");
});

app.get('/todo-list',(req, res)=>{
    res.sendFile(resolve('public',"html/todoList.html"));
});

app.get('/tasks',(req,res)=>{
    res.sendFile(resolve('db',"db.json"));
});


app.listen(3000);