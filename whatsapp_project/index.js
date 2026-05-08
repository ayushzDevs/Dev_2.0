// important requires and initialisations

const express = require('express');
const app = express();
const port = 8080;

const path = require('path');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

app.use(express.static(path.join(__dirname, "public")));


// initialize mongoose
main().then(()=>{
    console.log('Connected to MongoDB');
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://localhost:27017/whatsapp');
};


// routes

app.get("/",(req,res)=>{
    res.send("root is working");
});


// index route
app.get("/chats", async(req,res)=>{
    let chats = await Chat.find().then((chats)=>{
        res.render("index.ejs",{chats : chats});

    })
})




app.listen(8080,()=>{
    console.log(`Server is running on port ${port}`);
});