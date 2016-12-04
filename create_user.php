<?php
/* Set up Databade Connection*/
$host= ('127.0.0.1');
$dbName=('chepomail');
$dbUsername = ('altonbodley');
$dbPassword = '';
$dbport = 3306;
// Establish connection to database
$conn = new mysqli($host,$dbUsername, $dbPassword,$dbName,$dbport);
$fName=$_POST['fname'];
$lName=$_POST['lname'];
$uName=$_POST['uname'];
$pswd=$_POST['pass'];
$sql="INSERT INTO users VALUES(null,'$fName','$lName','$uName','$pswd');";
if($conn->query($sql)==true){
    echo 'Record added successfully';
}else{'New User not created';}
$conn->close();
?>