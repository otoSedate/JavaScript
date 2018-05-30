<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
 <?php

$arr = [1, 2, 3, 4, 5];
$result = array_splice($arr, 1, 3);
var_dump($result);

$arr1 = [1, 2, 3, 4, 5];
array_splice($arr, 1, 0, ['a', 'b']);
array_splice($arr, 6, 0, ['c']);
array_splice($arr, 8, 0, ['e']);
var_dump($arr);

$arr2 = ['a'=>1, 'b'=>2, 'c'=>3];
$keys = array_keys($arr);
$values = array_values($arr);
var_dump($keys);
var_dump($value);

$arr4 = ['a'=>1, 'b'=>2, 'c'=>3];
var_dump(array_flip($arr));

$arr3 = ['a', 'b', 'c', 'd', 'e'];
$result = array_replace($arr, [0=>'!', 3=>'!!']));
var_dump($arr);

?>
	
 </body>
</html>