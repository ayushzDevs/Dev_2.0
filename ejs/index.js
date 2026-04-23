const express = require('express');
const app = express();
const port = 8080;
const path = require("path");

app.use(express.static("public"));




app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.send("Hello World");
});

// app.get("/hello",(req,res)=>{
//     res.render("home.ejs");

// });

// app.get("/rolldice",(req,res)=>{
//     let random_num = Math.floor(Math.random()*6)+1;
//     res.render("rolldice.ejs", {random_num});
    
// });





// ig basic template

app.get("/ig/:username",(req,res)=>{

    const instadata = require("./data.json");
    let {username} = req.params;
    let data = instadata[username];

    if(!data){
        return res.send("User not found");
    }
    res.render("ig.ejs", {data});

    // console.log(data)
});



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

