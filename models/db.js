//request statement for mingooseDB
const mongoose = require('mongoose');

//call the function mongoose.connect() to connect the mongooseDB
//First parameter URL for the database protocol://localhost with default port number/databasename

//Third parameter is call back function 
mongoose.connect('mongodb://localhost:27017/PostDB', {useNewUrlParser: true}, { useUnifiedTopology: true }, (err)=> {
    if (!err){console.log('mpngoDB Connection Succeeded.')}
    else { console.log('Error in DB connection :' + err)}
});

//request statement for post model
require('./post.model');