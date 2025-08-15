let numero1 = 10;
let numero2 = 5;
let operador = "+"; // pode ser "+", "-", "*", "/"

let resultado;

switch (operador) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            resultado = "Erro: Divisão por zero";
        }
        break;
    default:
        resultado = "Operador é Inválido!";
}

console.log(`Resultado: ${resultado}`);