//base on Things layout
//get items due today
//get items due next 7 days
//get category names and lists
//get lists and items
//get lists and items that are high importance
//get item info

import { format, addDays, addMinutes } from "date-fns";


let toDoLists;

function load(){
    toDoLists  =  localStorage.getItem("to-do-lists") !== null ? JSON.parse(localStorage.getItem("to-do-lists"))
         : { categories : [{categoryName: "work", lists:[]},{categoryName: "hobbies", lists:[]},{categoryName: "home", lists:[]}] };
}

function saveData(){
    console.log(JSON.stringify(toDoLists));
    localStorage.setItem("to-do-lists", JSON.stringify(toDoLists));
}

function removeItem(itemId){
    for(let i=0; i<toDoLists.categories.length; i++){
        for(let j=0; j<toDoLists.categories[i].lists.length; j++){
            toDoLists.categories[i].lists[j].items = toDoLists.categories[i].lists[j].items.filter(item =>{
                 return item.itemId != itemId;
            })
        }
    }
    saveData();
}

function getItem(itemId){//get all details for to do item
    let result;
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            list.items.forEach(item =>{
                if(item.itemId === itemId){
                    result = item;
                }
            })
        })        
    });
    return result;
}

function setItem(itemId, newItem){//set to do item
    console.log(itemId);
    console.log(newItem);
    

    for(let i=0; i<toDoLists.categories.length; i++){
        for(let j=0; j<toDoLists.categories[i].lists.length; j++){
            for(let k=0; k<toDoLists.categories[i].lists[j].items.length; k++){
                if(toDoLists.categories[i].lists[j].items[k].itemId == itemId){
                    newItem.done = toDoLists.categories[i].lists[j].items[k].done;
                    if(toDoLists.categories[i].lists[j].items[k]!==newItem.dueDateTime){
                        newItem.dueDateTime = format(addMinutes(newItem.dueDateTime, new Date().getTimezoneOffset()), "MM/dd/yyyy")
                    }
                    toDoLists.categories[i].lists[j].items[k] = newItem;
                }
            }
        }
    }
    saveData();
}

function createItem(parentId, itemTitle, notes, dueDateTime, done, importance){//add to do item
    let newItemId;
    // console.log(format(addMinutes(dueDateTime, new Date().getTimezoneOffset()), "MM/dd/yyyy"));
    console.log("List to add to id " + parentId);
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            if(list.listId == parentId){
                newItemId = crypto.randomUUID();
                list.items.push({itemTitle, notes, dueDateTime : format(addMinutes(dueDateTime, new Date().getTimezoneOffset()), "MM/dd/yyyy"), done, itemId:newItemId, importance})
            }
        })
    });
    saveData();
    return newItemId;
}

function getCategories(){
    let result = [];
    toDoLists.categories.forEach(category => {
        let lists = [];
        category.lists.forEach( list =>{
            lists.push({listName: list.listName, listId: list.listId})
        })
        result.push({categoryName: category.categoryName, lists});
    })
    return result;
}

function getCategoryLists(categoryName){
    let result = [];
    toDoLists.categories.forEach(category =>{
        if(category.categoryName == categoryName){
            
            category.lists.forEach(list => {
                let listTemp = [];
                list.items.forEach(item =>{
                    listTemp.push({itemTitle: item.itemTitle, itemId: item.itemId, done: item.done, dueDateTime: item.dueDateTime})
                })
                result.push({listName: list.listName, listId: list.listId, items: listTemp});
            })
        }
    })
    return result;
}

function getList(listId){//get list name and item titles
    let result;
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list => {
            if(list.listId == listId){
                
                result = {listName:list.listName, items:list.items};
            }
        })
    })
    return result;
}


function createList(categoryName, listName){
    console.log(categoryName);
    console.log(listName);
    let newId = crypto.randomUUID();
    toDoLists.categories.find(elem => elem.categoryName === categoryName).lists
        .push({listName, listId : newId, items:[] });
    saveData();
    return newId;
}

function getDueToday(){
    let toDos = [];
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            list.items.forEach(item =>{
                // console.log(format(new Date(item.dueDateTime).toLocaleDateString(), "MM/dd/yyyy"));
                // console.log(format(new Date(), "MM/dd/yyyy"));
                if(format(item.dueDateTime, "MM/dd/yyyy") === format(new Date(), "MM/dd/yyyy")){
                    toDos.push(item);
                }
            })
        })        
    });
    return toDos;
}

function getDueWeek(){
    let toDos = [];
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            list.items.forEach(item =>{
                if(format(item.dueDateTime, "MM/dd/yyyy") >= format(new Date(), "MM/dd/yyyy") &&
                format(item.dueDateTime, "MM/dd/yyyy") <= format(addDays(new Date(),7), "MM/dd/yyyy")){
                    toDos.push(item);
                }
            })
        })        
    });
    return toDos;
}

function getImportantToDos(){
    let toDos = [];
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            list.forEach(item =>{
                if(item.importance === "High"){
                    toDos.push(item);
                }
            })
        })        
    });
}

export {
    getItem,
    setItem,
    createItem,
    removeItem,
    getCategories,
    getCategoryLists,
    getList,
    createList,
    getDueToday,
    getDueWeek,
    getImportantToDos,
    load
}