function doFirst(){
		navigator.geolocation.getCurrentPosition(succCallback);
		//navigator 為內建字而裡面有個屬性是geolocation，這段在說成功時呼叫succCallback這個方法

}

function succCallback(event){
	
	// var lati = event.coords.latitude;
	// var longi = event.coords.longitude;
	// document.getElementById('position').innerHTML = 'latitude:'+lati+'<br>longitude:'+longi;

	var lati = event.coords.latitude;
	var longi = event.coords.longitude;
	document.getElementById('position').innerHTML = "緯度 : " + lati + "\n經度 : " + longi; 

	// var latlng = new google.maps.LatLng(lati,longi);
	// var area = document.getElementById('map');
	// var options = {
	// 	zoom:14,
	// 	center:latlng,
	// 	mapTypeId:google.maps.MapTypeId.ROADMAP
	// };

	var latlng = new google.maps.LatLng(lati,longi);
	var area = document.getElementById('map');
	var options = {
		zoom:14,
		center:latlng,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};


	var map = new google.maps.Map(area,options);
	var marker = new google.maps.Marker({
		position:latlng,
		map:map,
		icon:'../../images/number/dgt0.gif'
	})
	//設定一個marker需要的資訊有position(要顯示的地理位置) map(載入你新增的地圖) icon(要更換的圖案)
}



window.addEventListener('load',doFirst,false);