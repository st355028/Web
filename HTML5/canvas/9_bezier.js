function doFirst(){
	var x = document.getElementById('canvas');//跟網頁取得連結
	var canvas = x.getContext('2d');//宣告他為2d環境

	canvas.lineWidth =5;
	canvas.strokeStyle = 'red';

	canvas.moveTo(200,350);
	canvas.bezierCurveTo(250,110,350,80,450,380);
	canvas.stroke();

	canvas.lineWidth = 1;
	canvas.strokeStyle = 'blue';
	canvas.moveTo(200,350);
	canvas.lineTo(250,110);
	canvas.lineTo(400,80);
	canvas.lineTo(450,380);
	canvas.stroke();



}


window.addEventListener('load',doFirst,false);