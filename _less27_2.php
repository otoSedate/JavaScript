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
	<title>Новая запись</title>

<style>
#wrapper{
	
	width: 500px;
	margin: 0px auto;
	padding: 10px;
	
	text-align: justify;
}
#wrapper > div{
	margin-bottom: 15px;
}
#wrapper p{
	margin-bottom: 5px;
}
.date{
	font-weight: bold;
}

textarea{
	width: 100%;
	padding: 5px;
	min-height: 400px;
	resize: vertical;
}
</style>
</head>
<body>
	<div id="wrapper">
		<h1>Новая запись</h1>
		<div>
			<form action="" method="POST">
				<p><input class="form-control" placeholder="Название записи"></p>
				<p><textarea class="form-control" placeholder="Текст записи"></textarea></p>
				<p><input type="submit" class="btn btn-danger btn-block" value="Сохранить"></p>
			</form>
		</div>
	</div>
</body>
</html>