function doFirst(){
	var x = document.getElementById('canvas');//跟網頁取得連結
	canvas = x.getContext('2d');//var 拿掉就變全域變數

	canvas.lineWidth =5;
	canvas.strokeStyle = 'red';
	document.addEventListener('mousemove',usePen,false)
	



}

function usePen(evt){
	canvas.fillRect(evt.pageX,evt.pageY,10,10);
}
window.addEventListener('load',doFirst,false);