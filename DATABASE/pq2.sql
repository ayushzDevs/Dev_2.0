-- Active: 1777357827338@@localhost@3306@mysql
USE college;

CREATE TABLE IF NOT EXISTS Student(
    roll_no INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(50),
    marks INT
);

INSERT INTO Student(roll_no , name , city , marks) VALUES
(1, "ajay" , "delhi", 85),
(2 , "bharat","gurgaon", 90),
(3, "charan" , "noida", 78),
(4, "divya", "delhi", 92);

select * from Student;