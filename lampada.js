let turnOn = document.getElementById("ligar")
let turnOff = document.getElementById("desligar")
let broke = document.getElementById("lamp")
let value = 0

turnOn.addEventListener('click', ligar)
turnOff.addEventListener("click", desligar)
broke.addEventListener("click", quebrar)

function ligar(){
  
  if(Number(value) == 1){
    alert("Impossível fazer isso, a lampada esta quebrada!")
  }else{
    lamp.src = "./img/ligada.png"
    document.body.style.background = '#F3B700'
  }
}

function desligar(){

  if(Number(value) == 1){
    alert("Impossível fazer isso, a lampada esta quebrada!")
  }else{
    lamp.src = "./img/desligada.png"
    document.body.style.background = '#0D1B2A'
  }
}

function quebrar(){
  lamp.src = "./img/quebrada.png"
  value = 1
  document.body.style.background = '#071013'
}