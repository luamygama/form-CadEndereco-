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
