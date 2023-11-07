
// import todo model
const Todo = require("../models/todo");

// define route handler

exports.createTodo = async( req, res) =>{
    try{

        // extract title and description from request body
        const {title, description} = req.body;
        
        // create a new Todo object and insert it in DB
        const response = await Todo.create({title,description});
        // send a json response witha successful flag
        res.status(500).json(
            {
                success:true,
                data:response,
                message:"Entry created successfully"
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:' internal error',
                message:err.message
            }
        );
    }
}
