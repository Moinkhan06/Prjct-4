const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://precticehtml:khtQ2c0vK5d4RjcM@cluster0.xjvyqw4.mongodb.net/books');

const db = mongoose.connection;

db.on('connected',(err) =>{
    if(err){
        console.log("Mongodb not connected");
        return false;
    }
    console.log("Mongodb connected");
})

module.exports = db;