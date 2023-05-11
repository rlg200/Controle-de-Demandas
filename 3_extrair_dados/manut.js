
function funcao() { 
var x; 
//recebemos o valor do botão pressionado ok ou cancelar em uma variavel 
var r=confirm("Escolha um valor!");
 if (r==true) { 
	x="você pressionou OK!"; 
 } else { 
	x="Você pressionou Cancelar!"; 
 } 
 	alert(x);
 document.getElementById("demo").innerHTML=x; 
 }

