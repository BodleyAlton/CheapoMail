<?php

$host= ('127.0.0.1');
$dbName=('chepomail');
$dbUsername = ('altonbodley');
$dbPassword = '';
$dbport = 3306;

$conn = new mysqli($host,$dbUsername, $dbPassword,$dbName,$dbport);
$name= $_POST['uname'];

$sql = "SELECT username, password FROM users WHERE username = '$name';";

$password = $_POST['pass'];
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()){
        /*if (password_verify($password,$row[password])){*/
        if ($password==$row['password']){
            echo true;
           }
            else{
                echo false;
            }
        }
    } 

$conn->close();


?>