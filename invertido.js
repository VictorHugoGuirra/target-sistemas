// Função para inverter a string
function inverterString(str) {
    let resultado = "";  // String que vai armazenar o resultado invertido

    // Itera pela string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];  // Adiciona o caractere na posição i à string resultado
    }

    return resultado;
}

// Entrada (string informada pelo usuário ou definida previamente)
let entrada = "Victor Hugo";

// Chama a função e exibe o resultado
let invertida = inverterString(entrada);
console.log("String original:", entrada);
console.log("String invertida:", invertida);
