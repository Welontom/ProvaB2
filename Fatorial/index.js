var botao = document.querySelector('button')
var texto = document.querySelector('h1')

function fatorar(num) {
    for (var i = num - 1; i >= 1; i--) {
      num = num * i;
    }
    texto.innerText += num + '\n'
  }
function calcular(){
    for(i=1;i<11;i++){
        fatorar(i)
    }
}