const express = require("express");
const app = express();

// let port = 3000;
let port = 8080;

// console.dir(app);


app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
});

// app.use((req , res)=>{
//     // console.log(req);
//     console.log("request recieved");
//     res.send(
//         "<h1>Hello, World!</h1>"
//     );
// });



app.get("/",(req,res)=>{
    res.send("you contacted root path");
});

app.get("/search",(req,res)=>{
    res.send("you contacted search path");
});

app.get("/help",(req,res)=>{
    res.send("you contacted help path");
});

app.post("/",(req,res)=>{
    res.send("you send a request to root by post")
})

app.use((req,res)=>{
    res.send("this path does not existS")
})