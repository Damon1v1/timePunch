DROP DATABASE IF EXISTS calo_it

CREATE DATABASE calo_it;

CREATE TABLE itsupport (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    empname VARCHAR(150) NOT NULL,
    isclockedin BOOLEAN
    start_time DATETIME
    end_time DATETIME
    duration TIME
);