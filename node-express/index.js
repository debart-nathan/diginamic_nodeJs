const express = require('express');
const { resolve } = require('path');
const fs = require('fs');
const { json } = require('body-parser');
const { randomUUID } = require('crypto');
require('crypto')
const app = express();

app.use(express.static(resolve('public')));
app.use(express.static(resolve('db')));
app.use(express.json());



app.get('/', (req, res) => {
  res.sendFile(
    resolve('public', 'home.html')
  );
});

app.get('/todos', (req, res) => {
  res.sendFile(
    resolve('public', 'todos.html')
  );
});

app.put('/todos', (req, res) => {
  let db = JSON.parse(fs.readFileSync(resolve("db","db.json")));
  
  let dbTodoI=db.todos.findIndex((dbTodo)=>{
    return dbTodo.id==req.body.id
  });
  db.todos[dbTodoI].status=req.body.status;

  fs.writeFileSync("db/db.json", JSON.stringify(db));
  res.end()
});

app.get('/api/todos', (req, res) => {
  let db = JSON.parse(fs.readFileSync(resolve("db","db.json")))
  res.json(db.todos);
  res.end();
});

app.get('/todos/create', (req, res) => {
  res.sendFile(
    resolve('public', 'formulaire.html')
  );
});

app.post('/todos/create', (req, res) => {
  let db = JSON.parse(fs.readFileSync(resolve("db","db.json")))
  let todo = {
    id: randomUUID(),
    status: false,
    ...req.body
  }
  db.todos.push(todo);
  fs.writeFileSync("db/db.json", JSON.stringify(db));
  res.end();
});

app.listen(3000);
