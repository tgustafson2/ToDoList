//base on Things layout
//get items due today
//get items due next 7 days
//get category names and lists
//get lists and items
//get lists and items that are high importance
//get item info


let toDoLists  =  localStorage.getItem("to-do-lists") === null ? JSON.parse(localStorage.getItem("to-do-lists")) : { categories:[] };

function saveData(){
    localStorage.setItem("to-do-lists", JSON.stringify(toDoLists));
}

function getItem(itemId){//get all details for to do item
    let result;
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            list.forEach(item =>{
                if(item.itemId === itemId){
                    result = item;
                }
            })
        })        
    });
    return result;
}

function setItem(itemId, newItem){//set to do item
    getItem(itemId) = newItem;
}

function createItem(parentId, itemTitle, description, notes, dueDateTime, done, importance){//add to do item
    toDoLists.categories.find(elem => elem.categoryId === categoryId).lists
        .find(elem => elem.listId === listId).items.push({
            itemTitle,
            description,
            notes,
            dueDateTime,
            done,
            itemId: crypto.randomUUID(),
            importance
        });
}


function getCategory(){//get category information and list names
    
}

function setCategory(){//set category name

}

function createCategory(categoryName){//add category
    toDoLists.categories.push({
        categoryName,
        categoryId: crypto.randomUUID(),
        lists:[]
    });
}

function getList(){

}

function setList(){

}

function createList(categoryId, listName){
    toDoLists.categories.find(elem => elem.categoryId === categoryId)
        .push({listName, listId : crypto.randomUUID(), items:[] });
}

function getDueToday(){
    let toDos = [];
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            list.forEach(item =>{
                if(item.dueDateTime === today){
                    toDos.push(item);
                }
            })
        })        
    });
}

function getDueWeek(){

}

function getImportance(){

}