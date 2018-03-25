var a = 10;
var b = 3;
alert(a % b);

var st;
st = Math.pow(2, 10);
document.write(st + '<br>');

var kor;
kor = Math.sqrt(245);
document.write(kor + '<br>');

var arr = [ 4, 2, 5, 19, 13, 0, 10 ];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	sum += Math.pow(arr[i], 3);
};
document.write('summa = ' + Math.sqrt(sum) + '<br>');

alert(Math.sqrt(379).toFixed(0));
alert(Math.sqrt(379).toFixed(1));
alert(Math.sqrt(379).toFixed(2));

document.write('min: ' + Math.min(4, -2, 5, 19, -130, 0, 10) + '<br>');
document.write('max: ' + Math.max(4, -2, 5, 19, -130, 0, 10) + '<br>');

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.write(getRandomInt(10, 100) + '<br>');

var c = 33;
var d = 435;
document.write(Math.abs(c - d) + '<br>');

var fact = 1;
var num = 4;
for (var i = 1; i <= num; i++) {
	fact = fact * i;
}
alert(fact);
