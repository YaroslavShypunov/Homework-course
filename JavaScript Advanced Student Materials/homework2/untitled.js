function ButtonOne(){
	var paragraph = document.getElementsByTagName("p");
	for(var i = 0; i < paragraph.length;i++){
	paragraph[i].style.border="2px solid red";
}
}

function ButtonTwo(){
	var a = document.getElementsByTagName("a");
	for(var i = 0; i < a.length; i++){
		a[i].style.border="2px solid blue";
	}
}

function ButtonThree(){
	var div = document.getElementById("test_div");
	div.style.border = "2px solid green";
}