
async function getTasks() {

    const response = await fetch('http://localhost:3000/api/todo');
    const tasks = await response.json();

    document.getElementById('todos').innerHTML = tasks;
}


getTasks();