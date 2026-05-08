const mongoose = require('mongoose');

const chatSChema = new mongoose.Schema({
    from :{
        type : String,
        required : true
    },
    to :{
        type : String,
        required : true
    },
    message:{
        type : String,
        maxLength : 500
    },
    createdAt:{
        type : Date,
        required : true,
        default : Date.now()
    }
});


const Chat = mongoose.model('Chat',chatSChema);

module.exports = Chat;