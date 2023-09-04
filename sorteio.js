// Obtém os elementos da página
const elementoMenorValor = document.querySelector("#menor-valor");
const elementoMaiorValor = document.querySelector("#maior-valor");

// Declara as variáveis que recebem o menor e o maior valor
const menorValor = 1;
const maiorValor = 1000;

// Declara uma que recebe a função que gera o número aleatório
const numeroAleatorio = geraNumeroAleatorio();

// Declara uma função para sortear um número
function geraNumeroAleatorio() {

    return parseInt(Math.random() * maiorValor + 1);      // Retorna o número sorteado

};

elementoMenorValor.innerHTML = menorValor;      // Altera os elementos
elementoMaiorValor.innerHTML = maiorValor;