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

    this.sortAndPrint = () => {
        let definedDeadline = this.list.filter( el => el.deadline!=undefined );
        let notDefinedDeadline = this.list.filter ( el => el.deadline==undefined );

        definedDeadline.sort( (a,b) => {
            if(a.deadline.isBefore(b.deadline)) return -1;
            else if(a.deadline.isSame(b.deadline)) return 0;
            else return 1;
        });

        this.list = [...definedDeadline, ...notDefinedDeadline]; 
    };

    this.filterAndPrint = () => {
        console.log("HOPE");
        return 0;
    };

}
