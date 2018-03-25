/*
 + '<br>'
 */
var str = 'js';
alert(str.toUpperCase());

var str2 = 'JS';
alert(str2.toLowerCase());

var str3 = 'я учу javascript!';
document.write('длина = ' + str3.length + '<br>');

var str4 = 'я учу javascript!';
document.write(str4.substr(1, 4) + '<br>');

var str5 = 'я учу javascript!';
document.write(str5.substring(2, 5) + '<br>');

var str6 = 'я учу javascript!';
document.write(str6.slice(2, 5) + '<br>');

var str7 = 'Я учу учу Javascript';
document.write(str7.indexOf('учу') + '<br>');

var str8 = 'Я-учу-javascript!';
var newStr = str8.replace(/-/g, '!');
document.write(newStr + '<br>');

var st = 'я учу javascript!';
var arr = st.split(' ');
document.write(arr + '<br>');

var st1 = 'я учу javascript!';
var arr2 = st1.split('');
document.write(arr2 + '<br>');

var arr3 = [ 'я', 'учу', 'javascript', '!' ];
document.write(arr3.join('+') + '<br>');

var str55 = 'я учу javascript!';
var first = str55.slice(0, 1).toUpperCase() + str55.slice(1);
alert(first);