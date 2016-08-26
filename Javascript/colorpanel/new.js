function showRGB(e){
	var color = document.getElementById('color').value;
	document.getElementById('rgb').value = color;

	alert(e.target);
	alert(e.type);

}

