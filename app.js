//variables
const todoInput = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-btn');
const todoContainer = document.querySelector('.todo-container');

//eventlisteners
addBtn.addEventListener('click',addTodo);

//function
function addTodo(){
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-div');
    //create list
    const newTodo = document.createElement('li');
    newTodo.innerText = "Hii";
    newTodo.classList.add('todo-list');
    todoDiv.appendChild(newTodo);
    //check mark
    const completedButton = document.createElement('button');
    completedButton.classList.add('completed-btn');
    completedButton.innerHTML = '<i class = "fa fa-check"></i>';
    todoDiv.appendChild(completedButton);
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '<i class = "fa fa-trash"></i>';
    todoDiv.appendChild(deleteButton);
}