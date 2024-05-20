import * as Sidebar from "./sidebar";
import * as MainContent from "./mainContent";
import * as Data from "./appLogic";

const submitListBtn = document.querySelector("#submit-list");
const cancelListBtn = document.querySelector("#cancel-alert");
const submitToDoBtn = document.querySelector("#submit-todo");
const cancelToDoBtn = document.querySelector("#cancel-todo-alert");
const saveItemBtn = document.querySelector("#submit-edit-task");
const closeItemBtn = document.querySelector("#cancel-edit-task-alert");

function initialize(){
    submitListBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        submitNewList();
        closeListModal();
    })
    cancelListBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        closeListModal();
    })
    submitToDoBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        submitNewItem();
        closetToDoModal();

    })
    cancelToDoBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        closetToDoModal();
    })
    saveItemBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        saveItem();
        closeItem();
    });
    closeItemBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        closeItem();
    })
}

function closeListModal(){
    document.querySelector("#alert-modal").style.display = "none";
    document.querySelector("#alert-modal > .alert-content > #new-list-name").value = "";
    document.querySelector("#alert-modal > .alert-content > #list-category").value = "work";

}

function closetToDoModal(){
    console.log("In close function");
    document.querySelector("#todo-alert-modal").style.display = "none";
    document.querySelector("#todo-alert-modal").listId = "";
    document.querySelector("#task-title").value = "";
    document.querySelector("#task-notes").value = "";
    document.querySelector("#due-date").value = "";
    document.querySelector("#importance").value = "medium";
}


function submitNewList(){
    let newListId = Data.createList(document.querySelector("#alert-modal > .alert-content > #list-category").value,
        document.querySelector("#alert-modal > .alert-content > #new-list-name").value);
    Sidebar.addListElement(document.querySelector("#alert-modal > .alert-content > #list-category").value,
                newListId, document.querySelector("#alert-modal > .alert-content > #new-list-name").value)
}

function submitNewItem(){
    let listId = document.querySelector("#todo-alert-modal").listId;
    let itemTitle = document.querySelector("#task-title").value;
    let notes = document.querySelector("#task-notes").value;
    let dueDateTime = document.querySelector("#due-date").value;
    let done = false;
    let importance =  document.querySelector("#importance").value;
    let newItemId = Data.createItem(listId, itemTitle, notes, dueDateTime, done, importance);
    console.log(newItemId);
    MainContent.updateListTasks(listId,Data.getItem(newItemId));

}

function saveItem(){
    console.log("in save item");
    let itemId = document.querySelector("#edit-task-modal").itemid;
    let itemTitle = document.querySelector("#edit-task-title").value;
    let notes = document.querySelector("#edit-task-notes").value;
    let dueDateTime = document.querySelector("#edit-due-date").value;
    let importance =  document.querySelector("#edit-importance").value;
    Data.setItem(itemId, {itemTitle, notes, dueDateTime, done: -1, itemId, importance});
    MainContent.updateDisplay();
    
}

function closeItem(){
    document.querySelector("#edit-task-modal").style.display = "none";
    document.querySelector("#edit-task-modal").itemid = "";
    document.querySelector("#edit-task-title").value = "";
    document.querySelector("#edit-task-notes").value = "";
    document.querySelector("#edit-due-date").value = "";
    document.querySelector("#edit-importance").value = "medium";
}

export{
    initialize
}