<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
 <?php

$arr = ['a'=>1, 'b'=>2, 'c'=>3];
echo array_rand($arr);

$arr1 = [1, 2, 3, 4, 5];
shuffle($arr);
var_dump($arr);

$arr2 = ['a', 'b', 'c', 'b', 'a'];
$arr3 = array_unique($arr);
var_dump($arr3);

$arr4 = [1, 2, 3, 4, 5];
array_unshift($arr, 0);
array_push($arr, 6);
var_dump($arr);

$arr5 = ['a', 'a', 'a', 'b', 'b', 'c'];
var_dump(array_count_values($arr));

echo array_sum(str_split('1234567890', 1));

?>
	
 </body>
</html>