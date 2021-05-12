//variables
const form = document.getElementById('form');
const input = document.getElementById('todoinput');
const todos = document.getElementById('todos');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const todoli = document.createElement('li');
    todoli.innerText = input.value;
    todos.appendChild(todoli);

    input.value = "";
});
