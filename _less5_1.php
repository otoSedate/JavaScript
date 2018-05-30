<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
 <?php
$arr=['html', 'css', 'php', 'js', 'jq'];  
foreach ($arr as $elem){echo $elem.'<br>';}

$arr23 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	$str = '';
	foreach ($arr as $elem) {
		$str .= '-'.$elem;
	}
	echo $str.'-';

$arr234 = [1, 2, 5, 9, 4, 13, 4, 10];
	foreach ($arr as $elem) {
		if ($elem == 4) {
			echo 'Есть!';
			break; //выйдем из цикла
		}
	}

for ($i=11;$i<=33;$i++){echo $i.'<br>';}           

$i=1;                                             
$sum=0;
while ($i<=100){
	$sum += $i;
	$i++;
	}
	

$sum1 = 0;                                      
$arr3 = [2, -5, -2, -9, 5, 15, 11, -7];
foreach ($arr3 as $elem) {
if ($elem > 0) {
	$sum1 += $elem;
}
}	

$num2=1000;                                             
$j=0;
while ($num2>=50){
	$num2=$num2/2;
	$j++;
}
echo $num2.'<br>';
echo $j;
	?>
 </body>
</html>