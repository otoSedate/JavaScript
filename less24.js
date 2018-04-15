/**
 * 
 */
function ff1() {
	var elem = document.getElementById('elem');
	elem.classList.toggle('www');
}
function ff2() {
	var elem2 = document.getElementById('elem2');
	for (var i = 0; i < elem2.classList.length; i++) {
		alert(elem2.classList[i]);
	}
}

function ff3() {
	var elem3 = document.getElementById('elem3');
	elem3.style.cssText = 'color: red; font-size: 30px; border: solid 1px black;';
}

function ff4() {
	var elem4 = document.getElementById('elem4');
	alert(elem4.tagName);
}

function ff5() {
	var elem4 = document.getElementById('elem4');
	alert(elem4.tagName.toLowerCase());
}

function ff6() {
	var ol = document.getElementById('ol');
	var li = document.createElement('li');
	li.innerHTML = 'пункт';
	elem.appendChild(li);
}

function ff7() {
	var ul = document.getElementById('ul7');
	var test = document.getElementById('elem7');

	var li = document.createElement('li');
	li.innerHTML = '!!!';

	ul.insertBefore(li, test);
}

function ff89() {
	var elem = document.getElementById('elem8');
	elem.insertAdjacentHTML('beforeBegin', '<span>!!!</span>');

	var elem = document.getElementById('elem9');
	elem.insertAdjacentHTML('beforeEnd', '<span>!!!</span>');

	var elem = document.getElementById('elem10');
	elem.firstElementChild.style.color = 'red'; 
	
	var elem = document.getElementById('elem11');
	for (var i = 0; i < elem.children.length; i++) {
		elem.children[i].innerHTML += ' !';
	}
	var elem = document.getElementById('elem12');
	var prev = elem.previousElementSibling;
	prev.innerHTML = prev.innerHTML + '!';
	
	var elem = document.getElementById('elem13');
	var prev = elem.nextElementSibling.nextElementSibling;
	prev.innerHTML = prev.innerHTML + '!';
	
	var elem = document.getElementById('elem14');
	elem.parentElement.parentElement.style.color = 'red';
	
	var parent = document.getElementById('parent');
	parent.removeChild(parent.lastElementChild);
	
	var parent = button.parentElement;
	var newInput = document.createElement('input');
	parent.appendChild(newInput);
}
