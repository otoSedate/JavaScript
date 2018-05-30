<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
 <?php

echo mt_rand(1, 100);

$sqrt = sqrt(587);
$arr = ['floor'=>floor($sqrt), 'ceil'=>ceil($sqrt)];
var_dump($arr);

$a = 20;
$b = 1.5;
echo floor($a / $b); 

$a2=30;                                                 
$arr2=[];
for ($i = 1; $i <= $a2; $i++) {
		if ($a2 % $i == 0) {
			$arr2[] = $i;
		}
	}

    $a3 = 20;                                       
	$b3 = 1.5;
	echo floor($a3 / $b3);	
	?>
 </body>
</html>