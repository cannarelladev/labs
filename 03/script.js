'use strict';

//const dayjs = require('dayjs');

function Task(id, description, urgent = false, private_ = true, deadline) {
    this.id = id;
    this.description = description;
    this.urgent = urgent;
    this.private_ = private_;
    this.deadline = deadline;

    this.toString = () => {
        return `Task -> Id = ${this.id}, Description = ${this.description}, Urgent = ${this.urgent}, Private = ${this.private_}, Dealine = ${this.deadline ? dayjs(this.deadline).format('DD/MM/YYYY HH:mm:ss') : "undefined"}`;
    };
}

const task1 = new Task(1, 'Fare la spesa', false, true, "2021-03-25T10:00:00");
const task2 = new Task(2, 'Dentista', true, true, "2021-03-12T12:00:00");
const task3 = new Task(3, 'Meccanico', false, true);
const task4 = new Task(4, 'Lezione', false, false, "2021-04-01T09:00:00");

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