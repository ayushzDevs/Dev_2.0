const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
});



app.get("/",(req,res)=>{
    res.send("hello i am root");
});

app.get("/register",(req,res)=>{
    let {user , password} = req.query;
    res.send(`hello ${user}`);
});

app.post("/register",(req,res)=>{
    
    let {user , password} = req.body;
    res.send("standard POST response")
});