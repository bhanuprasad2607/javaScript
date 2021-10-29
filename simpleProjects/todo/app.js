let task = document.getElementById('task');
let add = document.getElementById('add');
let taskList = document.getElementById('task-list');

add.addEventListener('click', (e) => {
    e.preventDefault();
    if (task.value === "") {
        alert("Need to add a task");
    }
    else {
        addTask()
    }
});


function addTask() {
    let p = document.createElement('li');
    let t = document.createTextNode(task.value);
    task.value = "";
    let s = document.createElement('span');
    s.appendChild(t);
    p.appendChild(s);
    let deleteTask = document.createElement('button');
    deleteTask.innerText = 'Delete';
    let complete = document.createElement('button');
    complete.innerText = 'completed';
    p.appendChild(deleteTask);
    p.appendChild(complete);
    taskList.appendChild(p);
    taskCompleted(s, complete);
    taskDelete(p, deleteTask, complete);
}

function taskCompleted(s, complete) {
    complete.addEventListener('click', (e) => {
        e.preventDefault();
        if (s.style.textDecoration == "line-through") {
            s.style.textDecoration = "none";
            complete.innerText = "completed";

        }
        else {
            s.style.textDecoration = "line-through";
            complete.innerText = 'Not Yet';
        }
    });
}

function taskDelete(p, deleteTask) {
    deleteTask.addEventListener('click', (e) => {
        e.preventDefault();
        p.remove();
    });
}