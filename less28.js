/**
 * 
 */

var ul = document.getElementById('ul');

ul.addEventListener('click', addSign);
function addSign() {
	event.target.innerHTML = event.target.innerHTML + '!';
}

//Реализация кнопочки добавления новой li:
var button = document.getElementById('button');
button.addEventListener('click', addLi);
function addLi() {
	var li = document.createElement('li');
	li.innerHTML = 'новая li';
	ul.appendChild(li);
}