const express = require("express");
const app = express();

// let port = 3000;
let port = 8080;

// console.dir(app);


app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
});

app.use((req , res)=>{
    console.log("request recieved");
})