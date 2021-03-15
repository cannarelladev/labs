'use strict'

function Task(id, description, urgent = false, private = true, deadline){
    this.id = id;
    this.description = description;
    this.urgent = urgent;
    this.private = private;
    this.deadline = deadline;
}

function Tasks() {
    this.list = [];

    this.add = (value) => {
        this.list.push(value);
    }

    this.sortAndPrint = () => { return 0; };

    this.filterAndPrint = () => {
        return 0;
    };

}
