let n1 = 20;
let n2 = 11;
let operador = "-";

let resultado;

switch (operador) {
    case "+":
        resultado = n1 + n2;
        break;
    case "-":
        resultado = n1 - n2;
        break;
    case "*":
        resultado = n1 * n2;
        break;
    case "/":
        if (n2 !== 0) {
            resultado = n1 / n2;
        } else {
            resultado = "Erro: Divisão por zero";
        }
        break;
    default:
        resultado = "Operador é Inválido!";
}

console.log(`Resultado: ${resultado}`);