/**
 * lesson 11
 */

var arr2 = [ 1, 2, 3, 4, 5, 6, 7 ];
var flags = true;

function inArr(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 5) {
			return true
		}
	}
	return false
};
alert(inArr(arr2));

//

var num = 31;
var flag = false;
for (var i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = true;
		break;
	}
}

if (flag == true) {
	alert('true');
} else {
	alert('false');
}

//

var mas = [ 1, 2, 3, 5, 3, 3, 5, 6 ];
var flacC = true;
for (var i = 1; i < mas.length; i++) {
	if ((mas[i] == mas[i - 1]) || (mas[i] == mas[i + 1])) {
		flacC = false
		break;
	}
};

if (flacC == false) {
	alert('есть одинаковые элементы, идущие подряд');
} else {
	alert('одинаковых элементов, идущих подряд, нет')
};

/**
 * lesson12
 */

function sr(aa, bb) {
	return (aa == bb)
};

document.write(sr(23, 354) + '<br>');
document.write(sr(33, 33) + '<br>');

//

function func2(a2, b2) {
	return a2 + b2 > 10;
}

alert(func2(3, 6));

//

function func34(num) {
	return num < 0;
}

alert(func34(10));

/**
 * lesson13
 */

var str3 = '';
for (var i = 1; i <= 9; i++) {
	str3 = str3 + i;
};

document.write(str3 + '<br>');

var str4 = '-';
for (var i = 1; i <= 9; i++) {
	str4 += i + '-';
};

document.write(str4 + '<br>');

var str544 = '';
for (var i = 0; i <= 20; i++) {
	str544 = str544 + 'x';
	document.write(str544 + '<br>');
};

for (var i = 1; i <= 9; i++) {
	for (var j = 1; j <= i; j++) {
		document.write(i)
	}
	document.write('<br>')
};

var str545 = '';
for (var i = 0; i <= 5; i++) {
	str545 = str545 + 'xx';
	document.write(str545 + '<br>');
};

/**
 * lesson14
 */

var ark = [];
var stg = '';
for (var i = 0; i < 10; i++) {
	stg = stg + 'x';
	ark.push(stg);
};
console.log(ark);
document.write(ark + '<br>');

function arrayFill(value, length) {
	var arrnew = [];
	for (var i = 0; i < length; i++) {
		arrnew.push(value);
	}
	return arrnew;
};

console.log(arrayFill('x', 5));
rnk = arrayFill('x', 5)
document.write(rnk + '<br>');

var gazo = [ 1, 2, 3, 4, 5 ];
var renk = [];
for (var i = gazo.length - 1; i >= 0; i--) {
	renk.push(gazo[i]);
};
console.log(renk);
document.write(renk + '<br>');

var d22 = [ [ 1, 2, 3 ], [ 4, 5 ], [ 6 ] ];
summex = 0
for (var i = 0; i < d22.length; i++) {
	for (var j = 0; j < d22[i].length; j++) {
		summex += d22[i][j]
	}
};

document.write('summa = ' + summex + '<br>');

//