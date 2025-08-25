const prompt = require("prompt-sync")();

function apresentarAssistente(nomeDoAssistente) {
    console.log("Olá! Meu nome é " + nomeDoAssistente + ", seu assistente virtual pessoal.");
}

function mostrarMenu() {
    console.log("\n--- Alexo: Seu Assistente Virtual ---");
    console.log("[1] Que horas são? (Fictício)");
    console.log("[2] Conte uma curiosidade");
    console.log("[3] Me diga seu nome");
    console.log("[4] Sair");
    console.log("---------------------------------------");
}

function mostrarHora() {
    console.log("Alexo diz: De acordo com meus circuitos, agora são 14:30 do dia 22/08/2025.");
}

function contarCuriosidade() {
    console.log("Alexo diz: Você sabia que a linguagem JavaScript foi criada em apenas 10 dias por Brendan Eich?");
}

function dizerNome(nomeUsuario) {
    console.log("Alexo diz: Seu nome é " + nomeUsuario + ", muito prazer!");
}

const nomeAssistente = "Alexo";

apresentarAssistente(nomeAssistente);

let nomeUsuario = prompt("Qual é o seu nome? ");

let opcao = "";

while (opcao !== "4") {
    mostrarMenu();
    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            mostrarHora();

            break;
        case "2":
            contarCuriosidade();
            break;
        case "3":
            dizerNome(nomeUsuario);
            break;
        case "4":
            console.log("Alexo diz: Até logo, " + nomeUsuario + "! Foi um prazer falar com você.");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}
