var i = 1;
while (i <= 100) {
	document.write(i + '<br>');
	i += 1;
};

for (var i = 0; i <= 100; i += 2) {
	document.write(i + '<br>');
};

var arr = [ 1, 2, 3, 4, 5 ];
for (var i = 0; i < arr.length; i++) {
	alert(arr[i]);
};

var arr = [ 1, 2, 3, 4, 5 ];
for (var i = 0, result = 0; i < arr.length; i++) {
	result = result + arr[i];
};
alert('result = ' + result);

var obj = {
	green : 'зеленый',
	red : 'красный',
	blue : 'голубой'
};
for (key in obj) {
	alert(key + ' ' + obj[key]);
};

document.write('<br>');
var arr1 = [ 2, 5, 9, 15, 0, 4 ];
for (var j = 0; j < arr1.length; j++) {
	if (arr1[j] > 3 && arr1[j] < 10) {
		document.write(arr1[j] + '<br>');
	}
	;
};

var arr2 = [ '10', '20', '30', '50', '235', '3000' ];
for (var i = 0; i < arr2.length; i++) {
	if (arr2[i][0] == '1' || arr2[i][0] == '2' || arr2[i][0] == '5') {
		alert(arr2[i]);
	}
};

var arr3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
str = '';
for (var k = 0; k < arr3.length; k++) {
	str += '-' + arr3[k];
};
document.write(str + '-');

for (var n = 1000, num = 0; n > 50; n /= 2, num++);
alert(n);
alert(num);