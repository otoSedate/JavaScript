﻿<?php
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
	<title>Моя заметка номер 5</title>

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
		<h1>Моя заметка номер 5</h1>
		<div>
			<p class="date">15.04.2014</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur elementum lorem id venenatis. Nullam id sagittis urna, eu ultrices risus. Duis ante lorem, semper nec fringilla eu, commodo vel mauris. Nunc tristique odio lectus, eget condimentum nunc consectetur eu. Nullam non varius nisl, aliquet fringilla lectus. Aliquam erat volutpat. Ut vel mi et lectus hendrerit ornare vel ut neque. Quisque venenatis nisl eu mi</p>
			<p>
				Ut varius commodo fringilla. Nullam id pulvinar odio. Pellentesque gravida aliquam ipsum, et malesuada neque molestie eget. Vestibulum sagittis finibus efficitur. Donec sit amet aliquet dolor, vitae ornare tortor. Etiam eget augue nec diam vehicula bibendum. Nulla quis erat lacus. Vestibulum quis mattis augue. Praesent dignissim, justo non aliquam feugiat, lorem metus egestas leo, quis eleifend odio quam in ex. Aenean diam est, scelerisque ac ultricies sit amet, vulputate in tortor. Etiam ac mi enim. Sed pellentesque elementum erat eu eleifend. Integer imperdiet sem eu magna feugiat, sed efficitur velit convallis. 
			</p>
			<p>
				Phasellus gravida fermentum pellentesque. Aenean non neque mollis nisl dapibus eleifend. Sed interdum dui nec dictum elementum. Proin eget semper dolor, ut commodo nibh. Quisque vitae pharetra ligula. Sed dictum, sem sed pellentesque aliquam, tellus sapien dapibus magna, eu suscipit lacus augue sed velit. Ut vehicula sagittis nulla, et aliquet elit. Quisque tincidunt sem nibh, finibus dictum nisl vulputate quis. In vitae nisl et lacus pulvinar ornare id ac libero. Morbi pharetra fringilla erat ut lacinia. Curabitur eget augue at felis maximus condimentum id id sem. Ut dapibus, nisl rutrum scelerisque commodo, velit purus aliquam libero, faucibus iaculis odio augue sit amet mi. Donec interdum, ante volutpat mattis lacinia, nulla enim aliquet nulla, quis congue leo ante at justo. Mauris pellentesque risus a arcu bibendum, nec fringilla nisi tristique. Ut laoreet turpis non tincidunt fringilla. 
			</p>
		</div>
		<div>
			<a href="add.html" class="btn btn-danger btn-block">Добавить запись</a>
		</div>
	</div>
</body>
</html>