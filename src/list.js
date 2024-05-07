import Item from "./item";

class List{
    #listName;
    #listId;
    #items;
    #saveFn;
    constructor(listName, id = crypto.randomUUID(), items, saveFn){
        this.#listName = listName;
        this.#listId = id;
        this.#items = [];
        items.forEach(element => {
            this.#items.push(new Item(element.itemTitle, element.description, element.notes, element.dueDateTime, element.done, element.itemId, element.importance, saveFn))
        });
        this.#saveFn = saveFn;
    }

    get listName(){
        return this.#listName;
    }

    set listName(newName){
        this.#listName = newName;
        this.#saveFn();
    }

    get listId(){
        return this.#listId;
    }

    get items(){
        return this.#items;
    }

    addItem(item){
        this.#items.push(new Item(item.itemTitle, item.description, item.notes, item.dueDateTime, item.done, null, item.importance, saveFn));
        this.#saveFn();
    }

    toJSON(){
        jsonItems = this.#items.map(item => item.toJSON());
        return {
            listName: this.#listName,
            listId: this.#listId,
            items: jsonItems
        }
    }
};

export default List;

