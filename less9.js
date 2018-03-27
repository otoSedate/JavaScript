/**
 * + '<br>'
 */
document.write('n1' + '<br>');
var str = 'just Java script';
str = str[0].toUpperCase() + str.substr(1);
document.write(str + '<br>');

var str2 = 'just';
str2 = str2.split('');
str2[0] = str[0].toUpperCase();
var res = str2.join('');
document.write(res + '<br>');

var str3 = '123456';
newstr3 = str3.split('').reverse().join('');
document.write(newstr3 + '<br>');

var str4 = '3751';
newstr4 = str4.split('').sort().join('');
document.write(newstr4 + '<br>');

var str5 = 'http://934857938457';
ts = str5.substr(0, 7);
if (ts == 'http://') {
	document.write('True' + '<br>')
} else {
	document.write('False' + '<br>')
};

/*
 * alternate var str = 'http://phphtml';
 * if (str.substr(0, 7) == 'http://') {
 * alert('Да'); }
 * else { alert('Нет'); }
 */

var str6 = 'http://934857938457.html';
ts = str6.substr(-5, 5);
if (ts == '.html') {
	document.write('True' + '<br>')
} else {
	document.write('False' + '<br>')
};

/*
 * alternate var str = 'index.html'; 
 * if (str.substr(-5) == '.html') {
 * alert('Да'); }
 * else { alert('Нет'); }
 */
