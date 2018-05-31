<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
   <?php
<form action="" method="GET">
	<input type="text" name="name">
	<input type="submit">
</form>
 <?php

$arr = [1, 3, 5, 6, 9, 11, 15, 30];
$newArr = [];
foreach ($arr as $elem) {
	if (isNumberInRange($elem)) {
		$newArr[] = $elem;
	}
}
	
var_dump($newArr);

$year = date('Y');
$arr = [];
for ($i = 1; $i < $year; $i++) {
	if(getDigitsSum($i) == 13) {
		$arr[] = $i;
	}
}
	
var_dump($arr);

$arr = [1, 3, 5, 6, 9, 11, 15, 30];
$newArr = [];
foreach ($arr as $elem) {
	if (isEven($elem)) {
		$newArr[] = $elem);
	}
}

?>
 </body>
</html>