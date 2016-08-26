function doFirst(){
	var x = document.getElementById('canvas');//跟網頁取得連結
	var canvas = x.getContext('2d');//var 拿掉就變全域變數

	


	var gradient = canvas.createRadialGradient(50,50,20,225,200,100);
	gradient.addColorStop(0,'yellow');
	gradient.addColorStop(1,'orange');
	gradient.addColorStop(0.5,'steelblue');



	canvas.fillStyle = gradient;
	canvas.fillRect(50,50,350,300);
	

}


window.addEventListener('load',doFirst,false);