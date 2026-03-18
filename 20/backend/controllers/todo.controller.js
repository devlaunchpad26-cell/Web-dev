let todo = [
    "Buy new laptop",
    "complete previous task"
]


export function getalltodo(req,res){
    res.json(todo);
}

export function addtodo(req,res){
    let addtodo = req.body.todo;

    if(addtodo){
        todo.push(addtodo);
        console.log(addtodo , "added");
        res.json({"message":`${addtodo} added`}).status(200);
    }else{
        res.json({"message":"send todo in body"}).status(411);
    }
}

export function deletealltodo(req,res){
    todo=[];
    res.json({"message":"deleted all todos"})
}

export function deletesingletodo(req,res){
    let id = req.params.id;

    if((todo.length -1) < id){
        res.json({"message":"send proper id"});
    }else{
            if(todo.splice(id,1)){
            res.json({"message":` id ${id} removed success`}) 
            }  
    }
    
    
}