let namePilot = prompt("Olá piloto, nos informe seu nome:")
let velocity = 0

let accelaration = prompt("Você gostaria de acelera a nave para qual velocidade?")

if (confirm("Voce deseja confirmar que vamos acelerar para " + accelaration + " Km/s?")) {
    velocity = accelaration
} 

if (velocity == 0){
    alert("Nave está parada! Considere partir e aumentar a velocidade")
} else if (velocity < 40) {
    alert("Você está devagar, podemos acelerar mais!")
} else if (velocity >= 40 && velocity < 80) {
    alert("Velocidade boa para manter!")
} else if (velocity >= 80 && velocity < 100) {
    alert("Velocidade alta, considere diminuir!")
} else if (velocity > 100) {
    alert("Velocidade perigosa, controle automatico forçado")
}

alert(
    "Nome do piloto: " + namePilot + "\n" +
    "Velocidade Atual: " + velocity + "\n")