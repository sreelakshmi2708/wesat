<?php

$servername = "localhost";

// REPLACE with your Database name
$dbname = "wesat_sample";
// REPLACE with Database user
$username = "wesat_sample";
// REPLACE with Database user password
$password = "sample123";

// Keep this API Key value to be compatible with the ESP32 code provided in the project page. If you change this value, the ESP32 sketch needs to match
$api_key_value = "tPmAT5Ab3j7F9";

$api_key = $uv = $uvi = $si = $tem = $hum = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $api_key = test_input($_POST["api_key"]);
    if($api_key == $api_key_value) {
       // $value1 = test_input($_POST["value1"]);
        //$value2 = test_input($_POST["value2"]);
       // $value3 = test_input($_POST["value3"]);

         $uv = test_input($_POST["uv"]);
         $uvi = test_input($_POST["uvi"]);
         $si = test_input($_POST["si"]);
         $tem = test_input($_POST["tem"]);
         $hum = test_input($_POST["hum"]);

        
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 
        
        $sql = "INSERT INTO Sensor (uv, uvi, si, tem, hum)
        VALUES ('" . $uv . "', '" . $uvi . "', '" . $si . "', '" . $tem . "', '" . $hum . "')";
        
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    
        $conn->close();
    }
    else {
        echo "Wrong API Key provided.";
    }

}
else {
    echo "No data posted with HTTP POST.";
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
