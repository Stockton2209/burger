
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR (50) NOT NULL,
    -- look up syntax for boolean column
    devoured BOOLEAN (default = false),
    PRIMARY KEY (id)
);

