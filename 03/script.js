'use strict';

//const dayjs = require('dayjs');

function Task(id, description, urgent = false, private_ = true, deadline) {
    this.id = id;
    this.description = description;
    this.urgent = urgent;
    this.private_ = private_;
    this.deadline = deadline;

    this.getId = () => {
        return this.id;
    }

    this.getDescription = () => {
        return this.description;
    }

    this.getUrgent = () => {
        return this.urgent;
    }

    this.getPrivate = () => {
        return this.private_;
    }

    this.getDeadline = () => {
        return this.deadline;
    }

    this.toString = () => {
        return `Task -> Id = ${this.id}, Description = ${this.description}, Urgent = ${this.urgent}, Private = ${this.private_}, Dealine = ${this.deadline ? dayjs(this.deadline).format('DD/MM/YYYY HH:mm:ss') : "undefined"}`;
    };
}

function Tasks() {
    this.list = [];

    this.add = (value) => {
        this.list.push(value);
    }

    this.getTasks = () => {
        return this.list;
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

let tasksList = new Tasks();
tasksList.add(task1);
tasksList.add(task2);
tasksList.add(task3);
tasksList.add(task4);

let tbody = window.document.getElementById("todolist");
const list = tasksList.getTasks();

for(const el of list){
    let tr = document.createElement("tr");
    //tr.className = "d-flex";
    tr.classList.add("d-flex");
    tr.innerHTML = `<th class="col-lg-1 d-flex flex-column align-items-center" scope="row">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="">
                        </div>
                    </th>
                    <td class="${el.getUrgent() ? 'urgent ': ''}col-lg-6">${el.getDescription()}</td>
                    <td class="col-lg-2 d-flex flex-column align-items-center">${(el.getPrivate()) ? '<i class="fas fa-user"></i>' : ''}</td>
                    <td class="col-lg-3 d-flex flex-column align-items-end">${el.getDeadline() ? dayjs(el.getDeadline()).format('DD/MM/YYYY HH:mm:ss') : ''}</td>`;
    tbody.appendChild(tr);
}

/*<tr class="d-flex">
    <th class="col-lg-1 d-flex flex-column align-items-center" scope="row">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" checked>
        /div>
    </th>
    <td class="col-lg-6">Lista della spesa</td>
    <td class="col-lg-2 d-flex flex-column align-items-center"><i class="fas fa-users"></i></td>
    <td class="col-lg-3 d-flex flex-column align-items-end">Monday 22 March 2021 at 14:30</td>
</tr>*/