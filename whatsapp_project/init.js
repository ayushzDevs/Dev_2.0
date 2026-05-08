// initialize mongoose


const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().then(()=>{
    console.log('Connected to MongoDB');
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://localhost:27017/whatsapp');
};



let allchats = [
    {
        from : "Ayush",
        to : "Shohini",
        message : "Biriyani khabi?",
        createdAt : new Date()
    },
    {
        from : "Shohini",
        to : "Ayush",
        message : "Haan, kab?",
        createdAt : new Date()
    },
    {
        from : "Ayush",
        to : "Shohini",
        message : "Aaj raat ko?",
        createdAt : new Date()
    },
    {
        from : "Shohini",
        to : "Ayush",
        message : "Theek hai, milte hain raat ko",
        createdAt : new Date()
    }
]




Chat.insertMany(allchats).
then(()=>{
    console.log("All chats saved successfully");
})
.catch(err => console.log(err));

