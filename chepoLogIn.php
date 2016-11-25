<?php

$red=$name;

$host= ('127.0.0.1');
$dbName=('c9');
$dbUsername = ('altonbodley');
$dbPassword = '';

$conn = new PDO("mysql:host=$host;dbName=$dbname",$dbUsername);

$name= $_POST['uname'];
$password = $_POST['pass'];

echo $name;
echo $password;
//echo $password;