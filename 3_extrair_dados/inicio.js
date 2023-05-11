
function toggleDarkMode() {
  var object = document.getElementById("tabela1"); // substitua "my-object" pelo ID da sua tag <object>
  var doc = object.contentDocument;
  //var body = doc.getElementsByTagName("body")[0];
  doc.classList.toggle("dark-mode");
}