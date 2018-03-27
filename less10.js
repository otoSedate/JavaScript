function quad(num) {
	return num * num
}

function sum(num1, num2) {
	return num1 + num2
}

function mathEX(a, b, c) {
	return (a - b) / 3
}

function week(day) {
	var days = {
		1 : 'monday',
		2 : 'tuesday',
		3 : 'wednessday',
		4 : 'thusday',
		5 : 'friday',
		6 : 'saturday',
		7 : 'sunday'
	};
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	;
	numRandom = getRandomInt(1, 7);
	alert(days[numRandom]);
};

week();
