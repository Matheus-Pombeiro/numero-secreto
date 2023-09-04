function chuteInvalido(numero) {

    return Number.isNaN(numero); 

};

function numeroMaiorOuMenorPermitido(numero) {

    return numero > maiorValor || numero < menorValor;

};

function verificaSeChutePossuiValorValido(chute) {

    const numero = +chute;      // Recebe o chute e o converte em número

    if (chuteInvalido(numero)) {                                // Se o chute não for um número, valor inválido

        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML = `
            <h2>Game Over!</h2>
            <h3>Pressione o Botão para Jogar Novamente</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `;

            document.body.style.background = "black";

        } else {

            elementoChute.innerHTML += "<p>Valor Inválido</p>";

        }

        return;

    }

    if (numeroMaiorOuMenorPermitido(numero)) {
       elementoChute.innerHTML += `<p>Valor Inválido: o número secreto está entre ${menorValor} e ${maiorValor}</p>`;
       return;
    }

    if (numero === numeroAleatorio) {

        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroAleatorio}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `;

    } else if (numero > numeroAleatorio) {

        elementoChute.innerHTML += `<p class="texto">O número secreto é menor <i class="fa-solid fa-down-long"></i></p>`;

    } else if (numero < numeroAleatorio) {

        elementoChute.innerHTML += `<p class="texto">O número secreto é maior <i class="fa-solid fa-up-long"></i></p>`;

    }

};

// Atualiza a página ao clicar no botão "Jogar Novamente"
document.body.addEventListener("click", (e) => {

    if (e.target.id == "jogar-novamente") {     // Se o id do elemento clickado for igual ao id do botão, atualiza a página
        window.location.reload();
    }

});