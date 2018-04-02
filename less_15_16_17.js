/**
 * lesson 15
 */

function isNumberInRange(num) {
	if (num > 0 && num < 10) {
		return true;
	} else {
		return false;
	}
}

var arr = [ 1, 3, 5, 6, 9, 11, 15, 30 ];
var result = [];
for (var i = 0; i < arr.length; i++) {
	if (isNumberInRange(arr[i])) {
		result.push(arr[i]);
	}
}

document.write(result + '<br>');

function isEven(num2) {
	if (num2 % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

var arr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var result2 = [];
for (var i = 0; i < arr2.length; i++) {
	if (isEven(arr2[i])) {
		result2.push(arr2[i]);
	}
}

document.write(result2 + '<br>');

/**
 * lesson 16
 */

var str = 'abcde abcde abcde';
var newArr = [];

function ucfirst(str) {
	return str[0].toUpperCase() + str.substr(1);
}

var arr3 = str.split(' ');
for (var i = 0; i < arr3.length; i++) {
	newArr.push(ucfirst(arr3[i]));
}

var newStr = newArr.join(' ');
document.write(newStr + '<br>');

//

var str4 = 'var_text_hello';
var newstr4 = str4.replace(/_/g, ' ');
var narr = [];
var arr4 = newstr4.split(' ');
for (var i = 0; i < arr4.length; i++) {
	narr.push(ucfirst(arr4[i]));
}

newstr4 = narr.join(' ');
document.write(newstr4 + '<br>');

//

function inArray(elem, mass) {
	var flags = false;
	for (k = 0; k <= mass.length; k++) {
		if (elem === mass[k]) {
			flags = true
		}
	}
	return flags
}

document.write(inArray('hell', [ 'nice', 'dbd', 'func', 'hell' ]) + '<br>');

/**
 * lesson 17
 */

function rekurs(massiv) {
	massVict = massiv;
	document.write(massVict[0]);
	massVict.splice(0, 1);
	if (massVict.length > 0) {
		rekurs(massVict)
	}
}

rekurs([1,4,6,3,6,4]);

//
/*
function sm(tnum) {
	summa = 0;
	for (k = 0; k <= tnum.length;  k++) {
		summa += Number(tnum[k])
	}
	return summa
}
*/

function rek(numb) {
	var summa = 0;
	for (k = 0; k <= numb.length; k++) {
		summa = summa + Number(numb[k])
	};
	if (summa > 9) {
		rek(numb)
	}
	return summa
}

document.write(rek(123546));