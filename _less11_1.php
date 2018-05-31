<html>
 </head> 
   <meta charset="utf-8">
  <title>PHP</title>
 </head>
 <body>
  <?php

echo mktime(0, 0, 0, 3, 1, 2025);

echo time() - mktime(13, 12, 59, 3, 15, 2000);

echo date('Y.m.d H:i:s');

$month = [
		1=>'янв', 'фев', 'мар', 'апр', 'май', 'июнь',
		'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'
	];
	echo $month[date('n')];

<form action="" method="GET">
	<input type="text" name="date">
	<input type="submit">
</form>

<?php
	if (isset($_REQUEST['date'])) {
		$date = explode('-', $_REQUEST['date']);
		$month = [
			1=>'янв', 'фев', 'мар', 'апр', 'май', 'июнь',
			'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'
		];
		echo $month[date('n',  mktime(0, 0, 0, $date[1], $date[2], $date[0]))];
	}
?>

?>
 </body>
</html>