<?php

$post = $_POST['m'];
$host= getenv('IP');
$dbName=('schema');
$dbUsername = getenv('C9 USER');
$dbPassword = '';

$conn = new PDO("mysql:host=$host;dbName=$dbname",$dbUsername,$dbPassword);
