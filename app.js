const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTasks);

// Functions
function addTodo(event) {
  // preventing from submitting a form
  event.preventDefault();
  // create todo div
  const todoDiv = document.createElement("div");
  // use the classList API to add class="todo" to above div
  todoDiv.classList.add("todo");
  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // Check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa-solid fa-check fa-lg"></i>';
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);
  // Trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-solid fa-trash-can fa-lg"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // append to li
  todoList.appendChild(todoDiv);
  // clear todo input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // clicking trash button to delete task
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    setTimeout(function() {
      todo.remove();
    }, 800);
  }
  // clicking check mark on completed task
  if (item.classList[0] === 'completed-btn') {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

// Filter section
function filterTasks(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    if (todo.nodeType === Node.ELEMENT_NODE) {
      switch (filterOption.value) {
        case "all":
          todo.style.display = 'flex';
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
          break;
      }
    }
  });
}