<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
 <?php
     $year = 2000;
	if ($year % 4 == 0 or ($year % 400 == 0 and $year % 100 != 0)) {
		echo 'Високосный';
	} else {
		echo 'Не високосный';
	}

	$month = 6;
	
	if ($month == 12 or $month == 1 or $month == 2) {
		$result = 'Зима';
	}
	if ($month >= 3 and $month <= 5) {
		$result = 'Весна';
	}
	if ($month >= 6 and $month <= 8) {
		$result = 'Лето';
	}
	if ($month >= 9 and $month <= 11) {
		$result = 'Осень';
	}

	echo $result;

	$a = 1;
	$b = 4;
	
	if (($a > 2 and $a < 11) or ($b >= 6 and $b < 14)) {
		echo 'Верно';
	} else {
		echo 'Неверно';
	}
 ?> 
 </body>
</html>