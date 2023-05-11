function clique (elemento) {
var id = 0;

id = elemento.id ; 
var pag = id + ".html"
var frame = document.getElementById("pagina")
frame.setAttribute('src' , pag)
	
}
