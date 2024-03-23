req = prompt("Enter your request: ")

let tasks = []

while(true){ 
    if(req=="quit"){
        console.log("program has been quitted. Thank you for using our program!");
        break;        
    }
    if (req == "add"){
        let taskName=prompt("Please enter the name of the task: ");
        tasks.push(taskName)
    }
    
    else if(req == 'list') {
        console.log('----------------------------------------');
        for(let i in tasks){
            console.log(i, " ", tasks[i]);
        }

        
        console.log('----------------------------------------');
        
    }
    else if(req == 'update'){
        ind = prompt('enter the index to replace: ')
        newTask = prompt('what do you want to update it with? ')
        tasks.splice(ind, 1, newTask)
    }
    
    else if(req == 'delete'){
        index = prompt('enter the index: ')
        tasks.splice(index, 1)
    }

    

    req = prompt("Enter your request: ")
    
}

