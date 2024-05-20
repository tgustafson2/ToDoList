import { getCategoryLists, getDueToday, getDueWeek, getList } from "./appLogic";
import { displayCategory,displayToday,displayThisWeek,displayList } from "./mainContent";


const todayTasks = document.querySelector(".today-tasks");
const thisWeek = document.querySelector(".this-week-tasks");
const workCategory = document.querySelector("#work > .lists");
const hobbiesCategory = document.querySelector("#hobbies > .lists");
const homeCategory = document.querySelector("#home > .lists");
const newListBtn = document.querySelector("#add-list-btn");







function initialize(categories){
    todayTasks.addEventListener("click", () =>{
        displayToday(getDueToday());
    })
    thisWeek.addEventListener("click", ()=>{
        displayThisWeek(getDueWeek());
    })
    categories.forEach(category => {
        category.lists.forEach(list =>{
            addListElement(category.categoryName, list.listId, list.listName);
        })
    });
    newListBtn.addEventListener("click", (event)=>{
        event.preventDefault();
        showNewListModal();
    })
    const home = document.querySelector("#home > h3 > a");
    const work = document.querySelector("#work > h3 > a");
    const hobbies = document.querySelector("#hobbies > h3 > a");

    home.addEventListener("click", (event) =>{
        event.preventDefault();
        document.querySelector(".main").currdisplay = "home";
        displayCategory(getCategoryLists("home"));
    })
    work.addEventListener("click", (event) =>{
        event.preventDefault();
        document.querySelector(".main").currdisplay = "work";
        displayCategory(getCategoryLists("work"));
    })
    hobbies.addEventListener("click", (event) =>{
        event.preventDefault();
        document.querySelector(".main").currdisplay = "hobbies";
        displayCategory(getCategoryLists("hobbies"));
    })


}

function addListElement(categoryName, listId, listName){
    const listElem = document.createElement("li");
    const listClick = document.createElement("a");
    listClick.href = "";
    listClick.setAttribute("listId", listId);
    listClick.innerText = listName;
    listClick.addEventListener("click", (event) =>{
        // function to display list
        event.preventDefault();
        console.log("Add list " + listId);
        document.querySelector(".main > .lists").category = listId;
        displayList(getList(listId));
        
    })
    listElem.appendChild(listClick);
    switch(categoryName){
        case "work": 
            workCategory.appendChild(listElem);
            document.querySelector(".main > .lists").category = "work";
            break;
        case "hobbies":
            hobbiesCategory.appendChild(listElem);
            document.querySelector(".main > .lists").category = "hobbies";
            break;
        case "home":
            homeCategory.appendChild(listElem);
            document.querySelector(".main > .lists").category = "home";
            break;
        default:
            console.log("Invalid category name");
        
    }
    
    if(document.querySelector(".main").currdisplay == categoryName){
        displayCategory(getCategoryLists(categoryName));
    }

}




function showNewListModal(){
    document.querySelector("#alert-modal").style.display = "block";
}

export {
    initialize,
    addListElement
}
