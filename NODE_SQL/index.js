const {faker} = require("@faker-js/faker");
const mysql = require("mysql2");


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


let data = [];

for(let i = 1; i<=100; i++){
    data.push(getRandomUser());
}



// inserting new data into the database
let q = "INSERT INTO users (id , username , email , password) VALUES ?";


try{
    connection.query( q , [data], (err, results)=>{
    if(err) throw err;
    console.log(results);
}
);
}

catch(e){
    console.log(e);
}

connection.end();


