//Request statement
const mongoose = require('mongoose');
const Schema = mongoose.Schema
//object for postSchema
var postSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
});

//To register employeeSchema inside mongoose 
//First parameter for name of schema and second for Schema objects
module.exports = mongoose.model('Post', postSchema);