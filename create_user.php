<?php
/* Set up Databade Connection*/
$host= ('127.0.0.1');
$dbName=('chepomail');
$dbUsername = ('altonbodley');
$dbPassword = '';
$dbport = 3306;
// Establish connection to database
$conn = new mysqli($host,$dbUsername, $dbPassword,$dbName,$dbport);
$patt = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$^';
$fName=strip_tags($_POST['fname']);
$lName=strip_tags($_POST['lname']);
$uName=strip_tags($_POST['uname']);
$pswd=$_POST['pass'];
if (preg_match($patt,$pswd)){ // Checks if password matches pattern
    //$pass=password_hash($pswd,PASSWORD_BCRYPT); //Encrypted password
    /*$sql="INSERT INTO users VALUES(null,'$fName','$lName','$uName','$pass');";*/
    $sql="INSERT INTO users VALUES(null,'$fName','$lName','$uName','$pswd');";
    if($conn->query($sql)==true){
        echo 'Record added successfully';
    }else{'New User not created';}
}else{
    echo ('Please enter a valid password');
}
$conn->close();
?>