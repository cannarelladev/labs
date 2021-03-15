'use strict'
const dayjs = require('dayjs');

function Task(id, description, urgent = false, private_ = true, deadline){
    this.id = id;
    this.description = description;
    this.urgent = urgent;
    this.private_ = private_;
    this.deadline = deadline;

    this.toString = () => {
        return `Task -> Id = ${this.id}, Description = ${this.description}, Urgent = ${this.urgent}, Private = ${this.private_}, Dealine = ${this.deadline ? dayjs(this.deadline).format('DD/MM/YYYY HH:mm:ss') : "undefined"}`;
    };
}

function Tasks() {
    this.list = [];

    this.add = (value) => {
        this.list.push(value);
    }

    this.sortAndPrint = () => {
        let definedDeadline = this.list.filter( el => el.deadline!=undefined );
        let notDefinedDeadline = this.list.filter ( el => el.deadline==undefined );

        definedDeadline.sort( (a,b) => {
            if(dayjs(a.deadline).isBefore(dayjs(b.deadline))) return -1;
            else if(dayjs(a.deadline).isSame(dayjs(b.deadline))) return 0;
            else return 1;
        });

        this.list = [...definedDeadline, ...notDefinedDeadline]; 
        this.list.forEach( a => console.log(a.toString()) );
    };

    this.filterAndPrint = () => {
        const definedUrgent = [ ...this.list.filter( task => task.urgent === true )];
        definedUrgent.forEach( task => console.log(task.toString()) );
    };

}

const task1 = new Task(1, 'Fare la spesa', false, true, "2021-03-25T10:00:00");
const task2 = new Task(2, 'Dentista', true, true, "2021-03-12T12:00:00");
const task3 = new Task(3, 'Meccanico', false, true);
const task4 = new Task(4, 'Lezione', false, false, "2021-04-01T09:00:00");
const task5 = new Task(5, 'Appuntamento in banca');

let tasksList = new Tasks();
tasksList.add(task1);
tasksList.add(task2);
tasksList.add(task3);
tasksList.add(task4);
tasksList.add(task5);

console.log("-- Sort and Print --");
tasksList.sortAndPrint();
console.log("-- Filter and Print --");
tasksList.filterAndPrint();