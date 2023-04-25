CREATE DATABASE IF NOT EXISTS companydb; 

USE companydb;

CREATE TABLE empleyee (
    id INT(11)  NOT NULL AUTO_INCREMENT,
    name  VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)

);

DESCRIBE empleyee;

INSERT INTO empleyee VALUES 
(1,'joe', 1000),
(2, 'henry', 2000),
(3, 'carlo', 5000),
(4, 'mauro', 400); 