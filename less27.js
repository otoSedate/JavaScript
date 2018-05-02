/**
 * 
 */
window.addEventListener('mousemove', go);
function go(event) {
	document.getElementById('show').innerHTML = 'X:'+event.clientX+' Y:'+event.clientY;
}