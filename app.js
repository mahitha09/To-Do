//variables
const form = document.getElementById('form');
const input = document.getElementById('todoinput');
const todoUl = document.getElementById('todos');
const btnInput = document.getElementById('btn-input');

let todos = JSON.parse(localStorage.getItem('todos'));

if(todos){
    todos.forEach(todo => {
        let todoText = input.value;

        if(todo){
            todoText = todo.text;
        }
    
        if(todoText){
            const todoli = document.createElement('li');
    
            if(todo.completed){
                todoli.classList.add('completed');
            }
    
            todoli.innerText = todoText;
    
            //creating a div
            const todoDiv = document.createElement('div');
    
            //creating buttons
            const checkbtn = document.createElement('button');
            checkbtn.innerHTML = '<i class="fa fa-check"></i>';
            checkbtn.classList.add('check-btn');
            const deletebtn = document.createElement('button');
            deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
            deletebtn.classList.add('delete-btn');
    
            //appending buttons to div
            todoDiv.appendChild(checkbtn);
            todoDiv.appendChild(deletebtn);
    
            //appending div to li
            todoli.appendChild(todoDiv);
            todoUl.appendChild(todoli);
    
            //Activating Check button
            
            checkbtn.addEventListener('click',(e)=>{
                e.preventDefault();
                todoli.classList.toggle('completed');
                updateLocalStorage();
            });
    
            //Activating Delete Button
    
            deletebtn.addEventListener('click',()=>{
                todoli.remove();
                updateLocalStorage();
            });
        
        input.value = "";
        updateLocalStorage();
        }
    });
}

btnInput.addEventListener('click',(e) => {
    e.preventDefault();
    let todoText = input.value;
    if(todoText){
        const todoli = document.createElement('li');
        todoli.innerText = todoText;

        //creating a div
        const todoDiv = document.createElement('div');

        //creating buttons
        const checkbtn = document.createElement('button');
        checkbtn.innerHTML = '<i class="fa fa-check"></i>';
        checkbtn.classList.add('check-btn');
        const deletebtn = document.createElement('button');
        deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
        deletebtn.classList.add('delete-btn');

        //appending buttons to div
        todoDiv.appendChild(checkbtn);
        todoDiv.appendChild(deletebtn);

        //appending div to li
        todoli.appendChild(todoDiv);
        todoUl.appendChild(todoli);

        //Activating Check button
        
        checkbtn.addEventListener('click',(e)=>{
            e.preventDefault();
            todoli.classList.toggle('completed');
            updateLocalStorage();
        });

        //Activating Delete Button

        deletebtn.addEventListener('click',()=>{
            todoli.remove();
            updateLocalStorage();
        });
    
    input.value = "";

    updateLocalStorage();
    }
});

//Creting the local storage function

function updateLocalStorage(){
    const todosli = document.querySelectorAll('li');
    const todos = [];
    todosli.forEach((todoli) => {
        todos.push({
            text : todoli.innerText,
            completed : todoli.classList.contains('completed')
        });
    });

    localStorage.setItem("todos",JSON.stringify(todos));

}