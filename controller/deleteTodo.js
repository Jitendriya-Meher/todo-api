
// import todo model
const Todo = require("../models/todo");

// define route handler

exports.deleteTodo = async( req, res) =>{
    try{
       
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

       // response
       res.json({
            success:true,
            message:'deleted successfully'
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
