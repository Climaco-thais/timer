window.addEventListener("load", () => { secpass 
//Tempo, em segundos, que queremos.
let sec = 180;

const countDiv = document.getElementById("timer")

const secpass = () => {
//notação de minutos e notação de segundos restantes->
// Math floor é uma anotação auxiliar para estabecer um teto para o comportamento 
//do número, de modo que o resultado esperado seja exatamente o que esperamos.

    let min = Math.floor(sec/60);
    let segundosRestantes = sec% 60;

    if (segundosRestantes < 10){
        segundosRestantes = "0" + segundosRestantes;
    }

    if (min < 10) {
        min = "0" + min;
    }
    //3:7 
    // o que queremos é um 03:07, que fique bastante claro que são em MINUTOS. com isso, iremos aplicar o if
    
    // ja temos duas variaveis: min e segundos. depois disso precisamos atualizar nossa DIV
    //a div do timer precisa receber em sua propriedade, os minutos, seguido dos segundos
    // com isso, vai se gerar um formato de 02:54
    //pegamos um numero inteiro, transformamos em uma notação de min e seg
    //osegredo para realizar um contador, precisamos atualizar o nosso HTML.
    countDiv.innerHTML = min + ":" + segundosRestantes;
   
    // Condição final
    if (sec > 0) {
        sec = sec -1;
    }
    else {
    countDiv.innerHTML = "Acabou!";
    }
};

// precisamos de linkar!!!
const countDOwn = setInterval(() => secpass (), 1000)

// window.addEventListener("load",() => {secpass {
//const botao = document.getElementById("botao");
//botao.addEventListener("click", () => {