<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
 <?php
 $str = '123';
	$result = $str[0] + $str[1] + $str[2];
	echo $result;
	$a = 5;
	if ($a == 0 or $a == 2) {
		$a += 7;
	} else {
		$a /= 10;
	}
	echo $a;

	$var = true;
	if ($var == true) {
		echo 'Верно';
	} else {
		echo 'Неверно';
	}
 ?> 
 </body>
</html>