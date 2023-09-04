// Obtém elementos da página
const elementoChute = document.querySelector("#chute");

// Obtém a API
window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

// Chama a API e configura ela com o idioma PT-BR
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {

    chute = e.results[0][0].transcript;

    exibeChuteNaTela(chute);
    verificaSeChutePossuiValorValido(chute);

};

function exibeChuteNaTela(chute) {

    elementoChute.innerHTML = `
        <p>Você disse:</p>
        <span class="box">${chute}</span>`

};

recognition.addEventListener("end", () => recognition.start());     // Quando o reconhecimento de voz acabar, inicia de novo