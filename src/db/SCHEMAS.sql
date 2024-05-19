DROP DATABASE IF EXISTS calo_it

CREATE DATABASE kringle_db;

CREATE TABLE itsupport (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(150) NOT NULL,
    isclockedin BOOLEAN
    start_time DATETIME
    end_time DATETIME
    duration TIME
);