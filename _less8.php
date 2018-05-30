<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
 <?php

$arr = [1, 2, 3, 4, 5];
echo count($arr);

$arr1 = [1, 2, 3, 4, 5];
var_dump(in_array(3, $arr));

$arr2 = [1, 2, 3, 4, 5];
echo array_product($arr);

$arr3 = range(1, 100);
var_dump($arr);

echo implode('-', range(1, 9));

echo array_product(range(1, 10));

$arr4 = [1, 2, 3, 4, 5];
$result = array_slice($arr, 1, 3);
var_dump($result);



?>
	
 </body>
</html>