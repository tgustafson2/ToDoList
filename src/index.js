
/*
local storage design

to-do-lists: {
    categories: [
        {
            categoryName: "",
            categoryId: "",
            lists:[
                {
                    listName: name,
                    listId: id,
                    items: [{
                        itemTitle: "",
                        description: "",
                        notes: "",
                        dueDateTime: "",
                        done: "",
                        itemId: "",
                        importance: "",}]
                }
            ]
        }
    ]
}

logic design

toDos
    create Category
    delete Category
    saveToLocalStorage
    updateItem
    moveItem 

category
    create list
    delete list


*/



