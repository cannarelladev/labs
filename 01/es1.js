'use strict'

function Task(id, description, urgent = false, private = true, deadline){
    this.id = id;
    this.description = description;
    this.urgent = urgent;
    this.private = private;
    this.deadline = deadline;
} 