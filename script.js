
var painelLogo = document.querySelector(".painel-logo")
var containerPai = document.querySelector("#desenrolar-historia");
var texto = document.querySelector("#paragrafo-principal");
var desafio = document.querySelector("#paragrafo-desafio");
var botaoStart = document.querySelector("#btn-start");
//var btnControle = document.querySelector("#botoes-controladores");
var btn1 = document.querySelector("#btnUm");
var btn2 = document.querySelector("#btnDois");
var btn3 = document.querySelector("#btnTres");
document.getElementById("restart").style.display = "none";    


function primeiraFase(){
    botaoStart.remove();
    painelLogo.remove();

    document.getElementById("botoes-controladores").style.display = "inline";
    layout('Yone treinava com seu Sensei, quando inesperadamente seu irmão chega, desesperado, com a notícia de que sua família acabara de ser raptada. Ao saber do ocorrido, Yone inicia na essa saga desafiadora para salvar a sua família. O primeiro destino é sua casa, onde aconteceu o sequestro. Ali, eles iniciam as buscas por pistas de quem seria o responsável pelo sumiço de sua família. Depois de uma varredura pela residência, eles encontraram um bilhete', '86', '89', '90');
    btn1.onclick = gameOver;
    btn2.onclick = segundaFase;
    btn3.onclick = gameOver;
    desafio.textContent = "Para ler a pista acerte este desafio. Observe os cinco primeiros termos da sequência: 12, 17, 24, 33, 44, .... O oitavo termo dessa sequência é o:";
    document.getElementById("restart").style.display = "inline";    
}




function layout(textoLayout, acaoUm, acaoDois, acaoTres){
texto.textContent = textoLayout;
btn1.textContent = acaoUm;
btn2.textContent = acaoDois;
btn3.textContent = acaoTres;
}



function segundaFase(){
    layout('Shaka havia deixado um recado que, caso Yone quisesse encontrar sua família, este deveria ir até o templo, localizado na floresta. No caminho, Yone e seu Sensei encontraram diversos inimigos e armadilhas mas conseguiram chegar ao templo Amaterasu.  Chegando lá, mesmo depois de um caminho exaustivo, batalharam  com Misterioso Dragão. Porém, quando Yone estava prestes a derrotar seu inimigo, este jogou uma bomba de fumaça sumindo com a sua família através de um portal que se fechou logo em seguida. Yone, ao ver que o portal fora fechado, fica desesperado, então seu sensei o informa que aquele portal é um portal do tempo e que conhece um feitiço capaz de abri-lo novamente. Resolva este desafio para lançar o feitiço' , '6', '8', '10');
    desafio.textContent = "Observe a seguinte sequência regressiva: 62, 30, 14, X, 2, 0. Identifique o padrão estabelecido e clique na opção que indica o valor de X: ";
    btn1.onclick = terceiraFase;
    btn2.onclick = gameOver;
    btn3.onclick = gameOver;

}

function terceiraFase() {
    layout('Ao passar pelo portal, o samurai e seu mestre desembarcam em uma viela no bairro da Liberdade, em São Paulo, onde estava acontecendo uma festa conhecida como Festa das Flores. Saindo da viela, Yone consegue avistar seu inimigo Shaka entrando em um templo com duas estatuas de dragão na entrada. O samurai corre atrás de seu inimigo Mestre Dragão dos Mistérios,  que ao perceber a aproximação de Yone, dá vida às estátuas de dragões através de um comando de voz. Ajude Yone a vencer o dragão respondendo estes desafios.', '51', '1000', '121');
    desafio.textContent = "Determine o próximo número que siga a lei de formação da sequência (1, 9, 25, 49, 81, ___):";
    btn1.onclick = gameOver;
    btn2.onclick = gameOver;
    btn3.onclick = segundaQuestaoTerceiraFase;
}
function segundaQuestaoTerceiraFase(){
    desafio.textContent = "Na sequência numérica lógica 13, 7, 20, 15, 7, 18, x, 17, 14, podemos afirmar que o valor de x será:";
    btn1.textContent = "20";
    btn2.textContent = "10";
    btn3.textContent = "9";

    btn1.onclick = gameOver;
    btn2.onclick = gameOver;
    btn3.onclick = terceiraQuestaoTerceiraFase;
}

function terceiraQuestaoTerceiraFase(){
    desafio.textContent = "Complete a frase: as letras 'ECHOOL', depois de colocadas em ordem, será o nome de um";
    btn1.textContent = "oceano";
    btn2.textContent = "objeto";
    btn3.textContent = "animal";

    btn1.onclick = gameOver;
    btn2.onclick = gameOver;
    btn3.onclick = venceJogo;
}


function gameOver(){
    texto.textContent = "GAME OVER";
    desafio.textContent = "";
    document.getElementById("restart").style.display = "inline";
    document.getElementById("restart").style.color = "red";
    document.getElementById("paragrafo-principal").style.fontSize = "30px";
    
    document.getElementById("botoes-controladores").style.display = "none";
    
}

function venceJogo() {
    texto.textContent = "PARABÉNS! Você ajudou o samurai a derrotar Shingen O Dragão Místico e salvar sua família!";
    document.getElementById("paragrafo-principal").style.fontSize = "30px";
    document.getElementById("restart").style.color = "red";
    desafio.textContent = "";
    document.getElementById("botoes-controladores").style.display = "none";    
}