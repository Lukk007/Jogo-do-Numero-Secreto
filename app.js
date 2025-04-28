let listaDeNumerosSorteados = [];
numeroMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 ;

function exibirTextoNaTela(tag, texto) {
    let armazem = document.querySelector(tag);
    armazem.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
};

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Tente acertar o número secreto entre 1 e 100");

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute > numeroSecreto) {
        exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);
    } else if (chute < numeroSecreto) {
        exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);
    } else {
        let palavraTentativa = tentativas == 1? "tentativa" : "tentativas";
        let mensagemTentativa = `Você acertou o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativa);
        exibirTextoNaTela("h1", "Parabéns"); 
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    limparBarra();
    tentativas++;
};

function novoJogo() {
    tentativas = 1
    numeroSecreto = gerarNumeroAleatorio();
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Tente acertar o número secreto entre 1 e 100");
    document.getElementById("reiniciar").setAttribute("disabled", true);
};

function gerarNumeroAleatorio() {
    let numeroEsolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeNumerosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEsolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEsolhido);
        return numeroEsolhido;
    }
};

function limparBarra() {
    chute = document.querySelector("input");
    chute.value = "";
};



//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";
//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Tente acertar o número secreto entre 1 e 100";
