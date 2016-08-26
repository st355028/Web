function doFirst(){
	navigator.geolocation.getCurrentPosition(succCallback);
}

function succCallback(event){
	var lati = event.coords.latitude;
	var longi = event.coords.longitude;

	document.getElementById('position').innerHTML = 'Latitude: '+lati+'<br>Longitude: '+longi;

	var latlng = new google.maps.LatLng(lati,longi);
	var area = document.getElementById('map');
	var options = {
		zoom: 14,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(area,options);
	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		icon: '../../images/number/dgt0.gif'
	});
}
window.addEventListener('load',doFirst,false);