let text = document.getElementById("text");
let addTaskButton = document.getElementById("add-task-button");
let saveTaskButton = document.getElementById("save-todo-btn");
let listBox = document.getElementById("listBox");
let saveInd = document.getElementById("saveIndex");
let complete = document.getElementById("completed-tasks")
let todoArray = [];



const displayTodo =() => {
 let todo = localStorage.getItem("todo");
 if (todo === null) {
   todoArray = [];
 } else {
   todoArray = JSON.parse(todo);
 }
 let htmlCode = "";
 todoArray.forEach((list, ind) => {
   htmlCode += `<div class='flex-list'>
   
   <p class='list-item'>${list}</p>
   <div class="flex-btn">
   <button onclick='completeTask()'>Done</button>
   <button onclick='edit(${ind})' class='edit-view'>Edit</button>
   <button onclick='deleteTodo(${ind})' class='delete'>Delete</button>
   </div>
</div>`;
 });
 listBox.innerHTML = htmlCode;
}

const deleteTodo = (ind)=> {
 let todo = localStorage.getItem("todo");
 todoArray = JSON.parse(todo);
 todoArray.splice(ind, 1);
 localStorage.setItem("todo", JSON.stringify(todoArray));
 displayTodo();
}

const  edit =(ind) =>  {
 saveInd.value = ind;
 let todo = localStorage.getItem("todo");
 todoArray = JSON.parse(todo);
 text.value = todoArray[ind];
 addTaskButton.style.display = "none";
 saveTaskButton.style.display = "block";
}
const completeTask = (ind) =>{
   
  let todo = localStorage.getItem("todo");
   todoArray = JSON.parse(todo);
   todoArray.splice(ind, 1);
   complete.value = todoArray[ind]
   complete.style.display= "block"
    displayTodo();
}

addTaskButton.addEventListener("click", (e) => {
 e.preventDefault();
 let todo = localStorage.getItem("todo");
 if (todo === null) {
   todoArray = [];
 } else {
   todoArray = JSON.parse(todo);
 }
 todoArray.push(text.value);
 text.value = "";
 localStorage.setItem("todo", JSON.stringify(todoArray));
 displayTodo();
});

saveTaskButton.addEventListener("click", () => {
 let todo = localStorage.getItem("todo");
 todoArray = JSON.parse(todo);
 let id = saveInd.value;
 todoArray[id] = text.value;
 addTaskButton.style.display = "block";
 saveTaskButton.style.display = "none";
 text.value = "";
 localStorage.setItem("todo", JSON.stringify(todoArray));
 displayTodo();
});

