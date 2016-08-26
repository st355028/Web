var storage = sessionStorage;
var subtotal = 0;

function doFirst(){
    var itemString = storage.getItem('addItemList');
    var items = itemString.substr(0,itemString.length-2).split(', ');

    newItem = document.createElement('div');
    newTable = document.createElement('table');

    for(var key in items){
        var itemInfo = storage[items[key]];   // 用法 items[key]
        createCartList(items[key],itemInfo);
    }

    //subtotal
    for(var key in items){
		var itemInfo = storage[items[key]];   // 用法 items[key]
		var sprice = parseInt(itemInfo.split('|')[2]);
		
		subtotal += sprice;
	}
	document.getElementById('subtotal').innerHTML = subtotal;
}

function createCartList(itemKey,itemInfo){
    var itemTitle = itemInfo.split('|')[0];
    var itemImage = itemInfo.split('|')[1];
    var itemPrice = itemInfo.split('|')[2];

    //建立每一個品項的區域 -- tr
    var trItemList = document.createElement('tr');
    trItemList.className = 'item';
    //trItemList.setAttribute('class','item');
    // 給他屬性值


    //把tr加入td
    newTable.appendChild(trItemList);

    //建立商品圖片 -- 第一個td
    var tdImage = document.createElement('td');
    tdImage.style.width = '120px';

    var img = document.createElement('img');
    img.src = 'imgs/' + itemImage;
    img.width = 60;

    tdImage.appendChild(img);
    trItemList.appendChild(tdImage);

    //建立商品名稱和刪除按鈕 -- 第二個td
    var tdTitle = document.createElement('td');
    tdTitle.style.width = "360px";
    tdTitle.id = itemKey;

     var pTitle = document.createElement('p');
    pTitle.innerHTML = itemTitle;

    var button = document.createElement('button');
    button.innerHTML = 'Delete';
    button.onclick = deleteHandler;

    tdTitle.appendChild(pTitle);
    tdTitle.appendChild(button);


    trItemList.appendChild(tdTitle);
    //建立商品價格 -- 第三個td
    var tdPrice = document.createElement('td');
    tdPrice.style.width= "170px";
    tdPrice.innerHTML=itemPrice;

    trItemList.appendChild(tdPrice);

    //建立商品數量 -- 第四個td
    var tdItemcount= document.createElement('td');
    tdItemcount.style.width = "60px";

    var itemCount = document.createElement('input');
    itemCount.type = 'number';
    itemCount.value = 1;
    itemCount.oninput = inputHandler;

    tdItemcount.appendChild(itemCount);
    trItemList.appendChild(tdItemcount);

    newItem.appendChild(newTable);
    document.getElementById('cartList').appendChild(newItem);

}
function deleteHandler(){
 var itemId = this.parentNode.getAttribute('id');
 //做個if判斷 一個刪就用下面方法 以上就去抓前面價格的id去刪除 
 //subtotal(); 刪除錢
 var itemValue = storage.getItem(itemId);
 subtotal -= itemValue.split('|')[2];
 document.getElementById('subtotal').innerHTML = subtotal;
 //先找出錢再刪storage
 storage['addItemList'] = storage['addItemList'].replace(itemId +', ','');
 storage.removeItem(itemId);
 this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
 //找到曾祖父才能刪祖父
}
function inputHandler(){
	//作業
}







// function addItem(itemId,itemValue){
// 	//alert(itemId + ' ' + itemValue + '');
// 	var newItem = document.getElementById('newItem');

// 	//抓取img資訊
// 	var img = document.createElement('img');
// 	img.src = 'imgs/'+itemValue.split('|')[1];
// 	//itemValue.split('|')[1];  .split('|')是把字串裡的｜當成拆開符號拆成好幾個字串
// 	img.id = 'itemImageSelect';


// 	//抓取title資訊
// 	var title = document.createElement('span'); //建立在誰（span）之下
// 	title.innerText = itemValue.split('|')[0];
// 	title.id = 'titleSelect';
// 	//抓取price資訊
// 	var price = document.createElement('span');
// 	price.innerText = '$' + itemValue.split('|')[2];
// 	price.id = 'priceSelect';


// 	//先判斷此處是否已有物件，如果有先刪除，此處用while是因為他要重複判斷，因為有三個孩子要判斷
// 	while(newItem.childNodes.length >= 1)
// 	{
// 		newItem.removeChild(newItem.firstChild);
// 	}



// 	//在顯示新物件
// 	newItem.appendChild(img);
// 	newItem.appendChild(title);
// 	newItem.appendChild(price);

// 	//在寫入storage中

// 	if(storage[itemId]){
// 		alert("買過啦 別鬧了")
// 	}
// 		else{
// 			storage[itemId] = itemValue;
// 			storage['addItemList'] += itemId + ', ';
// 		}

// 	//計算夠買數量和小記

// 	var itemString = storage.getItem('addItemList');
// 	var items = itemString.substr(0,itemString.length-2).split(', ');
// 	//alert(items.length);

// 	var subtotal = 0;
// 	for(var key in items){
// 		var itemInfo = storage[items[key]];   // 用法 items[key]
// 		var sprice = parseInt(itemInfo.split('|')[2]);
// 		//paseInt字串轉數值
// 		subtotal += sprice;
// 	}
// 	//substr（從哪開始，到哪結束）
// 	document.getElementById('itemCount').innerHTML = items.length;
// 	document.getElementById('subtotal').innerHTML = subtotal;
// }

window.addEventListener('load',doFirst,false);