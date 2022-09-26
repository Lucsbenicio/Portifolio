import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { IMC, notANumber } from "./utils.js"


const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weigth')
const inputHeigth = document.querySelector('#height')



form.onsubmit = event => {
  event.preventDefault()

  const weigth = inputWeigth.value
  const heigth = inputHeigth.value

  const weigthOrHeigthIsNotANumber = notANumber(weigth) || notANumber(heigth)

  if(weigthOrHeigthIsNotANumber){
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(weigth, heigth)
  displayResultMessage(result)
}

function displayResultMessage(result){
  const message = `seu IMC é de ${result}`
  
  Modal.message.innerHTML = message
  Modal.open()
  
}

inputHeigth.oninput = () => AlertError.close()
inputWeigth.oninput = () => AlertError.close()
