window.addEventListener("load",function (){
	document.forms[0].addEventListener("submit",function(e){
		var div = document.getElementById("div");
		var iVar = true;
		var name = document.getElementsByName("name")[0],
		lastName = document.getElementsByName("lastName")[0],
		login = document.getElementsByName("login")[0],
		password1 = document.getElementsByName("password1")[0],
		password2 = document.getElementsByName("password2")[0],
		email = document.getElementsByName("email")[0],
		mw = document.getElementsByName("mw")[0];

		if(name.value.length == 0){
			iVar = false;
		}
		if(lastName.value.length == 0){
			iVar = false;
		}
		if(login.value.length == 0){
			iVar = false;
		}
		if(password1.value.length == 0){
			iVar = false;
		}
		if(password2.value.length == 0){
			iVar = false;
		}
		if(email.value.length == 0){
			iVar = false;
		}
		if(mw.value.length == 0){
			iVar = false;
		}

		if(!iVar){
			e.preventDefault();
			alert("dsgdjhgdg");
			//div.style.display = "block";
		}
	});
})