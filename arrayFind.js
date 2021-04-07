const numbers = [11, 24, 39, 30, 50, 62, 75, 81, 96, 100];

// find Faz uma busca retornando a primeira posição que encontrar e para a função quando encontrar o item que corresponde a condição.
const firstMultipleOf5 = numbers.find((number) => number === 96);
console.log(firstMultipleOf5);

// Outros exemplos
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = props => props % 2 === 0;
const isEven2 = props => props.find((number) => number % 2 === 0);

console.log(isEven2(numbers)); // 30
console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True