const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4:uuidv4} = require("uuid");




// middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


let posts = [
    {
        // id : Date.now().toString(),
        id: uuidv4(),
        username : "ayush",
        content : "This is my first post"
    },
    {
        // id : Date.now().toString(),
        id: uuidv4(),
        username : "shohini",
        content : "This is my second post"
    },
    {
        // id : Date.now().toString(),
        id: uuidv4(),
        username : "baban",
        content : "This is my third post"
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts:posts});
})

app.get("/post/new",(req,res)=>{
    res.render("new.ejs");
})



app.post("/posts",(req,res)=>{
    let {username, content} = req.body;
    // let newPost = {id: Date.now().toString(), username, content};
    let newPost = {id:uuidv4(),username,content};
    posts.push(newPost);
    res.redirect("/posts");

})


app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((post)=>post.id==id)
    res.render("show.ejs",{post});
})




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

