### Schema
CREATE DATABASE taskmanager_db;
USE taskmanager_db;

CREATE TABLE tasks
(
	id int NOT NULL AUTO_INCREMENT,
	task_name varchar(255) NOT NULL,
    task_bool boolean not null default 0,
	PRIMARY KEY (id)
);
