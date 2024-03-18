const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');

let allToDos = [];

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTodo();
})

function addTodo(){
    const todoText = todoInput.value.trim();
    if(todoText.length > 0){
        allToDos.push(todoText);
        updateTodoList();
        todoInput.value = '';
    }

    console.log(allToDos);
}

function updateTodoList(){
    todoListUL.innerHTML = "";
    allToDos.forEach((todo, todoIndex) => {
        todoItem = createToDoItem(todo, todoIndex);
        todoListUL.append(todoItem);
    })
}

function createToDoItem(todo){
    const todoLI = document.createElement("li");
    todoLI.innerText = todo;
    return todoLI;
};