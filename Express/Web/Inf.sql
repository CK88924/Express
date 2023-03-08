CREATE DATABASE IF NOT EXISTS CKDB;
USE CKDB;
DROP TABLE IF EXISTS user_table;
CREATE TABLE user_table (
    `username` varchar(255) unique not null default '',
    `date_of_birth` datetime not null DEFAULT CURRENT_TIMESTAMP,
    `description` text, 
    PRIMARY KEY (`username`)
);
 