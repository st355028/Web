function doFirst(){
	//list DataType is Array
	var list = document.querySelectorAll('p');
	for(var i=0; i<list.length ;i++){
		list[i].onclick = talk;
	}
	
}

function talk(){
	alert('hi~');
}
window.addEventListener('load',doFirst,false);
//window.onload = doFirst; 與上面寫法相同