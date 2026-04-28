-- Active: 1777357827338@@localhost@3306@mysql
CREATE DATABASE IF NOT EXISTS instagram;
USE instagram;

DROP DATABASE IF EXISTS instagram;


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



UPDATE user set  Followers = 0 WHERE Followers IS NULL;

INSERT INTO user(Name,Email,Followers,FOLLOWING,Password) VALUES
("Test","test@gmail.com",0,0,123456);

SELECT * FROM user;


CREATE TABLE IF NOT EXISTS post(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    content VARCHAR(255) NOT NULL,
    Likes INT NOT NULL,
    Post_Created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id)
);


INSERT INTO post(user_id,content,Likes) VALUES
(1,"Hello World!",100),
(2,"My first post!",50),
(3,"Enjoying the day!",75),
(4,"Having fun with SQL!",120);



SHOW DATABASES;

select * from instagram.post;

select * FROM instagram.user WHERE Followers>=900 AND FOLLOWING>=2;

select Name,Email FROM instagram.user WHERE Email in ("theshohinidas@gmail.com");

-- use limit clause
SELECT * FROM instagram.post LIMIT 2;

-- use order by clause
SELECT * FROM instagram.post ORDER BY Likes ASC;


-- aggregate functions
SELECT MAX(Likes) FROM instagram.post;


SELECT MIN(Likes) FROM instagram.post;

SELECT AVG(Likes) FROM instagram.post;

SELECT SUM(Likes) FROM instagram.post;

SELECT COUNT(Likes) FROM instagram.post;