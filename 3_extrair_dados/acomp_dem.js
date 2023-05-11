var checkbox = document.getElementById('checkbox');
var linha = document.getElementById('linha_detalhada');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    linha.style.display = 'table-row';
  } else {
    linha.style.display = 'none';
  }
  
});