/**
 * 
 */


function ff1() {
	var elem = document.getElementById('elem');
	alert(elem.clientTop);
	var elem1 = document.getElementById('elem1');
	alert(elem1.offsetWidth);
	var elem2 = document.getElementById('elem2');
	alert(elem2.clientHeight);
	alert(getComputedStyle(elem3).height + ' ' + getComputedStyle(elem3).width);
	alert(elem4.scrollTop);
	elem5.scrollTop = 100;
	alert(elem5.scrollHeight);
	var total_height = elem6.scrollHeight;
	var needed_height = total_height - 100;
	elem6.scrollTop = needed_height;
	alert(pageYOffset);
	window.scrollTo(0, document.body.clientHeight);
	var elem7 = document.getElementById('elem7');
	elem7.addEventListener('click', func);
	var startWidth = this.offsetWidth;
	var startHeight = this.offsetHeight;
	this.style.width = startWidth * 2 + 'px';
	this.style.height = startHeight * 2 + 'px';
}