const {faker} = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");



app.set("view engine" , "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("views",path.join(__dirname, "/views"));










const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'user_db',
  password: "1905232223"
});


let getRandomUser = ()=>{
    return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
]
}







app.get("/",(req,res)=>{
    let q = "SELECT count(*) FROM users";

    try{
        connection.query(q , (err , result)=>{
            if(err) throw err;
            let count = JSON.stringify(result[0]["count(*)"]);
            res.render("home.ejs",{count})
        })
    }
    catch(e){
        console.log(e);
    }

});


app.get("/user",(req,res)=>{
    let q = "SELECT * FROM users"

    try{
        connection.query(q, (err, result)=>{
            if(err) throw err;
            let users = JSON.parse(JSON.stringify(result));
            res.render("users.ejs",{users});
        })
    }
    catch(e){
        console.log(e);
    }

    

})



app.listen(port , ()=>{
    console.log(`server is running at port ${port}`);
})



// inserting new data into the database
// let q = "INSERT INTO users (id , username , email , password) VALUES ?";


// try{
//     connection.query( q , [data], (err, results)=>{
//     if(err) throw err;
//     console.log(results);
// }
// );
// }

// catch(e){
//     console.log(e);cl
// }

// connection.end();
