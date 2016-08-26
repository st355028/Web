file;
fileReader;
function doFirst(){
	document.getElementById('myFile').onchange = fileChange;
	document.getElementById('openButton').onclick = readFile;
}

function fileChange(){
	file =  document.getElementById('myFile').files[0];
	var message = 'File Name  : '+file.name + '\n';
	message += 'File Size  : '+file.size + 'byte(s)\n';
	message += 'File type  : '+file.type + '\n';
	message += 'Last Modifiled  : '+file.lastModifiedDate + '\n';
	document.getElementById('fileInfo').value = message;


	fileReader = new fileReader();
	fileReader.onload = function(){
		document.getElementById('fileContent').value = fileReader.result;
	};
}

function readFile(){
	fileReader.readAsText(file);

}

window.addEventListener('load',doFirst,false);