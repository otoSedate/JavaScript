<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
   <?php

$str='';
for ($i=1;$i<=9;$i++){
	$str.=$i;
}
echo $str;

$str1='-';
for ($i=1;$i<=9;$i++){
	$str1.=$i.'-';
}
echo $str1;

for ($i=1;$i<=9;$i++){
	$str1='';
	for ($j=0;$j<=$i;$j++){
	    $str1.=$i;}
	echo $str1.'<br>';	
}
?>
 </body>
</html>