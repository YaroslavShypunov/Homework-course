
	
window.onload = function() {
	document.getElementById("login").onblur = function() {
	login = document.getElementById("login").value; }
	document.getElementById("password").onblur = function (){
	password = document.getElementById("password").value;
}
}

   function ButtonClick(){

   	        if(login == "admin" && password == "12345"){
          	body = document.getElementById("body");
          	div = document.createElement("div");
          	div.innerHTML = "Поля заполнены верно";
          	div.className = "class3";
          	body.appendChild(div);
          	document.getElementById("login").className = "class4";
          	document.getElementById("password").className = "class4";
          }   
          else if(login == "" && password == ""){
          	body = document.getElementById("body");
          	div = document.createElement("div");
          	div.innerHTML = "Вы не заполнили поля логин и пароль";
          	div.className = "class1";
          	body.appendChild(div);
          	document.getElementById("login").className = "class2";
          	document.getElementById("password").className = "class2";

          }
          
   }