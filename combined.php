<?php

$servername = "localhost";

// REPLACE with your Database name
$dbname = "wesat_sample";
// REPLACE with Database user
$username = "wesat_sample";
// REPLACE with Database user password
$password = "sample123";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
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
      
        echo "<p> <font color=black font face='arial' size='12pt'>WESAT LIVE DATA</font> </p>";
        echo "<p> <font color=blue font face='arial' size='4pt'>Ground Monitoring Station : Thiruvananthapuram City</font> </p>";
        echo "<p> <font color=black font face='arial' size='5pt'>UV&emsp;: " . $row["uv"]."<br>". "   UVI &ensp;: " . $row["uvi"]."<br>"."   SI &emsp; : " . $row["si"]."<br>". "   Temperature&ensp;: " . $row["tem"]."<br>". "   Humidity &emsp;&emsp;: " . $row["hum"]."</font> </p><br><br>"."Last updated :  " . $IST. "<br>";
       
        
    }
} else {
    echo "0 results";
}






$sql = "SELECT id, uv, uvi, si, tem, hum, reading_time FROM Sensor order by reading_time desc limit 40";

$result = $conn->query($sql);

while ($data = $result->fetch_assoc()){
    $sensor_data[] = $data;
}

$readings_time = array_column($sensor_data, 'reading_time');

$i = 0;
foreach ($readings_time as $reading){
    // Convert the timestamp to India Standard Time (UTC+12:30)
    $readings_time[$i] = date("Y-m-d H:i:s", strtotime("$reading +12 hours 30 minutes"));
    $i += 1;
}

$uv = json_encode(array_reverse(array_column($sensor_data, 'uv')), JSON_NUMERIC_CHECK);
$uvi = json_encode(array_reverse(array_column($sensor_data, 'uvi')), JSON_NUMERIC_CHECK);
$si = json_encode(array_reverse(array_column($sensor_data, 'si')), JSON_NUMERIC_CHECK);
$tem = json_encode(array_reverse(array_column($sensor_data, 'tem')), JSON_NUMERIC_CHECK);
$hum = json_encode(array_reverse(array_column($sensor_data, 'hum')), JSON_NUMERIC_CHECK);
$reading_time = json_encode(array_reverse($readings_time), JSON_NUMERIC_CHECK);

/*echo $value1;
echo $value2;
echo $value3;
echo $reading_time;*/

$result->free();
$conn->close();
?>

<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://code.highcharts.com/highcharts.js"></script>
  <style>
    body {
      min-width: 310px;
    	max-width: 1280px;
    	height: 500px;
      margin: 0 auto;
    }
    h2 {
      font-family: Arial;
      font-size: 2.5rem;
      text-align: center;
    }
  </style>
  <body>
    <h2>WESAT GROUND MONITORING STATION LIVE DATA PLOT</h2>
    <div id="chart-uv" class="container"></div>
    <div id="chart-uvi" class="container"></div>
    <div id="chart-si" class="container"></div>
    <div id="chart-tem" class="container"></div>
    <div id="chart-hum" class="container"></div>
<script>

var uv = <?php echo $uv ; ?>;
var uvi = <?php echo $uvi; ?>;
var si= <?php echo $si; ?>;
var tem= <?php echo $tem; ?>;
var hum= <?php echo $hum; ?>;
var reading_time = <?php echo $reading_time; ?>;

var chart1 = new Highcharts.Chart({
  chart:{ renderTo : 'chart-uv' },
  title: { text: 'UV' },
  series: [{
    showInLegend: false,
    data: uv 
  }],
  plotOptions: {
    line: { animation: false,
      dataLabels: { enabled: true }
    },
    series: { color: '#059e8a' }
  },
  xAxis: { 
    type: 'datetime',
    categories: reading_time
  },
  yAxis: {
    title: { text: 'UV' }
    //title: { text: 'Temperature (Fahrenheit)' }
  },
  credits: { enabled: false }
});

var chart2 = new Highcharts.Chart({
  chart:{ renderTo:'chart-uvi' },
  title: { text: 'UVI' },
  series: [{
    showInLegend: false,
    data: uvi
  }],
  plotOptions: {
    line: { animation: false,
      dataLabels: { enabled: true }
    }
  },
  xAxis: {
    type: 'datetime',
    //dateTimeLabelFormats: { second: '%H:%M:%S' },
    categories: reading_time
  },
  yAxis: {
    title: { text: 'UVI' }
  },
  credits: { enabled: false }
});


var chart3 = new Highcharts.Chart({
  chart:{ renderTo:'chart-si' },
  title: { text: 'SUN INTENSITY' },
  series: [{
    showInLegend: false,
    data: si
  }],
  plotOptions: {
    line: { animation: false,
      dataLabels: { enabled: true }
    },
    series: { color: '#18009c' }
  },
  xAxis: {
    type: 'datetime',
    categories: reading_time
  },
  yAxis: {
    title: { text: 'si' }
  },
  credits: { enabled: false }
});

var chart4 = new Highcharts.Chart({
  chart:{ renderTo:'chart-tem' },
  title: { text: 'TEMPERATURE' },
  series: [{
    showInLegend: false,
    data: tem
  }],
  plotOptions: {
    line: { animation: false,
      dataLabels: { enabled: true }
    }
  },
  xAxis: {
    type: 'datetime',
    //dateTimeLabelFormats: { second: '%H:%M:%S' },
    categories: reading_time
  },
  yAxis: {
    title: { text: 'Temperature(Celsius)' }
  },
  credits: { enabled: false }
});

var chart5 = new Highcharts.Chart({
  chart:{ renderTo:'chart-hum' },
  title: { text: 'HUMIDITY' },
  series: [{
    showInLegend: false,
    data: hum
  }],
  plotOptions: {
    line: { animation: false,
      dataLabels: { enabled: true }
    }
  },
  xAxis: {
    type: 'datetime',
    //dateTimeLabelFormats: { second: '%H:%M:%S' },
    categories: reading_time
  },
  yAxis: {
    title: { text: 'Humidity' }
  },
  credits: { enabled: false }
});

</script>
</body>
</html>
