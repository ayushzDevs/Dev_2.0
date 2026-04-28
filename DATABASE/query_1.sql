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

