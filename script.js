
function rodaJogo(){
   
   
   removeElemento();
   
   
   
   var p = document.createElement("p");
  
   document.getElementById("desenrolarhistoria").appendChild(p).innerText = "O primeiro destino é sua casa, onde aconteceu o sequestro. Ali, eles iniciam as buscas por pistas de quem seria o responsável pelo sumiço de sua família. Depois de uma varredura pela residência, eles encontram um objeto um bilhete com um texto sem sentidodo. Yone lembra que na noite passada sonhou com uma teoria chamada de Cifra de César. ";
  
   console.log(document.body.childNodes[5].innerText = "DECIFRE");
}


function removeElemento(){
   var node = document.getElementById("paragrafo-principal");
   if (node.parentNode) {
     node.parentNode.removeChild(node);
   }

}

function mudaBackg(){
   document.body.style.backgroundAttachment = "fixed";
}

function primeiroDesafio(){
   let texto = document.createTextNode("")
   let entrada = document.createElement('input');

}

mudaBackg();



