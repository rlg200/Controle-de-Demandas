function goback () {
	window.history.back()
};


function adicionarCampoProduto() {


	const tabela = document.getElementsByClassName('tabela1')[0];
	const trs = tabela.querySelectorAll("tr");

	if(trs.length >= 3 || document.getElementById('Atividade')) {

		ApagaCampo()
		adicionarCampoProduto();

	} else {

	const tabela = document.getElementsByClassName('tabela1')[0];
	const novaLinha = tabela.insertRow();

  	const novoCampo = document.createElement('input');
  	novoCampo.type = 'text';
	novoCampo.id = 'Produto';
	novoCampo.name = 'Produto';

	const novaCelula1 = novaLinha.insertCell();

	novaCelula1.innerHTML = "<label for='Produto'>Insira o nome abreviado do Produto:</label>";
	novaCelula1.appendChild(novoCampo);

	}
}

function adicionarCampoAtividade () {


	
	const tabela = document.getElementsByClassName('tabela1')[0];
	const trs = tabela.querySelectorAll("tr");


	if(trs.length >= 3|| document.getElementById('Produto')) {

		ApagaCampo()
		adicionarCampoAtividade();

	} else {

	const tabela = document.getElementsByClassName('tabela1')[0];
	const novaLinha = tabela.insertRow();

  	const novoCampo = document.createElement('input');
  	novoCampo.type = 'text';
	novoCampo.id = 'Atividade';
	novoCampo.name = 'Atividade';

	const novaCelula1 = novaLinha.insertCell();


	novaCelula1.innerHTML = "<label for='Atividade'>Insira quantas horas em média essa atividade dura: </label>" ;
	novaCelula1.appendChild(novoCampo);
	}

}

function ApagaCampo () {
	
	const tabela = document.getElementsByClassName('tabela1')[0];
	const trs = tabela.querySelectorAll("tr");

	if (trs.length >= 3) {

    trs[trs.length - 1].remove();

	}

}


const meuSelect = document.getElementById('tipo_campo');

meuSelect.addEventListener('change', (event) => {

 const opcaoSelecionada = event.target.value;

  if (opcaoSelecionada == 'PRODUTO') {

    adicionarCampoProduto();
  } else if (opcaoSelecionada == 'ATIVIDADE') {

	adicionarCampoAtividade();
  } else {

	ApagaCampo();
  }
});
