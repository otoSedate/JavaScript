
function func() {
	var btn = document.querySelector('button');
	//btn.addEventListener('click', toSort);
	var items = document.querySelectorAll('li');
	var itemsArr = [];
	for (var i = 0; i < items.length; i++) {
		itemsArr[i] = items[i].innerHTML;
	}

	itemsArr.sort(function(a,b){return a-b});
	for (var i = 0; i < items.length; i++){
		items[i].innerHTML = itemsArr[i];
	}
	
	var country = document.querySelectorAll('p');
	for(var i = 0; i < country.length; i++) {
		country[i].addEventListener('click', show);
	}

	function show() {
		this.nextElementSibling.style.display = 'block';
		this.removeEventListener('click', show);
		this.addEventListener('click', hide);
	}

	function hide(){
		this.nextElementSibling.style.display = 'none';
		this.removeEventListener('click', hide);
		this.addEventListener('click', show);
	}
	
	var elems = document.getElementsByTagName('td');
	var trigger = document.querySelector('button');
	trigger.addEventListener('click', func);
	var max ='';
	var n = 0;

	for (var i = 0; i < elems.length; i++) {
		if (+elems[i].innerHTML > max) {
			max = +elems[i].innerHTML;
			n = i;
		}
	}
	elems[n].style.background = 'red';
	
	var btn = document.querySelector('button');
	btn.addEventListener('click', func);
	var elems = document.getElementsByTagName('div');
	var str = '';

	for(var i = 0; i < elems.length; i++) {
		str = elems[i].innerHTML.slice(0, 10)+'...';
		elems[i].innerHTML = str;
	}
	
	var inp = document.querySelector('input');
	var parag = document.querySelector('p');
	inp.addEventListener('keypress', func);

	if (event.which == 13) {
	parag.innerHTML += inp.value + ',';
	inp.value = '';
	};
	
}  ; 

var input = document.getElementsByTagName('input');
for (var i = 0; i < input.length; i++) {
	input[i].addEventListener('change', func1);
}
var p = document.getElementById('text1');

function func1() {
	if (this.checked) {
		p.style.cssText = this.value;
	} else {
		p.style.cssText = 'none';
	}
}