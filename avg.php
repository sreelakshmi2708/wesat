<?php

$servername = "localhost";
$dbname = "wesat_sample";
$username = "wesat_sample";
$password = "sample123";

$conn = new mysqli($servername, $username, $password, $dbname);

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
date_default_timezone_set('Asia/Kolkata');
// Fetch average values in 5-minute intervals
$sql = "SELECT 
            FROM_UNIXTIME(FLOOR(UNIX_TIMESTAMP(reading_time)/(5*60))*(5*60)) as interval_time,
            AVG(uv) as avg_uv,
            AVG(uvi) as avg_uvi,
            AVG(si) as avg_si,
            AVG(tem) as avg_tem,
            AVG(hum) as avg_hum
            
        FROM Sensor
        GROUP BY interval_time
        ORDER BY interval_time DESC
        LIMIT 40";

$result = $conn->query($sql);

while ($data = $result->fetch_assoc()){
    $sensor_data[] = $data;
}


$interval_time = array_column($sensor_data, 'interval_time');

$i = 0;
foreach ($interval_time as $interval){
    $interval_time[$i] = date(" H:i:s", strtotime("$interval+13 hours 30 minutes"));
    $i += 1;
}

$avg_uv = json_encode(array_reverse(array_column($sensor_data, 'avg_uv')), JSON_NUMERIC_CHECK);
$avg_uvi = json_encode(array_reverse(array_column($sensor_data, 'avg_uvi')), JSON_NUMERIC_CHECK);
$avg_si = json_encode(array_reverse(array_column($sensor_data, 'avg_si')), JSON_NUMERIC_CHECK);
$avg_tem = json_encode(array_reverse(array_column($sensor_data, 'avg_tem')), JSON_NUMERIC_CHECK);
$avg_hum = json_encode(array_reverse(array_column($sensor_data, 'avg_hum')), JSON_NUMERIC_CHECK);
$interval_time = json_encode(array_reverse($interval_time), JSON_NUMERIC_CHECK);

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
    <h2>WESAT GROUND MONITORING STATION LIVE DATA</h2>
    <div id="chart-uv" class="container"></div>
    <div id="chart-uvi" class="container"></div>
    <div id="chart-si" class="container"></div>
    <div id="chart-tem" class="container"></div>
    <div id="chart-hum" class="container"></div>
<script>

var uv = <?php echo $avg_uv ; ?>;
var uvi = <?php echo $avg_uvi; ?>;
var si= <?php echo $avg_si; ?>;
var tem= <?php echo $avg_tem; ?>;
var hum= <?php echo $avg_hum; ?>;
var reading_time = <?php echo $interval_time; ?>;

uv = uv.map(function(value) {
    return parseFloat(value.toFixed(2));
});

uvi = uvi.map(function(value) {
    return parseFloat(value.toFixed(2));
});

si = si.map(function(value) {
    return parseFloat(value.toFixed(2));
});

tem = tem.map(function(value) {
    return parseFloat(value.toFixed(2));
});

hum = hum.map(function(value) {
    return parseFloat(value.toFixed(2));
});

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