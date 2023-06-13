var botao = document.querySelector('button')
var texto = document.querySelector('h1')
var input = document.querySelector('input')

function quadradoPerfeito(num){
    raiz = num**(1/2)
    if(num/raiz != raiz){
        texto.innerText = num+' não é um quadrdo perfeito'+''
    }
    else{
        texto.innerText = num+' é um quadrdo perfeito'+''
    }
}
function calcular(){
    x = input.value
    quadradoPerfeito(x)
}