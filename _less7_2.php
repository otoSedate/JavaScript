<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
 <?php
$arr = range('a', 'z');
shuffle($arr);
var_dump($arr);

$arr = ['3'=>'a', '1'=>'c', '2'=>'e', '4'=>'b];
sort($arr);
var_dump($arr);

$str3 = 'abcabc';
echo strtr($str3, 'abc', '123');

echo strpos('abc abc abc', 'b');

echo strpos('abc abc abc', 'b', 3);

$str4 = 'aaa..aaaa';
if(strpos($str4, '..') !== false) {
	echo 'Да';
} else {
	echo 'Нет';
}

var_dump(str_split('1234567890', 1));

	$str5 = ' строка ';
	echo trim($str5);
	

$keys = ['a', 'b', 'c'];
$values = [1, 2, 3];
var_dump(array_combine($keys, $values));


$str8 = 'qwertyuiopasdfghjklzxcvbnm'; 
$newStr = str_shuffle($str8); 
echo substr($newStr, 0, 6); 

for ($i = 1; $i <= 9; $i++) {
	echo str_repeat('x' , $i).'<br>';
}

echo strip_tags('html, <b>php</b>, js');

echo htmlspecialchars('html, <b>php</b>, js');



$arr13 = explode('_', 'var_test_text');
$str13 = '';
foreach ($arr13 as $key=>$elem) {
	if($key != 0) {
		$str13 .=  ucfirst($elem);
	} else {
		$str13 .= $elem;
	}
}
	echo $str13;

	?>
 </body>
</html>