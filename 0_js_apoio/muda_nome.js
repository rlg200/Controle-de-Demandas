

const desc = [ 'Cadastro de Empresas' , 'Cadastro de Outros Campos' ,  'Cadastro de Pessoas' , 'Cadastro de Projetos' , 'Cadastro de Equipes' , 'Cadastro de CRs' , 'Lançamento de Atividades' ,'Lançamento de Horas' , 'Lançamento de Pagamentos' ,'Inicio','Perfil','Edição de Perfil' ,'Manutenção de Dados' ,'Cadastro de Demandas' , 'Acompanhamento de Demandas'] 
const pag = ['cad_empresas' ,'cad_campo' ,'cad_pessoas', 'cad_projetos','cad_equipes','cad_cr','lanc_ativ','lanc_horas', 'lanc_pag','inicio','perfil', 'perfil_ed','manut','cad_dem','acomp_dem']

var path = window.location.pathname;
var page = path.split("/").pop();
var page_name = page.split(".");

var nome_tela = page_name[0];
alert (nome_tela);
var numero = pag.indexOf(nome_tela);
var final = desc[numero]
/*
var div = document.getElementById("titulo_2");

alert (div);
*/
div.innerHTML =  elemento.name;

