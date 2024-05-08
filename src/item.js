

class Item{
    #itemTitle;
    #description;
    #notes;
    #dueDateTime;
    #done;
    #itemId;
    #importance;
    #save

    constructor(itemTitle, description="", notes="", dueDateTime, done=false, itemId=crypto.randomUUID(), importance="medium", saveFn){
        this.#itemTitle=itemTitle;
        this.#description=description;
        this.#notes = notes;
        this.#dueDateTime = dueDateTime;
        this.#done = done;
        this.#itemId = itemId;
        this.#importance = importance;
        this.#save = saveFn;
    }

    get itemTitle(){
        return this.#itemTitle;
    }

    set itemTitle(newTitle){
        this.#itemTitle = newTitle;
        this.#save();
    }

    get description(){
        return this.#description;
    }

    set description(newDescription){
        this.#description = newDescription;
        this.#save();
    }

    get notes(){
        return this.#notes;
    }

    set notes(newNotes){
        this.#notes = newNotes;
        this.#save();
    }

    get dueDateTime(){
        return this.#dueDateTime;
    }

    set dueDateTime(newDueDateTime){
        this.#dueDateTime = newDueDateTime;
        this.#save;
    }

    get done(){
        return this.#done;
    }

    set doneStatus(newDone){
        this.#done = newDone;
        this.#save();
    }

    get itemId(){
        return this.#itemId;
    }

    get importance(){
        return this.#importance;
    }

    set importance(importanceStatus){
        this.#importance = importanceStatus;
        this.#save();
    }

    setProperties(itemTitle, description="", notes="", dueDateTime, done=false, itemId=crypto.randomUUID(), importance="medium"){
        this.#itemTitle=itemTitle;
        this.#description=description;
        this.#notes = notes;
        this.#dueDateTime = dueDateTime;
        this.#done = done;
        this.#itemId = itemId;
        this.#importance = importance;
    }


    toObject(){
        return {
            itemTitle: this.#itemTitle,
            description: this.#description,
            notes: this.#notes,
            dueDateTime: this.#notes,
            done: this.#done,
            itemId: this.#itemId,
            importance: this.#importance
        }
    }





}


export default Item;



