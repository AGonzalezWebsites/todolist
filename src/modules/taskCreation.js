export class Task {

    constructor (title, description, dueDate, priority, notes, complete = 'no') {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.complete = complete;
    }


}