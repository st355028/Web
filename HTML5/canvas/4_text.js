function doFirst(){
	var x = document.getElementById('canvas');//跟網頁取得連結
	var canvas = x.getContext('2d');//宣告他為2d環境

	//shadow
	/*canvas.shadowOffsetX = 5;
	canvas.shadowOffsetY = 5;
	canvas.shadowColor = 'rgba(0,0,255,0.6)';
	canvas.shadowBlur = 3;*/

	canvas.shadowOffsetX = -2;
	canvas.shadowOffsetY = -2;
	canvas.shadowColor = 'rgb(0,0,0)';
	canvas.shadowBlur = 4;




	canvas.fillStyle = 'pink';
	canvas.strokestyle = 'blue';
	// canvas.textBaseline = 'bottom'; //先在字出來前宣告
	canvas.font = 'bold 40px Comic Sans MS'
	canvas.fillText('MinYeh is handsome boy',100,100);





	// canvas.moveTo(100,100);
	// canvas.lineTo(570,100);
	// canvas.stroke();
}


window.addEventListener('load',doFirst,false);