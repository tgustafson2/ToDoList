import List from "./list";

class Category{
    #categoryName;
    #categoryId;
    #lists;
    #saveFn;
    constructor(categoryName, categoryId = crypto.randomUUID(), lists, saveFn){
        this.#categoryName = categoryName;
        this.#categoryId = categoryId;
        this.#lists = lists.map(list =>{
            return new List(list.listName, list.listId, list.items, saveFn);
        });
        this.#saveFn = saveFn;
    }

    get categoryName(){
        return this.#categoryName;
    }

    set categoryName(newName){
        this.#categoryName = newName;
        this.#saveFn();
    }

    addList(list){
        this.#lists.push(new List());
        this.#saveFn();
    }

    toJSON(){
        let listsObj = this.#lists.map(list =>{
            return list.toObject();
        })
        return {
            categoryName: this.#categoryName,
            categoryId: this.#categoryId,
            lists : listsObj
        }
    }
}

export default Category;