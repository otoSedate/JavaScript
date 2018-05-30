<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
 <?php

$a2=sqrt(587);                                    
$arr1 = ['floor'=>floor($sqrt), 'ceil'=>ceil($sqrt)];

echo mt_rand(1,100);                                  
$a1=10;                                            
$b1=22;
echo abs($a1-$b1);

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

$sqrt = sqrt(379);
	
echo round($sqrt); 
echo round($sqrt, 1); 
echo round($sqrt, 2); 

$result = [];
	$arr = [1, 2, -1, -2, 3, -3];
	
	foreach ($arr as $elem) {
		$result[] = abs($elem);
	}
	
	var_dump($result);
?>
 </body>
</html>