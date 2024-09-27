'use strict'; //Ativa o modo restrito 
// Esse modo faz com que o javascript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação.
/* Consumo de API - https://viacep.com.br/*/

//Função para limpar campos preenchidos
const limparformulario = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('uf').value = '';
}
// verifica se o CEP e valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);   // combinação de numero de inico e fim 
const cepValido = (cep) => cep.length == 8 && eNumero(cep)             //Identifica quantos caracteres foram digitados corespondente aos 8 digitos

const preencherformulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('uf').value = endereco.uf;

}

// Função para consumo de API ViaCEP
const pesquisarCep = async () => {//principal função que será executada quando for preencher o formúlario
    limparformulario();//função para deixar o formúlario em branco para ser preenchido
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
 
    if (cepValido(cep.value)) {
        const dados = await fetch(url);//fetch requisição do viacep e await garante que o feitch responda corretamente no formúlario
        const addres = await dados.json();//garante que o formato seja json
 
        if (addres.hasOwnProperty('erro')) {
            alert('CEP não encontrado');
        } else {
            preencherformulario(addres);
        }
 
    } else {
        alert('CEP Incorreto');
    }
}
 
// Chama escutador  para disparar ação de preenchimento
document.getElementById('cep').addEventListener('focusout', pesquisarCep);