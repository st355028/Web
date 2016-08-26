function doFirst(){
	var x = document.getElementById('canvas');//跟網頁取得連結
	var canvas = x.getContext('2d');//宣告他為2d環境

	canvas.moveTo(50,50);
	canvas.lineTo(150,200);
	canvas.lineTo(150,50);
	canvas.lineTo(250,300);
	canvas.closePath();

	canvas.stroke();
}


window.addEventListener('load',doFirst,false);