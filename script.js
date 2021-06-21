const taskForm = document.querySelector("#add-task");
const taskInput = document.querySelector(".task-input");
const taskClear = document.querySelector(".clear");
const taskList = document.querySelector(".collection");

loadEventListeners();

function loadEventListeners() {
    taskForm.addEventListener('submit', addTask);
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