function doFirst(){
	document.getElementById('theForm').onsubmit=setEvent;
}

function setEvent(){
	
	var events = ['click','contextmenu','select','resize'];

	for(var i=0 ;i<events.length ;i++){
		var aaa = document.getElementById(events[i]);
		if(aaa.checked){
		document.addEventListener(events[i],report,false);}
		
	}


	document.getElementById('output').value = "";
	return false; 
}

function report(e){
	var message = e.target.nodeName+":"+e.type +"\n";
	document.getElementById('output').value += message;
}
window.addEventListener('load',doFirst,false);
