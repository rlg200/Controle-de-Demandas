function addFields() {
		// Obtém a linha da tabela
		var table = document.getElementsByClassName("tabela1")[0];
		var row = table.insertRow(-1);
		
		var linha = table.querySelectorAll("tr");
		var c = linha.length;
		var teste = document.getElementById("escondido")
		teste.value = c-1;

		// Adiciona 5 células com campos de texto com dropdown é linha
		for (var i = 0; i < 5; i++) {
		  var cell = row.insertCell(-1);
		  
		  if (i == 0) {
			var select = document.createElement("input");
			select.type = "text";
			select.setAttribute("name", 'titulo_projeto_' + (c-1))
			select.setAttribute('list','lista-projetos')
			select.setAttribute('required', 'required')
		  } else if (i == 1) {
			var select = document.createElement("input");
			select.type = "text";
			select.setAttribute("name", 'integrante_time_' + (c-1))
			select.setAttribute('list','lista-pessoas')
			select.setAttribute('required', 'required')
		  } else if (i == 2) {
			var select = document.createElement("input");
			select.type = "text";
			select.setAttribute("name", 'cargo_integrante_' + (c-1))
			select.setAttribute('list','lista-cargos')
			select.setAttribute('required', 'required')
		  } else if (i == 3) {
			var select = document.createElement("input");
			select.type = "date";
			select.setAttribute("name", 'data_inicio_' + (c-1))
			select.setAttribute('required', 'required')
		  } else if (i == 4) {
			var select = document.createElement("input");
			select.type = "date";
			select.setAttribute("name", 'data_fim_' + (c-1))
		  }

		  cell.appendChild(select);
		}
	}

function goback () {
	window.history.back()
}