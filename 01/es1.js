'use strict'
const dayjs = require('dayjs');

function Task(id, description, urgent = false, private_ = true, deadline){
    this.id = id;
    this.description = description;
    this.urgent = urgent;
    this.private_ = private_;
    this.deadline = deadline;

    this.toString = () => {
        return `Task -> Id = ${this.id}, Description = ${this.description}, Urgent = ${this.urgent}, Private = ${this.private_}, Dealine = ${this.deadline || "undefined"}\n`;
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
            if(a.deadline.isBefore(b.deadline)) return -1;
            else if(a.deadline.isSame(b.deadline)) return 0;
            else return 1;
        });

        this.list = [...definedDeadline, ...notDefinedDeadline]; 
        console.log(`${this.list}`);
    };

    this.filterAndPrint = () => {
        console.log("HOPE");
        return 0;
    };

}

const task1 = new Task(1, 'Fare la spesa', false, true, dayjs("2021-03-25"));
const task2 = new Task(2, 'Dentista', true, true, dayjs("2021-03-12"));
const task3 = new Task(3, 'Meccanico', false, true);
const task4 = new Task(4, 'Lezione', false, false, dayjs("2021-04-01"));
const task5 = new Task(5, 'Appuntamento in banca');

let tasksList = new Tasks();
tasksList.add(task1);
tasksList.add(task2);
tasksList.add(task3);
tasksList.add(task4);
tasksList.add(task5);

tasksList.sortAndPrint();