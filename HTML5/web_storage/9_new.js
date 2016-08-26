var storage = sessionStorage;

function doFirst(){
	//此段在檢查storage裡有沒有值，addItemList為自行設定的變數
	if(storage['addItemList']==null)
		storage['addItemList'] = '';

	//先幫每個Add Cart按鈕，建事件聆聽功能
	//Spans是陣列的型態
	//var spans = document.querySelectorAll('.addButton');
	//for(var i=0;i<spans.length;i++){
	//	spans[i].addEventListener('click',function(){
	//		var teddyInfo = document.querySelector('#'+this.id+' input' ).value;
	//		//動態使用找尋子孫選擇器
	//		addItem(this.id,teddyInfo);
	//	},false);
	//}

    var spans = document.querySelectorAll('.addbutton');
    for(var i=0;i<spans.length;i++)
        spans.addEventListener('click',function(){
            var teddyInfo = document.querySelector('#'+this.id+' input').value;
            addItem(this.id,teddyInfo);
        },false);
}

function addItem(itemId,itemValue){
	//alert(itemId + ' ' + itemValue + '');
	var newItem = document.getElementById('newItem');

	//抓取img資訊
	var img = document.createElement('img');
	img.src = 'imgs/'+itemValue.split('|')[1];
	//itemValue.split('|')[1];  .split('|')是把字串裡的｜當成拆開符號拆成好幾個字串
	img.id = 'itemImageSelect'
	

	//抓取title資訊
	var title = document.createElement('span'); //建立在誰（span）之下
	title.innerText = itemValue.split('|')[0];
	title.id = 'titleSelect'; 
	//抓取price資訊
	var price = document.createElement('span');
	price.innerText = '$' + itemValue.split('|')[2];
	price.id = 'priceSelect'; 


	//先判斷此處是否已有物件，如果有先刪除，此處用while是因為他要重複判斷，因為有三個孩子要判斷
	while(newItem.childNodes.length >= 1)
	{
		newItem.removeChild(newItem.firstChild);
	}



	//在顯示新物件
	newItem.appendChild(img);
	newItem.appendChild(title);
	newItem.appendChild(price);

	//在寫入storage中

	if(storage[itemId]){
		alert("買過啦 別鬧了")
	}
		else{
			storage[itemId] = itemValue;
			storage['addItemList'] += itemId + ', ';
		}

	//計算夠買數量和小記

	var itemString = storage.getItem('addItemList');
	var items = itemString.substr(0,itemString.length-2).split(', ');
    //substr（從哪開始，到哪結束）

	var subtotal = 0;
	for(var key in items){
		var itemInfo = storage[items[key]];   // 用法 items[key]
		var sprice = parseInt(itemInfo.split('|')[2]);
		//paseInt字串轉數值
		subtotal += sprice;
	}

	document.getElementById('itemCount').innerHTML = items.length;
	document.getElementById('subtotal').innerHTML = subtotal;
}

window.addEventListener('load',doFirst,false);