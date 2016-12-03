<?php

/* Set up Databade Connection*/
$host= ('127.0.0.1');
$dbName=('chepomail');
$dbUsername = ('altonbodley');
$dbPassword = '';
$dbport = 3306;

// Establish connection to database
$conn = new mysqli($host,$dbUsername, $dbPassword,$dbName,$dbport);

//Accept mail recipiant and sender
$currentUser=$_POST['name'];

$crnuser_id = "SELECT User_id FROM users WHERE username='$currentUser';";
$userMessage = "SELECT * FROM message WHERE recipient_ids = '$crnuser_id';";

try
{
    if($conn){
        echo "conn established ";
    }
        
    $Rresult= mysqli_query($conn,$recpient); //Recipient user_id
    $Sresult= mysqli_query($conn,$sender); //Sender user_id
    if ($Rresult == $Sresult )
    {
        
    }
    
    

catch(PDOException $e)
    {
     echo $e->getMessage();
    }

$conn->close(); // close connection 