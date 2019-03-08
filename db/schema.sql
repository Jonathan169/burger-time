CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT PRIMARY key,
    burger_name VARCHAR(255),
    ate boolean DEFAULT false
);

