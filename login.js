function login(){  
			if(document.getElementById('Nome').value == "admin" ){ 
				if (document.getElementById('Senha').value == "admin" ){
                 document.getElementById('div_login').action = "home.html"  
				 } else {
					alert("usuario e/ou senha incorretos")
				 }	 
          }  else {
			alert("Usuario e/ou senha incorretos")
		  }
    }
	