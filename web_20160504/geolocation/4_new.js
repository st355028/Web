function doFirst(){
	var latlng = new google.maps.LatLng(24.968113,121.191549);
	var area = document.getElementById('map');
	var options = {
		zoom: 14,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(area,options);
}
window.addEventListener('load',doFirst,false);