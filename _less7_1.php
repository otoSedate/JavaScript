<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
 <?php
$arr = range(1, 9);
var_dump(array_chunk($arr, 3));

$str4 = 'aaa..aaaa';
if(strpos($str4, '..') !== false) {
	echo 'Да';
} else {
	echo 'Нет';
}

var_dump(str_split('1234567890', 1));

	$str5 = ' строка ';
	echo trim($str5);
	

$str6 = 'слова слова слова.';
echo rtrim($str6, '.').'.';

$arr345 = [1, 2, 3, 4, 5];
$result = array_map('sqrt', $arr);
var_dump($result);



$arr1 = [1, 2, 3, 4, 5];
$arr2 = [3, 4, 5, 6, 7];
$result = array_intersect($arr1, $arr2);
var_dump($result);

$str7 = 'madam';
$rev = strrev($str7);
if ($rev == $str7) {
	echo $str7. ' - это слово палиндром';
}


$str11 = 'А';
$code = ord($str11);
if ($code >= 65 and $code <= 90) {
	echo 'большая буква';
}
if ($code >= 97 and $code <= 122) {
	echo 'маленькая буква';
}

	$str12 = 'ab-cd-ef';
	echo strrchr($str12, '-');



	?>
 </body>
</html>