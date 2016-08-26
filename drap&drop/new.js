function doFirst(){

	witch = document.getElementById('witch');
	witch.addEventListener('dragstart',startDrag,false);
	witch.addEventListener('dragend',endDrag,false);
	leftbox = document.getElementById('leftbox');
	//leftbox.addEventListener('dragenter',function(e){e.preventDefault();},false); 不一定要有
	leftbox.addEventListener('dragover',function(e){e.preventDefault();},false);
	leftbox.addEventListener('drop',dropped,false);

	leftbox.addEventListener('dragleave',function(e){
		e.preventDefault();
		leftbox.style.border = '10px solid red';
	},false);
	

	// function(){} 匿名函數

}


function startDrag(e){
	var data = '<img src="../images/witch.jpg">';
	e.dataTransfer.setData('image/JPEG',data);
}

function endDrag(){
	witch.style.visibility = 'hidden';
}

function dropped(e){
	e.preventDefault();
	leftbox.innerHTML = e.dataTransfer.getData('image/JPEG');
}

window.addEventListener('load',doFirst,false);