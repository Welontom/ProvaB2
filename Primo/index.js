var input = document.getElementById('inputprimo')
var texto =document.getElementById('textoprimo')

function calcular(){

    for(x=0;x<1000;x++){
        var primo = true
        var p = 0
        for(i=0;i<x;i++){
            if(x%i == 0){
                p++
            }
        }
        if(p > 1 ){
            primo = false
        }
        if(x == 0){
            primo = false
        }
        if(x < 2){
            primo = false
        }
    mostrar(primo,x)
}
}
function mostrar(primo,x){
    if(primo == false){
    }
    else{
        texto.innerText +='\n' +x
    }
}