function doFirst(){

	var latlng = new google.maps.LatLng(24.968113,121.191549);
	var area = document.getElementById('map');
	//因為HTML裡我們有先宣告畫布大小（範圍）了
	var options = {
		zoom:14,
		center:latlng,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	//地圖資訊Options包含了center,zoom以及mapTypeId


	var map = new google.maps.Map(area,options);

	

}	
window.addEventListener('load',doFirst,false);