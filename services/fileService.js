const fs = require('fs');
const util = require('util');
const fileName = 'todos.json';

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function getTodos() {
    try {
        const data = await readFileAsync(fileName);
        if (data.toString())
            return JSON.parse(data.toString());
        else return [];
    }
    catch (err) {
        console.log('failed to read file', err);
    }
}

async function saveTodo(todo) {
    try {
        let todos = await getTodos();        
        todos.push(todo);
        await writeFileAsync(fileName, JSON.stringify(todos));
    }
    catch (err) {
        console.log('failed to save file', err);
    }
}

module.exports = {
    getTodos: getTodos,
    saveTodo: saveTodo
}
