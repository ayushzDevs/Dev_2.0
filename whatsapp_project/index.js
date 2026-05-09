// important requires and initialisations

const methodoverride = require('method-override');

const express = require('express');
const app = express();
const port = 8080;

const path = require('path');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodoverride('_method'));


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


// New route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})


// create route
app.post("/chats", (req,res)=>{
    let {from, message, to} = req.body;
    let new_chat = new Chat({
        from : from,
        message : message,
        to : to,
        createdAt : new Date()
    })
    new_chat.save().then(()=>{
        console.log("Chat saved successfully");
    })
    .catch(err => console.log(err));

    res.redirect("/chats");

})


// update route
app.get("/chats/:id/edit", async (req,res)=>{
    let{id}= req.params;
    let chat = await Chat.findById(id)
    res.render("edit.ejs", {chat : chat})
});

app.put("/chats/:id", async(req,res)=>{
    let {id} = req.params;
    let {message} = req.body;
    await Chat.findByIdAndUpdate(id, {message : message},
        {new : true, runValidators : true}
    );
    res.redirect("/chats");
})

// delete route
app.delete("/chats/:id", async(req,res)=>{
    let {id} = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})


app.listen(8080,()=>{
    console.log(`Server is running on port ${port}`);
});
