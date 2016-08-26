function doFirst(){
	var x = document.getElementById('canvas');//跟網頁取得連結
	var canvas = x.getContext('2d');//宣告他為2d環境

	canvas.lineWidth =5;
	canvas.strokeStyle = 'red';

	canvas.arc(150,150,80,0,Math.PI,false);
	canvas.stroke();

	canvas.beginPath();
	canvas.arc(400,150,80,0,Math.PI,true);
	canvas.stroke();

	canvas.beginPath();
	canvas.arc(150,400,80,0,2*Math.PI,true);
	canvas.stroke();

	canvas.beginPath();
	canvas.arc(400,400,80,0.3*Math.PI,1.2*Math.PI,true);
	canvas.stroke();



}


window.addEventListener('load',doFirst,false);