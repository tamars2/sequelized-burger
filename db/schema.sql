CREATE DATABASE sequelizedBurgers_db;
USE sequelizedBurgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT FALSE,
	date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);