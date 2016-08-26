var file;
var fileReader;

function doFirst(){
	document.getElementById('dropZone').ondragover = dragOver;
	document.getElementById('dropZone').ondrop = dropped;
}
function dragOver(e){
	e.preventDefault();
}
function dropped(e){
	e.preventDefault();
	file = e.dataTransfer.files[0];

	document.getElementById('fileName').innerHTML = file.name;

	fileReader = new FileReader();
	fileReader.readAsText(file);
	fileReader.onload = function(){
		document.getElementById('fileContent').value = fileReader.result;
	};
}





// function fileChange(){
// 	file = document.getElementById('myFile').files[0];
// 	var message = 'File Name : ' + file.name + '\n';
// 	message += 'File Size : ' + file.size + ' byte(s)\n';
// 	message += 'File Type : ' + file.type + ' \n';
// 	message += 'Last Modified : ' + file.lastModifiedDate + ' \n';

// 	document.getElementById('fileInfo').value = message;

// 	fileReader = new FileReader();
// 	fileReader.onload = function(){
// 		document.getElementById('fileContent').value = fileReader.result;
// 	};

// }
// function readFile(){
// 	fileReader.readAsText(file);
// }
window.addEventListener('load',doFirst,false);