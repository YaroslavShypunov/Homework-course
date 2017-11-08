window.addEventListener("load",init,false);

function init(){
	endMoney = 555;
  	money = 0;
  	moneyOne = 0;
  	moneyTwo = 0;
	groundForm.select1.onchange = select1Iform;
	groundForm.select2.onchange = select2Iform;
	
	groundForm.name.onchange = nameOn;
	groundForm.lastName.onchange = lastNameOn;
	groundForm.adres.onchange = adresOn;
	groundForm.number.onchange = numberOn; 
	groundForm.onsubmit = submitOn;

}


  function select1Iform(){

  	if(!groundForm.select1.value.search("value1")){
  		money = money + 100;
  	}if(!groundForm.select1.value.search("value2")){
  		money = money + 150;
  	}if(!groundForm.select1.value.search("value3")){
  		money = money + 200;
  	}
  }

  function select2Iform(){
    if(!groundForm.select2.value.search("value1")){moneyOne = moneyOne + 20;}
    	if(!groundForm.select2.value.search("value2")){moneyOne = moneyOne + 30;}
    		if(!groundForm.select2.value.search("value3")){moneyOne = moneyOne + 10;}
    			if(!groundForm.select2.value.search("value4")){moneyOne = moneyOne + 40;}
    				if(!groundForm.select2.value.search("value5")){moneyOne = moneyOne + 5;}
  }



function valitade(elem,pattern){
	var res = elem.value.search(pattern);
	if(res == -1) elem.className = "error";
	else elem.className = "trueClass";
}

function nameOn(){
	var pattern = /\S/;
	valitade(this,pattern);
}
function lastNameOn(){
	var pattern = /\S/;
	valitade(this,pattern);
}
function adresOn(){
	var pattern = /\b[а-я0-9.-0-9]/i;
	valitade(this,pattern);
}
function numberOn(){
	var pattern = /\d\d\d\d\d\d\d\d\d/;
	valitade(this,pattern);
}
function submitOn(){
	var invalid = false;
	for(var i = 0; i < groundForm.elements.length; ++i){
		var e = groundForm.elements[i];
		if(e.type == "text" && e.onchange){
			e.onchange();
			if(e.className == "error"){
			invalid = true;
		}
		}
	}if(!invalid){
		endMoney = endMoney - money - moneyOne;
		moneyTwo = money + moneyOne;
		confirm("Ваш заказ составит " + moneyTwo +" грн. Подтвердить ");
	}
	
	if(invalid){
		alert("Допущена ошибка");
		return false;
	}
	
}