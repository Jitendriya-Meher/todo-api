
// import todo model
const Todo = require("../models/todo");

// define route handler

exports.getTodo = async( req, res) =>{
    try{
       // fetch all todos from database
       const todos = await Todo.find({});

       // response
       res.status(200)
       .json({
            success:true,
            data:todos,
            message:'Entire todo database fetched successfully'
       });
    }
    catch(err){
        console.error(err);
        res.status(500).json(
            {
                success:false,
                data:' internal error',
                message:err.message
            }
        );
    }
}


exports.getTodoById = async( req, res) =>{
    try{
       // extract todo item on the basic of id
       const id = req.params.id;
       const todo = await Todo.findById({_id:id});

       if( !todo){
            return res.status(404).json({
                success:false,
                meaasge:"No data found with given id"
            })
       }

       // response
       res.status(200)
       .json({
            success:true,
            data:todo,
            message:`todo ${id} data successfully fetched`  
       });
    }
    catch(err){
        console.error(err);
        res.status(500).json(
            {
                success:false,
                data:' internal error',
                message:err.message
            }
        );
    }
}