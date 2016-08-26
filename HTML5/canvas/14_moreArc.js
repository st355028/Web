function doFirst(){
	var x = document.getElementById('canvas');//跟網頁取得連結
	var canvas = x.getContext('2d');//var 拿掉就變全域變數

	canvas.lineWidth = 5;
	canvas.strokeStyle = 'red';
	

	canvas.arc(150,150,120,0,2*Math.PI,false);
	canvas.stroke();


	canvas.lineWidth = 1;
	canvas.strokeStyle = 'blue';


	canvas.beginPath();
	canvas.translate(150,150); //把座標150,150當成0,0

	canvas.beginPath();
	canvas.moveTo(0,0);
	canvas.lineTo(0,-105);
	canvas.stroke();

	


	

}


window.addEventListener('load',doFirst,false);