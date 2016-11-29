<?php

$host= ('127.0.0.1');
$dbName=('chepomail');
$dbUsername = ('altonbodley');
$dbPassword = '';
$dbport = 3306;

$conn = new mysqli($host,$dbUsername, $dbPassword,$dbName,$dbport);

$reci= $_POST['recc'];
$sub = $_POST['subb'];
$mes = $_POST['mess'];

if ($conn->connect_error) {
    die("Connection failed: " .$conn->connect_error);
} 

$y = "SELECT User_id FROM users WHERE firstname = '$reci'";
$z = "SELECT User_id FROM users WHERE username = 'Admin'";
//$date= date("Y/m/d");
 
$sql = "INSERT INTO message (message_id, recipient_ids, user_id, subject, body, date_sent)
VALUES ('1','ff', 'ff', 'fffd','fdf','2016/11/28');";
try{
$conn->exec($sql);
echo 'Message sent successfully';
}
catch(PDOException $e){
   echo $e->getMessage();
}
// if ($conn->query($sql) === TRUE) {
//     echo true;
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }
$mkm = "SELECT * FROM message";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
       
        echo $mkm;
    }
        
    } 

$conn->close();
?>