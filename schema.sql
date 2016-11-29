CREATE DATABASE chepomail;
USE chepomail;



CREATE TABLE users(User_id INT,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    username VARCHAR (25) NOT NULL,
    password VARCHAR(25) NOT NULL  
    );


CREATE TABLE message(
    message_id INT,
    recipient_ids INT,
    user_id INT,
    subject TEXT,
    body TEXT,
    date_sent VARCHAR (50)
    );



CREATE TABLE message_read(
    messageRead_id INT,
    reader_id INT,
    date_read DATE
    );

INSERT INTO users VALUES(1,'Data','Admin','Admin','Admin123');
INSERT INTO users VALUES(2,'Seaford','Bacchas','Rick','Ricky1');




