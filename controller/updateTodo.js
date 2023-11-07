
// import todo model
const Todo = require("../models/todo");

// define route handler

exports.updateTodo = async( req, res) =>{
    
    try{
       
        const {id} = req.params;
        const {title,description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updateAt:Date.now()}
        )

       // response
       res.status(200)
       .json({
            success:true,
            data:todo,
            message:'updated successfully'
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
