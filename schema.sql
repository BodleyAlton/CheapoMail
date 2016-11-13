DROP DATABASE IF EXIST chepoMail;
CREATE DATABASE chepoMail;
USE chepoMail;

--Table structure for table users--
DROP TABLE IF EXIST `users`;
CREATE TABLE `users`(
    `id` int(5) NOT NULL auto_increment,
    `firstname` char(25) NOT NULL default '',
    `lastname` char(25) NOT NULL default '',
    `username` char (30) NOT NULL default '',
    `password` char(30) NOT NULL default '',
    PRIMARY KEY (`username`),
    KEY (`firstname`),
    KEY (`lastname`)
    );
    
--Table structure for table messagel--
DROP TABLE IF EXIST `message`;
CREATE TABLE `message`(
    `id` int(50) NOT NULL auto_increment,
    `recipient_ids` int(5) NOT NULL default '0',
    `user_id` int(5) NOT NULL default '0',
    `subject` text default '',
    `body` text default '',
    `date_sent` date NOT NULL default GETDATE(),
    PRIMARY KEY (`id`)
    );

--Table structure for message_read--
DROP TABLE IF EXIST `message_read`;
CREATE TABLE `message_read(
    `id` int(50) NOT NULL auto_increment,
    `message_id` int(50) NOT NULL default '',
    `reader_id` int (5) NOT NULL default '',
    `date_read` date NOT NULL default GETDATE(),
    PRIMARY KEY (`id`)
    );
