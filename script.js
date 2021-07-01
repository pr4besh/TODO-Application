const taskForm = document.querySelector("#add-task");
const taskInput = document.querySelector(".task-input");
const taskClear = document.querySelector(".clear");
const taskList = document.querySelector(".collection");
const emptyWarn = document.querySelector('span');

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

    document.addEventListener('DOMContentLoaded', setTask);
}

function setTask() {
    let givenTask;
    let getTasks = localStorage.getItem('givenTask');
    if(getTasks === null) {
        givenTask = [];
    } else {
        givenTask = JSON.parse(getTasks);
    }
    
    givenTask.forEach(function(task){
        const li = document.createElement('li');
        li.className = 'tasklist';
        li.appendChild(document.createTextNode(task));
    
        const link = document.createElement('a');
        link.className = "done-task";
        link.innerHTML = "<i class='bx bx-x'></i>";
        li.appendChild(link);
    
        taskList.appendChild(li);
    });
}

function addTask(e) {
    if (taskInput.value === ''){
        emptyWarn.style.display = "block";
    } else {
        emptyWarn.style.display = "none";
        const li = document.createElement('li');
        li.className = 'tasklist';
        li.appendChild(document.createTextNode(taskInput.value));

        const link = document.createElement('a');
        link.className = "done-task";
        link.innerHTML = "<i class='bx bx-x'></i>";
        li.appendChild(link);

        taskList.appendChild(li);
        //Store in local Storage
        storeTasks(taskInput.value);

        taskInput.value = '';
    }

    e.preventDefault();
}

//Function to Store task in local Storage
function storeTasks(task) {
    let givenTask;
    let getTasks = localStorage.getItem('givenTask');
    if(getTasks === null) {
        givenTask = [];
    } else {
        givenTask = JSON.parse(getTasks);
    }

    givenTask.push(task);
    localStorage.setItem('givenTask', JSON.stringify(givenTask));
}

function deleteItem(e) {
    if (e.target.parentElement.classList.contains('done-task')) {
        if (confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove();

            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLocalStorage(taskList) {
    let givenTask;
    let getTasks = localStorage.getItem('givenTask');
    if(getTasks === null) {
        givenTask = [];
    } else {
        givenTask = JSON.parse(getTasks);
    }

    givenTask.forEach(function(task, index) {
        if(taskList.textContent === task) {
            givenTask.splice(index, 1);
        }
    });

    localStorage.setItem('givenTask', JSON.stringify(givenTask));
}

function clearAll() {
    taskList.innerHTML = '';
    localStorage.clear();
}