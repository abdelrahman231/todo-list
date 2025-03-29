// date 
document.getElementById('date').textContent = new Date().toDateString(); // Show today's date

// get element ids 
let addButton = document.getElementById("addButton"); 
let inputField = document.getElementById("taskInput")
let taskList = document.getElementById("taskList"); 

// button is presed 
// we take the input remove whitespaces
// create a new li element with the input text

function addTask() {

    let taskName = inputField.value.trim(); // get task from input, remove spaces
    
    // validate 
    if (taskName === '') {
        alert("Please enter a task"); 
        return;
    }

    // create  list element
    let taskItem = document.createElement('li');

    let taskText = document.createElement('span');
    taskText.textContent = taskName;

    // delete bttn
    let deleteButton = document.createElement('button'); 
    deleteButton.textContent = "✔️";
    deleteButton.classList.add('delete-btn'); 
    // delete bttn functionality
    deleteButton.addEventListener("click", function() {
        taskItem.remove();
    });

    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    inputField.value = "";
};


addButton.addEventListener("click", addTask);














