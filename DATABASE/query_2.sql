-- Active: 1777357827338@@localhost@3306@instagram
CREATE DATABASE IF NOT EXISTS instagram;
USE instagram;


CREATE TABLE IF NOT EXISTS user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Followers INT NOT NULL,
    FOLLOWING INT NOT NULL,
    Password INT NOT NULL,
    AC_Created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO user(Name,Email,Followers,FOLLOWING,Password) VALUES
("Ayush","theayushchakraborty@gmail.com",1009,2,190523),
("Shohini","theshohinidas@gmail.com",500,1,200523),
("Rohit","therohitdas@gmail.com",750,3,210523),
("Sonia","thesoniachakraborty@gmail.com",1200,4,220523)


SELECT * FROM user;