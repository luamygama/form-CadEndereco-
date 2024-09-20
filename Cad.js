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