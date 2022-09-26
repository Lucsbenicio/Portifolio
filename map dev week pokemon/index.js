/* passo 1 = buscar o elemento seta avançar no html */
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cards = document.querySelectorAll('.card');
let cardAtual = 0;

function esconderCardSlct(){
  const cardSlct = document.querySelector(".slct")
  cardSlct.classList.remove("slct");
}

function mostrarCard(indiceCard){
  cards[indiceCard].classList.add('slct');

}



btnAvancar.addEventListener('click', function(){

  if(cardAtual === cards.length - 1){
    return
  } 

  esconderCardSlct()

  
   
   cardAtual++;
   mostrarCard(cardAtual)


});



btnVoltar.addEventListener('click', function(){

  if(cardAtual === 0) return;

  esconderCardSlct();
 
   cardAtual--;
  mostrarCard(cardAtual)

});