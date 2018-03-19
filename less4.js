var a = 0;
if (a == 0) {
	alert('Верно');
} else {
	alert('Неверно');
};
var a1 = 1;
if (a < 0) {
	alert('Верно');
} else {
	alert('Неверно');
};
var a2 = -3;
if (a <= 0) {
	alert('Верно');
} else {
	alert('Неверно');
};
var a3 = '1';
if (a3 === '1') {
	alert('Верно');
} else {
	alert('Неверно');
};
var test = 'true';
if (test == 'true') {
	alert('Верно');
} else {
	alert('Неверно');
};
var b = 2;
if (b > 0 && b < 5) {
	alert('Верно');
} else {
	alert('Неверно');
};
var c = 3;
var d = 5;
if (c <= 1 && d >= 3) {
	alert('sum=' + (c + d));
} else {
	alert('razn=' + (c - d));
};
alert('!!switch-task:');
var num;
num = prompt('write num 1-4', '');
switch (num) {
case '1':
	alert('winter');
	break;
case '2':
	alert('spring');
	break;
case '3':
	alert('summer');
	break;
case '4':
	alert('autumn');
	break;
};
var month = 1;
if (month >= 3 && month < 6) {
	alert('spring');
} else if (month >= 6 && month < 9) {
	alert('summer');
} else if (month >= 9 && month < 12) {
	alert('autumn');
} else if (month = 12 || month < 3) {
	alert('winter');
};

var str = '12345';
if (str[0] == '1' || str[0] == '2' || str[0] == '3') {
	alert('Да');
} else {
	alert('Нет');
};
var str2 = '777';
var sum22 = Number(str2[0]) + Number(str2[1]) + Number(str2[2]);
alert('summa = ' + sum22);