import * as Data from "./appLogic";
import Icon from "./trash-can-svgrepo-com.svg"
import { format } from "date-fns";

const listDisplayArea = document.querySelector(".main > .lists");

let state = "today";





function displayCategory(lists){
    state = "categories";
    console.log(lists);
    // update filter buttons
    listDisplayArea.replaceChildren();
    lists.forEach(list => {
        const listDiv = document.createElement("div");
        listDiv.classList.add("list");
        listDiv.setAttribute("listId",list.listId);
        const listTitle = document.createElement("h2");
        listTitle.innerText = list.listName;
        listDiv.appendChild(listTitle);
        list.items.forEach(item => {
            listDiv.appendChild(addTask(item));
        })

        //add add task button
        listDiv.appendChild(createAddTaskButton(list.listId));
        listDisplayArea.appendChild(listDiv);
    });
}

function displayList(list){
    state = "list";
    listDisplayArea.replaceChildren();
    const listDiv = document.createElement("div");
    listDiv.classList.add("list");
    listDiv.setAttribute("listId",list.listId);
    const listTitle = document.createElement("h2");
    listTitle.innerText = list.listName;
    listDiv.appendChild(listTitle);
    list.items.forEach(item => {
        listDiv.appendChild(addTask(item));
    })

    //add add task button
    listDiv.appendChild(createAddTaskButton(list.listId));
    listDisplayArea.appendChild(listDiv);
}

function displayToday(items){
    state = "today"
    console.log(items);
    listDisplayArea.replaceChildren();
    const today = document.createElement("div");
    today.classList.add("today");
    const todayTitle = document.createElement("h2");
    todayTitle.innerText = "Today";
    today.appendChild(todayTitle);
    items.forEach(item =>{
        today.appendChild(addTask(item));
    })
    listDisplayArea.appendChild(today);
}

function displayThisWeek(items){
    state = "this week";
    listDisplayArea.replaceChildren();
    const thisWeek = document.createElement("div");
    thisWeek.classList.add("today");
    const thisWeekTitle = document.createElement("h2");
    thisWeekTitle.innerText = "This Week";
    thisWeek.appendChild(thisWeekTitle);
    items.forEach(item =>{
        thisWeek.appendChild(addTask(item));
    })
    listDisplayArea.appendChild(thisWeek);
}

function addTask(item){
    const itemToAdd = document.createElement("div");
    itemToAdd
    itemToAdd.classList.add("task");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.done;
    checkbox.addEventListener("change", event =>{
        event.preventDefault();
        console.log("update item function here");
        item.done = item.done==true ? false : true;
        Data.setItem(item.itemId, item);
    })
    const title = document.createElement("span");
    const titleLink = document.createElement("a");
    titleLink.classList.add("task-title");
    titleLink.innerText = item.itemTitle;
    titleLink.href = "#";
    titleLink.addEventListener("click", (event)=>{
        event.preventDefault();
        showEditItemModal(item.itemId);
    })
    title.appendChild(titleLink);
    const dueDate = document.createElement("span");
    dueDate.classList.add("due-date");
    dueDate.innerText = item.dueDateTime;
    itemToAdd.appendChild(checkbox);
    itemToAdd.appendChild(title);
    itemToAdd.appendChild(dueDate);
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-task");
    deleteButton.addEventListener("click", (event) =>{
        event.preventDefault();
        console.log(event.target.parentNode.parentNode);
        deleteItem(event.target.parentNode.parentNode.parentNode,event.target.parentNode.parentNode,item.itemId);
    });
    const deleteIcon = new Image();
    deleteIcon.src = Icon;
    deleteIcon.alt = "Delete";
    deleteIcon.classList.add("delete-icon");
    deleteButton.appendChild(deleteIcon);
    itemToAdd.appendChild(deleteButton);
    return itemToAdd;
}

function updateListTasks(listId, item){
    const lists = document.querySelectorAll(".lists > .list");
    lists.forEach(list =>{
        if(list.getAttribute("listid")==listId){
            list.insertBefore(addTask(item), list.lastChild)
        }
    })
}

function createAddTaskButton(listId){
    const button = document.createElement("button");
    button.classList.add("add-task");
    button.innerText = "Add Task";
    button.addEventListener("click", (event) =>{
        event.preventDefault();
        // display task modal
        showNewItemModal(listId);

    })
    return button;
}

function showNewItemModal(listId){
    document.querySelector("#todo-alert-modal").listId = listId;
    document.querySelector("#todo-alert-modal").style.display = "block";
    
}

function showEditItemModal(itemId){
    const item = Data.getItem(itemId);
    console.log(item.dueDateTime);
    document.querySelector("#edit-task-modal").itemid = itemId;
    console.log("Item id func: "+ document.querySelector("#edit-task-modal").itemid);
    document.querySelector("#edit-task-title").value = item.itemTitle;
    document.querySelector("#edit-task-notes").value = item.notes;
    document.querySelector("#edit-due-date").value = format(item.dueDateTime, 'yyyy-MM-dd');
    document.querySelector("#edit-importance").value = item.importance;
    document.querySelector("#edit-task-modal").style.display = "block";
}

function deleteItem(parentNode, nodeToRemove, itemId){
    
    parentNode.removeChild(nodeToRemove);
    // console.log(nodeToRemove);

    // console.log(itemId);
    Data.removeItem(itemId);
}

function updateDisplay(){
    switch(state){
        case "today":
            displayToday(Data.getDueToday());
            break;
        case "this week":
            displayThisWeek(Data.getDueWeek());
            break;
        case "categories":
            console.log("categories");
            displayCategory(Data.getCategoryLists(listDisplayArea.category));
            break;
        case "list":
            displayList(Data.getList(listDisplayArea.category));
            break;
        default:
            console.log("Something wrong" + state);
    }
}


export {
    displayCategory,
    updateListTasks,
    displayToday,
    displayThisWeek,
    updateDisplay,
    displayList
}