CREATE DATABASE chepomail;
USE chepomail;



CREATE TABLE users(
    User_id INT AUTO_INCREMENT=5,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    username VARCHAR (25) NOT NULL,
    password VARCHAR(25) NOT NULL  
    );


CREATE TABLE message(
    message_id INT NOT NULL AUTO_INCREMENT,
    recipient_ids INT,
    user_id INT,
    subject VARCHAR(62),
    body VARCHAR(150),
    date_sent VARCHAR (50)
    );



CREATE TABLE message_read(
    messageRead_id INT,
    reader_id INT,
    date_read DATE
    );

INSERT INTO users VALUES(1,'Data','Admin','Admin','Admin123');
INSERT INTO users VALUES(2,'Seaford','Bacchas','Rick','Ricky1');




