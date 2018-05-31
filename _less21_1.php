<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
   <?php

for ($i = 0; $i <= 100; $i += 2) {
	echo $i . '<br>';
}

$sum = 0;
for ($i = 1; $i <= 15; $i++) {
	$sum += $i * $i;
}
echo $sum;

$sum1 = 0;
for ($i = 1; $i <= 100; $i++) {
	if ($i % 7 == 0) {
		$sum1 += $i;
	}
}
echo $sum1;

$arr = [];
for ($i = 1; $i <= 10; $i++) {
	$arr[] = $i;
}
var_dump($arr);

$arr1 = [];
for ($i = 1; $i <= 10; $i++) {
	$arr1[] = $i;
}
var_dump($arr1);

?>

 </body>
</html>