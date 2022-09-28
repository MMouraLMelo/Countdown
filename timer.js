"use strict";

var display = document.getElementById('display')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')
var comecar = document.getElementById('comecar')
var pausar = document.getElementById('pausar')
var cancelar = document.getElementById('cancelar')

var minutoAtual;
var segundoAtual;
var interval

for(var i = 0; i <= 60; i++){
    minutos.innerHTML += '<option value = '+i+'>' +i+'</option>';
}

for(var i = 0; i <= 60; i++){
    segundos.innerHTML += '<option value = '+i+'>' +i+ '</option>';
}

comecar.addEventListener('click', function(){
    minutoAtual = minutos.value
    segundoAtual = segundos.value
    display.childNodes[1].innerHTML = minutoAtual+" : "+segundoAtual
    interval = setInterval(function(){
        segundoAtual--;

        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual--
                segundoAtual = 59
            }else{
                document.getElementById('som').play();
                clearInterval(interval)
            }
        }
        display.childNodes[1].innerHTML = minutoAtual+" : "+segundoAtual
        document.getElementById('comecar').style.display = 'none'
        document.getElementById('pausar').style.display = 'inline'
    }, 1000)
})

pausar.addEventListener('click', function(){
    clearInterval(interval)
    document.getElementById('comecar').style.display = 'inline'
    document.getElementById('pausar').style.display = 'none'
})

cancelar.addEventListener('click', function(){
    clearInterval(interval);
    display.childNodes[1].innerHTML = "00 : 00";
})