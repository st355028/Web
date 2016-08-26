function doFirst(){
	//先與畫面產生關聯，再建事件聆聽的功能
	document.querySelector('p').onclick = talk;
}

function talk(){
	alert('hi~');
}
window.addEventListener('load',doFirst,false);
//window.onload = doFirst; 與上面寫法相同