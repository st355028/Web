function doFirst(){
	var x = document.getElementById('canvas');//跟網頁取得連結
	var canvas = x.getContext('2d');//var 拿掉就變全域變數

	canvas.lineWidth = 15;
	canvas.strokeStyle = 'red';
	

	canvas.lineCap = 'butt';
	canvas.moveTo(50,50);
	canvas.lineTo(300,50);
	canvas.stroke();

	canvas.beginPath();
	canvas.lineCap = 'round';
	canvas.moveTo(50,100);
	canvas.lineTo(300,100);
	canvas.stroke();

	canvas.beginPath();
	canvas.lineCap = 'square';
	canvas.moveTo(50,150);
	canvas.lineTo(300,150);
	canvas.stroke();

	canvas.lineWidth = 15;
	canvas.strokeStyle = 'green';	


	canvas.lineJoin='miter';
	canvas.strokeRect(100,250,100,200);

	canvas.lineJoin='round';
	canvas.strokeRect(250,250,100,200);

	canvas.lineJoin='bevel';
	canvas.strokeRect(400,250,100,200);


	

}


window.addEventListener('load',doFirst,false);