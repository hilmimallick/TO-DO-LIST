let todos = JSON.parse(localStorage.getItem("todos"))
  ? JSON.parse(localStorage.getItem("todos"))
  : [];


let asc = true;

const todosContainer = document.querySelector("#todos")

const showTodos = (todos) => {
    todosContainer.innerHTML = "";
    todos.forEach(todo => {
        todosContainer.innerHTML += `
         <li>
        <input type="checkbox" /><span> ${todo.title}</span>
        <span class="icon"><i class="fa-solid fa-trash-can" onclick="deleteTask(${todo.id})"></i></span>
        </li> 
        `;
    });
};

showTodos(todos);
//add task function
function addTask() {
    //get the value
    const task = document.querySelector("#addTodo").value;
    
    //create the object from the value
    const todo = {
        title: task,
        id: todos.length + 1
    };

    //add the object to the array
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    showTodos(todos);
    document.querySelector("#addTodo").value = "";


};

//delete task function
function deleteTask(id) {
    todos = todos.filter(todo => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(todos));
    showTodos(todos);
}

//sort function
function sortName(){
    todos.sort((a, b) =>{
        if (a.tiltetoLowerCase() < b.tiltetoLowerCase()){
            return -1;
        }
        if (a.tiltetoLowerCase() > b.tiltetoLowerCase()){
            return 1;
        }
        return 0;
    })

    if (!asc) todos.reverse();

    asc = !asc;

    showTodos(todos);
}

