var display = document.getElementById('display')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')
var comecar = document.getElementById('comecar')
var pausar = document.getElementById('pausar')
var cancelar = document.getElementById('cancelar')

var minutoAtual 
var segundoAtual 
var interval


for(var m = 0; m <= 60; m++){
    minutos.innerHTML += '<option value = '+m+'>' +m+'</option>'
}

for(var s = 0; s <= 60; s++){
    segundos.innerHTML += '<option value = '+s+'>' +s+ '</option>'
}


comecar.addEventListener('click', function(){
    
    minutoAtual = minutos.value
    segundoAtual = segundos.value
    display.innerHTML = (minutoAtual < 10 ? '0' + minutoAtual : minutoAtual) + ':' + (segundoAtual < 10 ? '0' + segundoAtual : segundoAtual)
    interval = setInterval(function(){
        segundoAtual--

        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual--
                segundoAtual = 59
            }else{
                document.getElementById('som').play();
                clearInterval(interval)
            }
        }
        display.innerHTML = (minutoAtual < 10 ? '0' + minutoAtual : minutoAtual) + ':' + (segundoAtual < 10 ? '0' + segundoAtual : segundoAtual)
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
    clearInterval(interval)
    display.innerHTML = "00:00"
})




