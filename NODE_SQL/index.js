const {faker} = require("@faker-js/faker");
const mysql = require("mysql2");


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'user_db',
  password: "1905232223"
});


try{
    connection.query( "SHOW TABLES" , (err, results)=>{
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
