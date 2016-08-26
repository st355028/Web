function doFirst(){
	if(typeof window.print == 'function'){//判斷該瀏覽器是否有列印功能
		var printButton = document.createElement('button');
		printButton.innerText = 'Print';
		printButton.style.fontSize = 'x-large';
		printButton.addEventListener('click',function(){
			window.print();
		},false);

		document.body.insertBefore(printButton,document.getElementById('main'));
	}
}


window.addEventListener('load',doFirst,false);