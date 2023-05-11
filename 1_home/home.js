function clique (elemento) {
var id = 0;

id = elemento.id ; 
var pag = id + ".html"
var frame = document.getElementById("pagina")
frame.setAttribute('src' , pag)

/*var div = document.getElementById("titulo_2");

div.innerHTML =  elemento.name;*/
}
