function doFirst(){
	barSize = 552;//讀取條的總長度

	//建立各事件與文件的聯結
	myMovie = document.getElementById('myMovie');
	playButton = document.getElementById('playButton');
	stopButton = document.getElementById('stopButton');
	voiceUpButton = document.getElementById('voiceUpButton');
	voiceDownButton = document.getElementById('voiceDownButton');
	mutueButton = document.getElementById('mutueButton');
	defaultBar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');
	//建立各事件的事件動作
	playButton.addEventListener('click',playOrPause,false);
	defaultBar.addEventListener('click',clicked,false);
	stopButton.addEventListener('click',stopVideo,false);
	voiceUpButton.addEventListener('click',voiceUp,false);
	voiceDownButton.addEventListener('click',voiceDown,false);
	mutueButton.addEventListener('click',mute,false);

}

function playOrPause(){
	if(!myMovie.ended && !myMovie.paused){
		myMovie.pause(); //假如影片狀態不是“結束“ 及 “暫停”，那把影片的狀態設成暫停
		playButton.innerHTML = 'Play';}
	else{
		myMovie.play();
		playButton.innerHTML = 'Pause';
		setInterval(update,500);}} //播放狀態下以每500毫秒更新讀取條的狀態

function update(){
	if(!myMovie.ended)
	{
		var size = barSize/myMovie.duration * myMovie.currentTime;
		//(讀取條長度/影片總時間)＊目前播放時間 ＝ 讀取條的正確長度
		progressBar.style.width = size + 'px';
	}
	else{
		progressBar.style.width = '0px'
		playButton.innerHTML = 'Play';
	}
}

function clicked(e){
	var mouseX = e.pageX - defaultBar.offsetLeft;
	//滑鼠移到的x座標減去defaultBar左側距離頁面的距離 ＝ 讀取條的起點到你指定位置的距離
	var newTime = mouseX / (barSize / myMovie.duration);
	//讀取條的起點到你指定位置的長度除以影片每秒可以播放的長度＝你點的位置時間
	myMovie.currentTime = newTime;
	progressBar.style.width = mouseX+'px';//把讀取條長度設定到滑鼠點下去的位置
}

function stopVideo(){
	//如果按停止鈕 讀取條應該是歸零且暫停播放的狀態
	progressBar.style.width = '0px'; //把讀取條歸零
	myMovie.currentTime = 0; //把影片時間歸零
	myMovie.pause(); //影片暫停
	playButton.innerHTML = 'Play'; //把play按鈕狀態改成play
}

 function voiceUp(){
	if(myMovie.volume<1)
		myMovie.volume = myMovie.volume + 0.2;
}

function voiceDown(){
	//假設音量大於0.2（設成>0 是如果預設值<0.2的話減下去會超出範圍值）
	if(myMovie.volume>0.2)
		myMovie.volume = myMovie.volume - 0.2;
}


function mute(){
//偵測影片的靜音是否為true或false，再給他們相反值才可以重複開啟或關閉
	if(myMovie.muted)
		myMovie.muted=false;
	else
		myMovie.muted=true;
}


window.addEventListener('load',doFirst,false);