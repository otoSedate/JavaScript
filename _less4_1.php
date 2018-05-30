<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
 <?php
     $day = 12;
	
	if ($day <= 10) {
		$decade = 1;
	}
	if ($day >= 11 and $day <= 20) {
		$decade = 2;
	}
	if ($day >= 21 and $day <= 31) {
		$decade = 3;
	}
	echo $decade;

	
	$str = '123231';
	
	$sum1 = $str[0] + $str[1] + $str[2];
	$sum2 = $str[3] + $str[4] + $str[5];
	
	if ($sum1 == $sum2) {
		echo 'Да';
	} else {
		echo 'Нет';
	}

	$str = 'abcde';
	if ($str[0] == 'a') {
		echo 'Да';
	} else {
		echo 'Нет';
	}
 ?> 
 </body>
</html>