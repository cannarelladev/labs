'use strict'
const dayjs = require('dayjs');
const sqlite = require('sqlite3');

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
    
    this.open = () => {
        return new Promise( (resolve, reject) => {
            const db = new sqlite.Database('tasks.db', (err) => {
                if(err)
                    reject(err);
                else{
                    this.db = db;
                    resolve(db);
                }
            });
        });
    };

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

    this.queryDeadLine = (date) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM tasks WHERE deadline > DATE(?)';
            this.db.all(sql, [date], (err, rows) => {
                if(err){
                    reject(err);
                }
                else{
                    const res = rows.map( a => new Task(a.id, a.description, a.urgent, a.private, a.deadline) );
                    resolve(res);
                }
            });
        });
    };
    
    this.queryWord = (word) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM tasks';
            this.db.all(sql, [], (err, rows) => {
                if(err){
                    reject(err);
                }
                else{
                    const res = rows.map( a => new Task(a.id, a.description, a.urgent, a.private, a.deadline)).filter( a => a.description.split(" ").includes(word));
                    resolve(res);
                }
            });
        });
    };

    this.loadAll = async() => {
        const query = 'SELECT * FROM tasks';
        return this.db.all(query, (err, rows) => {
            if (err) throw (err)
            else {
                for (let row of rows){
                    const temp = new Task (row.id, row.description, ((row.urgent)? true : false), ((row.private)? true : false), row.deadline);
                    this.list.push(temp);
                    console.log(temp.toString());
                }
            }
        })
    }

    /**
    this.loadAll = () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM tasks';
            this.db.all(query, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    for (let row of rows){
                        const temp = new Task (row.id, row.description, ((row.urgent)? true : false), ((row.private)? true : false), row.deadline);
                        this.list.push(temp);
                        console.log(temp.toString());
                    }
                    resolve(rows);
                }
            })
        })
    }*/

}


const main = async () => {
    const tasksList = new Tasks();

    await tasksList.open();
    
    console.log('-- After Deadline --');
    const afterDeadLine = await tasksList.queryDeadLine("2021-03-16");
    afterDeadLine.forEach( a => console.log(a.toString()) );

    console.log('\n-- Contains Word --');
    const constainsWord = await tasksList.queryWord("call");
    constainsWord.forEach( a => console.log(a.toString()) );

    console.log('\n-- Load All --');
    await tasksList.loadAll();
};

main();