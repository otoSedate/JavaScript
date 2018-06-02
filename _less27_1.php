<?php
	$host = 'localhost'; 
	$user = 'root'; 
	$password = ''; 
	$db_name = 'guest_book';
	
	$link = mysqli_connect($host, $user, $password, $db_name) or die(mysqli_error($link));
	
	mysqli_query($link, "SET NAMES 'utf8'");
	
	$allRecord = "SELECT * FROM `records`";
	
	$result = mysqli_query($link, $allRecord) or die(mysqli_error($link));
		
	for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row);
	
?>


<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">  
	<title>Опрос</title>

<style>
#wrapper{
	
	width: 650px;
	margin: 0px auto;
	padding: 10px;
	
	text-align: justify;
}
#wrapper > div, form > div{
	margin-bottom: 15px;
}
div.note{
	padding: 0px 20px;
}
#wrapper p{
	margin-bottom: 5px;
}
#wrapper h1{
	text-align: left;
	font-size: 18pt;
}

.answer{
	font-weight: bold;
	
}


</style>

</head>
<body>
	<div id="wrapper">
		<h1>Опрос</h1>
		<div class="info alert alert-info">
			Укажите Ваш возраст:
		</div>
		<form action="check.html" method="POST">
			<div class="note">
				<p><input type="radio" name="radio" value="1"  id="r1"> <label for="r1">до 20 лет</label></p>
				<p><input type="radio" name="radio" value="2"  id="r2"> <label for="r2">от 20 до 30</label></p>
				<p><input type="radio" name="radio" value="3"  id="r3"> <label for="r3">более 30</label></p>
			</div>
			<p><input type="submit" class="btn btn-success btn-block" value="Ответить"></p>
		</form>
	</div>
</body>
</html>