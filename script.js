const taskForm = document.querySelector("#add-task");
const taskInput = document.querySelector(".task-input");
const taskClear = document.querySelector(".clear");
const taskList = document.querySelector(".collection");

loadEventListeners();

function loadEventListeners() {
    // Event Listener for adding task 
    taskForm.addEventListener('submit', addTask);
    // Event Listener for clearing all tasks 
    //when Clear button is clicked
    taskClear.addEventListener('click', clearAll);
    // Event Listener for clearing one task
    //when cross symbol is clicked
    taskList.addEventListener('click', deleteItem);
}

function addTask(e) {
    if (taskInput.value === ''){
        alert("Empty Field. Add a Task.");
    } else {
        const li = document.createElement('li');
        li.className = 'tasklist';
        li.appendChild(document.createTextNode(taskInput.value));

        const link = document.createElement('a');
        link.className = "done-task";
        link.innerHTML = "<i class='bx bx-x'></i>";
        li.appendChild(link);

        taskList.appendChild(li);
        taskInput.value = '';
    }

    e.preventDefault();
}

function deleteItem(e) {
    if (e.target.parentElement.classList.contains('done-task')) {
        if (confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function clearAll() {
    taskList.innerHTML = '';
}