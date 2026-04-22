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
    res.send("hello i am root");
});

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    res.send(`hello ${username} with id ${id}`);
});



app.get("/search",(req,res)=>{
   let {q} = req.query;
   console.log(q);
    res.send(`search results for query : ${q}`);

})


// app.use((req,res)=>{
//     res.send("this path does not existS")
// })