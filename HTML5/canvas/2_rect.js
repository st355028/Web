function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');


	//canvas.fillRect(50,50,250,200);//(x座標,y座標,寬,高)
	canvas.rect(50,50,250,200);
	canvas.stroke();
	//canvas.clearRect(100,100,50,50);
}


window.addEventListener('load',doFirst,false);