

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


function addTask() {

    const taskValue = taskInput.value.trim();

    
    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

   
    const li = document.createElement("li");

    
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskValue;

    
    span.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

   
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

   
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    
    taskInput.value = "";
}


addBtn.addEventListener("click", addTask);


taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
