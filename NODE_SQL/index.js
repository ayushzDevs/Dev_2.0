const {faker} = require("@faker-js/faker");
const mysql = require("mysql2");


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'user_db',
  password: "1905232223"
});


// inserting new data into the database
let q = "INSERT INTO users (id , username , email , password) VALUES ?";
let users = [
    ["124", "Ayush@2404", "ab4@gmail.com", "12434568"],
     ["456", "Ayush@2005", "def@gmail.com", "87654321"],


];

try{
    connection.query( q , [users], (err, results)=>{
    if(err) throw err;
    console.log(results);
}
);
}

catch(e){
    console.log(e);
}

connection.end();


let getRandomUser = ()=>{
    return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    }
}
