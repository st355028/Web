function doFirst(){
	barSize = 592;//你的defaultBar寬度

	//先跟html畫面產生關聯
	myMovie = document.getElementById('myMovie');
	playButton = document.getElementById('playButton');
	defaultBar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');

	//再建事件聆聽功能
	playButton.addEventListener('click',playOrPause,false);
	defaultBar.addEventListener('click',clicked,false);
	myMovie.addEventListener('click',playOrPause,false);
}

function playOrPause(){
	//如果影片正在跑的時候，按按鈕會停
	if(!myMovie.paused && !myMovie.ended){
		myMovie.pause();
		playButton.innerHTML = 'Play';
	}
	else{ //影片暫存中或影片結束了
		myMovie.play();
		playButton.innerHTML = 'Pause';
		setInterval(update,500);
		}
}
function update(){
	if(!myMovie.ended){
		var size = barSize / myMovie.duration * myMovie.currentTime;
		progressBar.style.width = size + 'px';
	}
	else{
		progressBar.style.width = '0px';
		playButton.innerHTML = 'Play';
	}
}
function clicked(e){
	var mouseX = e.clientX - defaultBar.offsetLeft;
	var newTime = mouseX / (barSize / myMovie.duration);
	myMovie.currentTime = newTime;
	progressBar.style.width = mouseX.x + 'px';
}

window.addEventListener('load',doFirst,false);