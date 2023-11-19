<!DOCTYPE html>
<html>
<body>

<?php
$servername = "localhost";
$username = "wesat_sample";
$password = "sample123";
$dbname = "wesat_sample";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$sql = "SELECT * FROM Sensor WHERE id=(SELECT MAX(id) FROM Sensor)";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        $createdAt = $row["reading_time"];
        $dateFrom = new DateTime($createdAt, new DateTimeZone('America/Los_Angeles'));
        $dateFrom->setTimezone(new DateTimeZone('Asia/Kolkata'));
        $IST = $dateFrom->format('d-m-Y H:i:s');
      
        echo "<p> <font color=green font face='arial' size='12pt'>WESAT LIVE DATA</font> </p>";
        echo "<p> <font color=blue font face='arial' size='4pt'>Ground Monitoring Station : Thiruvananthapuram City</font> </p>";
        echo "<p> <font color=black font face='arial' size='5pt'>UV&emsp;: " . $row["uv"]."<br>". "   UVI &ensp;: " . $row["uvi"]."<br>"."   SI &emsp; : " . $row["si"]."<br>". "   Temperature&ensp;: " . $row["tem"]."<br>". "   Humidity &emsp;&emsp;: " . $row["hum"]."</font> </p><br><br>"."Last updated :  " . $IST. "<br>";
       
        
    }
} else {
    echo "0 results";
}

mysqli_close($conn);
?>

</body>
</html>
