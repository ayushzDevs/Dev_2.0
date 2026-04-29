-- Active: 1777357827338@@localhost@3306@mysql
CREATE DATABASE IF NOT EXISTS college;
USE college;

CREATE TABLE IF NOT EXISTS Teacher(
    id INT PRIMARY KEY,
    name VARCHAR(50),
    subject VARCHAR(50),
    salary DECIMAL (10,2)

)

INSERT INTO Teacher(id , name , subject , salary) VALUES
(23, "ajay" , "math", 50000.00),
(47 , "bharat","english", 60000.00),
(18, "charan" , "chemistry", 45000.00),
(9, "divya", "physics", 75000.00)

select Teacher.name FROM Teacher WHERE Teacher.salary > 55000.00;

ALTER TABLE Teacher CHANGE COLUMN salary CTC INT;

UPDATE Teacher SET CTC = CTC + .25 * CTC;
select * from Teacher;

ALTER TABLE Teacher ADD COLUMN City VARCHAR(50) DEFAULT "Gurgaon";
select * from Teacher;

ALTER TABLE Teacher DROP COLUMN CTC;
select * from Teacher;