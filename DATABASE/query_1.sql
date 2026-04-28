-- Active: 1777357827338@@localhost@3306@mysql
-- Active: 1777357827338@@localhost@3306@college
CREATE DATABASE IF NOT EXISTS college;
DROP DATABASE IF EXISTS college;
USE college;
CREATE TABLE IF NOT EXISTS students(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    course VARCHAR(50) NOT NULL
);

-- SELECT * FROM students;
INSERT INTO students(name,age,course) VALUES
("Ayush",21,"CSE"),
("Shohini",20,"CSE"),
("Rohit",22,"IT"),
("Sonia",20,"ME"),
("Priya",23,"CSE"),
("Rahul",21,"IT");

SELECT * FROM students;

UPDATE students set age =22 WHERE name="Ayush";
SELECT * FROM students;

select name, course from students where age between 20 and 22;


-- using group by clause
SELECT COUNT(id) from college.students group by course;

-- having clause
SELECT course, COUNT(id) from college.students group by course HAVING COUNT(age)<22;

update students set course = "ECE" where course = "ME";
SELECT * FROM students;

DELETE FROM students where course = "ECE";
SELECT * FROM students;

-- using ALTER TABLE


ALTER TABLE student_info ADD COLUMN grade VARCHAR(2);
SELECT * FROM student_info;

ALTER TABLE student_info DROP COLUMN grade;
SELECT * FROM student_info;

ALTER TABLE student_info RENAME TO students;
SELECT * FROM students;

-- using Truncate
TRUNCATE TABLE student_info;
SELECT  grade FROM student_info;