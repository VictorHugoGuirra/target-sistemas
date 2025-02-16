function verificarFibonacci(numero) {
    let fibonacci = [0, 1];
    let i = 2;

    while (fibonacci[i - 1] < numero) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        i++;
    }

    if (fibonacci.includes(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
    }
}

let numero = 21;

verificarFibonacci(numero);
