/**
 * 
 */
alert('массивы:');
var arr = [ 'a', 'b', 'c', 'd' ];
alert(arr[0] + '+' + arr[1] + ',' + arr[2] + '+' + arr[3]);
var arr2 = [ 2, 5, 3, 9 ];
var result = arr2[0] * arr2[1] + arr2[2] * arr2[3];
alert(result);
alert('объекты:');
var obj = {
	a : 1,
	b : 2,
	c : 3
};
alert(obj['c']);
alert(obj.c);
var obj2 = {
	Коля : '1000',
	Вася : '500',
	Петя : '200'
};
alert('зп Коли: ' + obj2['Коля']);
alert('зп Пети: ' + obj2['Петя']);
var obj3 = {
	1 : 'mon',
	2 : 'tue',
	3 : 'wed',
	4 : 'thu',
	5 : 'fri',
	6 : 'sat',
	7 : 'sun'
};
alert(obj3[2]);
var obj4 = {
	1 : 'пн',
	2 : 'вт',
	3 : 'ср',
	4 : 'чт',
	5 : 'пт',
	6 : 'сб',
	7 : 'вс'
};
var day = 2;
alert(obj4[day]);
alert('многомерные массивы:');
var dm = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
alert(dm[1][0]);
var obj5 = {
	js : [ 'jQuery', 'Angular' ],
	php : 'hello',
	css : 'world'
};
alert(obj5['js'][0]);
var dm2 = {
	'ru' : [ 'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс' ],
	'en' : [ 'mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn' ],
};
alert(dm2['ru'][0]);
alert(dm2['en'][2]);
var lang = 'en';
var day2 = 1;
alert(dm2[lang][day2]);