function doFirst(){
	var x = document.getElementById('canvas');//跟網頁取得連結
	var canvas = x.getContext('2d');//宣告他為2d環境

	var pic = new Image();//用圖檔要先讀進來再做聆聽事件
	pic.src = '../../images/washDrawing/007.JPG';
	pic.addEventListener('load',function(){
		canvas.drawImage(pic,0,0,x.width,x.height);
	},false);



}


window.addEventListener('load',doFirst,false);