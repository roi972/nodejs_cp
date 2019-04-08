const path = require('path');
const service = require(path.resolve(__dirname, "services", 'fileService'));
const bodyParser = require('body-parser');
const express = require('express');


const app = express();

app.use('/todos', express.static('public'));
app.use('/', bodyParser.json());
app.get('/api/todo', async (req, res) => {

    const todos = await service.getTodos();
    if (todos) {
        res.send(todos);
    }
    
})


app.post('/api/todo', async (req, res) => {
    const json = req.body;
    console.log(json);
    if (json) {
        const todo = JSON.stringify(json);
        await service.saveTodo(todo);
        res.statusCode = 204;
        res.json('ok');
    }

    res.statusCode = 500;
})


app.listen(3000, () => {
    console.log('listening on port 3000');
})