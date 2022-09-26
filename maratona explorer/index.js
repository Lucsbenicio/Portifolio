const elementoResposta = document.querySelector("#resposta")

const inputPergunta = document.querySelector("#inputPergunta")

const respostas = [
  "certeza!",
  "não tenho tanta certeza.",
  "é decididamente assim.",
  "não conte com isso.",
  "sem duvidas! ",
  "pergunte novamente mais tarde",
  "sim,definitivamente!",
  "minha resposta é não",
  "você pode contar com isso.",
  "melhor não te dizer nada agora",
  "a meu ver,sim.",
  "minhas fontes dizem não",
  "provavelmente.",
  "não é possivel prever agora.",
  "perspectiva boa.",
  "as perspectivas não são boas",
  "sim.",
  "concentre-se e pergunte novamente",
  "sinais apontam que sim",
  "com toda certeza",
]



// clicar em fazer pergunta
function fazerPergunta(){

  if(inputPergunta.value == ""){ 
   alert(" Digite sua pergunta")
   return
 }

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  //gerar número aleatorio 
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas [numeroAleatorio]
  
  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0
  }, 3000)
  // para aparecer a resposta dnv
  elementoResposta.style.opacity = 1
}


