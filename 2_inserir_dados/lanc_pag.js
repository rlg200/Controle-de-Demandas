function addFields() {
		// Obtém a linha da tabela
		var table = document.getElementsByClassName("tabela1")[0];
		var row = table.insertRow(-1);
		
		var linha = table.querySelectorAll("tr");
		var c = linha.length;
		var teste = document.getElementById("escondido")
		teste.value = c-1;

		// Adiciona 5 células com campos de texto com dropdown é linha
		for (var i = 0; i < 7; i++) {
		  var cell = row.insertCell(-1);
		  
		  if (i == 0) {
			var select = document.createElement("input");
			select.type = "text";
			select.setAttribute("id", 'titulo_projeto_' + (c-1))	
			select.setAttribute("name", 'titulo_projeto_' + (c-1))
			select.setAttribute('required', 'required')
		  } else if (i == 1) {
			var select = document.createElement("input");
			select.type = "date";
			select.setAttribute("id", 'data_pagamento_' + (c-1))
			select.setAttribute("name", 'data_pagamento_' + (c-1))
			select.setAttribute('required', 'required')
		  } else if (i == 2) {
			var select = document.createElement("input");
			select.type = "number";
			select.setAttribute("id", 'parcela_'  + (c-1))
			select.setAttribute("name", 'parcela_' + (c-1))
			select.setAttribute('required', 'required')
		  } else if (i == 3) {
			var select = document.createElement("input");
			select.type = "text";
			select.setAttribute("id", 'valor_parcela_' + (c-1))
			select.setAttribute("name", 'valor_parcela_' + (c-1))
			select.setAttribute('required', 'required')
		  } else if (i == 4) {
			var select = document.createElement("input");
			select.type = "date";
			select.setAttribute("id", 'mes_competencia_' + (c-1))
			select.setAttribute("name", 'mes_competencia_' + (c-1))
			select.setAttribute('required', 'required')
		  } else if (i == 5) {
			var select = document.createElement("input");
			select.type = "date";
			select.setAttribute("id", 'data_emissao_' + (c-1))
			select.setAttribute("name", 'data_emissao_' + (c-1))
			select.setAttribute('required', 'required')
		  } else if (i == 6) {
		  	var select = document.createElement("input");
			select.type = "text";
			select.setAttribute("id", 'descritivo_' + (c-1))
			select.setAttribute("name", 'descritivo_' + (c-1))
		  }
		  
		  
		  // Adiciona as opções ao dropdown
		  if( i == 0) {
			select.setAttribute('list','lista-projetos')
		  }
		  cell.appendChild(select);
		}

	  }
	  
function goback () {
	window.history.back()
}
