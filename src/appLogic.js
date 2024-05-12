//base on Things layout
//get items due today
//get items due next 7 days
//get category names and lists
//get lists and items
//get lists and items that are high importance
//get item info


let toDoLists  =  localStorage.getItem("to-do-lists") !== null ? JSON.parse(localStorage.getItem("to-do-lists")) : { categories : [] };

function saveData(){
    console.log(JSON.stringify(toDoLists));
    // localStorage.setItem("to-do-lists", JSON.stringify(toDoLists)); commented out for testing
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
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            list.forEach(item =>{
                if(item.itemId === itemId){
                    item = newItem;
                }
            })
        })        
    });
    saveData();
}

function createItem(parentId, itemTitle, description, notes, dueDateTime, done, importance){//add to do item
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            if(list.listId === parentId){
                list.items.push({itemTitle, description, notes, dueDateTime, done, itemId:crypto.randomUUID(), importance})
            }
        })
    });
    saveData();
}


function getCategory(categoryId){//get category information and list names
    let result;
    toDoLists.categories.forEach(category =>{
        if(category.categoryId === categoryId){
            let listInfo = category.lists.map(list => {
                return {listName: list.listName, listId: list.listId};
            });
            result = { categoryName : category.categoryName, lists: listInfo};
        }
    })
    return result;
}

function setCategory(categoryId, newName){//set category name
    toDoLists.categories.forEach( category => {
        if(category.categoryId === categoryId){
            category.categoryName = newName;
        }
    })
    saveData();
}

function createCategory(categoryName){//add category
    toDoLists.categories.push({
        categoryName,
        categoryId: crypto.randomUUID(),
        lists:[]
    });
    saveData();
}

function getCategories(){
    let result = [];
    toDoLists.categories.forEach(category => {
        let lists = [];
        category.lists.forEach( lists =>{
            lists.push({listName: list.listName, listId: list.listId})
        })
        result.push({categoryName: category.categoryName, categoryId: category.categoryId, lists});
    })
    return result;
}

function getList(listId){//get list name and item titles
    let result;
    toDoLists.categories.forEach(category => {
        category.forEach(list => {
            if(list.listId == listId){
                let toDos = list.items.map( item =>{
                    return {itemTitle:item.itemTitle, itemId: item.itemId};
                })
                result = {list:list.listName, items:toDos};
            }
        })
    })
    return result;
}

function setList(listId, newName){
    toDoLists.categories.forEach( category =>{
        category.forEach( list =>{
            if(list.listId == listId){
                list.listName = newName;
            }
        });
    });
    saveData();
}

function createList(categoryId, listName){
    toDoLists.categories.find(elem => elem.categoryId === categoryId)
        .push({listName, listId : crypto.randomUUID(), items:[] });
    saveData();
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
    let toDos = [];
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            list.forEach(item =>{
                if(item.dueDateTime >= today && item.dueDateTime<=today+7){
                    toDos.push(item);
                }
            })
        })        
    });
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

module.exports = {
    getItem,
    setItem,
    createItem,
    getCategory,
    setCategory,
    createCategory,
    getCategories,
    getList,
    setList,
    createList,
    getDueToday,
    getDueWeek,
    getImportantToDos
}