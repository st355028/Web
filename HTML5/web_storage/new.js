var storage = sessionStorage;

function doFirst(){
    if(storage["addItemList"]==null)
        storage["addItemList"]="";
    //把所有id符合addbutton丟給spans
    var spans = document.querySelectorAll(".addButton");
    //幫每個Add Cart按鈕新增事件聆聽
    for(var i= 0,i<spans.length;i++)
    {
        spans.addElementListener('click',function(){
            //符合＃this.id input 物件的值給teddyInfo
            var teddyInfo = document.querySelector("#"+this.id+" input").value;
            addItem(this.id,teddyInfo);
        },false);

    }
}

function addItem(itemId,itemValue){
    var newItem = document.getElementById('newItem');
    //創造img的欄位
    var img = document.createElement('img');
    img.src ='imgs/'+itemValue.split('|')[1];
    img.id = 'itemImageSelect';

    //創造title資訊的欄位
    var title = document.createElement('span');
    title.id = 'titleSelect';
    title.innerText = itemValue.split('|')[0];

    //創造price資訊的欄位
    var price = document.createElement('span');
    price.id = 'priceSelect';
    price.innerText = '$'+ itemValue.split('|')[2];
}

window.addEventListener('load',doFirst,false);
