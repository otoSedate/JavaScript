/**
 * 
 */

var date = new Date();
alert(date.getDate());

var date1 = new Date();
alert(date1.getFullYear());

var date2 = new Date();
alert(date2.getDay());

var date3 = new Date();
var day = date3.getDay();

function showDay(day) {
	var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	return days[day];
}

alert(showDay(day));

var date4 = new Date();
var minute = Math.floor(date4.getTime() / (1000 * 60));
alert(minute);

var date5 = new Date();
var now = new Date(date5.getFullYear(), date5.getMonth(), date5.getDate(), 0, 0, 0);
var result = Math.floor((date5.getTime() - now.getTime()) / 1000);
alert(result);
