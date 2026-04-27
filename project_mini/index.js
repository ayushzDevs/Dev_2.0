const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4:uuidv4} = require("uuid");
const method_o = require("method-override");

app.use(method_o("_method"))




// middlewares
app.set("view engine","project_mini");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const instadata = require("./data.json");





app.get("/home",(req,res)=>{
    res.render("home.ejs");
    
})



app.get("/search",(req,res)=>{
  
    let {username} = req.query;
    let data = instadata[username];
    if(!data){
        return res.send("User not found");
    }
    // console.log(data);
    res.render("ig.ejs", {data,username});
})





app.delete("/home/:username",(req,res)=>{
    let {username}= req.params;
    instadata = instadata.filter((home)=> home.name !== username);
    res.redirect("/home");

})












app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`);
})