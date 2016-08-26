function doFirst(){
	if(navigator.geolocation)
		navigator.geolocation.getCurrentPosition(succCallback,errorCallback,{
			enableHighAccuracy:false,
			timeout:1
		});

}

function succCallback(event){
	
	var lati = e.coords.latitude;
	var longi = e.coords.longitude;
	document.getElementById('position').innerHTML = 
	'latitude:'+lati+'<br>longitude:'+longi;
}


function errorCallback(event){
	document.getElementById('position').innerHTML = 'code' + event.code +'<br>Message: '+event.message;
}
window.addEventListener('load',doFirst,false);