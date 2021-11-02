let turnOn = document.getElementById("ligar")
let turnOff = document.getElementById("desligar")
let broke = document.getElementById("lamp")
let value = 0

turnOn.addEventListener('click', ligar)
turnOff.addEventListener("click", desligar)
broke.addEventListener("click", quebrar)

function ligar(){
  
  if(Number(value) == 1){

  }else{
    lamp.src = "./img/ligada.png"
  }
}

function desligar(){

  if(Number(value) == 1){

  }else{
    lamp.src = "./img/desligada.png"
  }
}

function quebrar(){
  lamp.src = "./img/quebrada.png"
  value = 1
}