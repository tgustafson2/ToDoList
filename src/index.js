
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
                        importance: ""}]
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

import "./style.css";
import * as AppLogic from "./appLogic";
import * as MainContent from "./mainContent";
import * as Sidebar from "./sidebar";
import * as Modals from "./modals";



AppLogic.load();
Sidebar.initialize(AppLogic.getCategories());
Modals.initialize();
MainContent.displayToday(AppLogic.getDueToday());


