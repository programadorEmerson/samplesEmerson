// A função sort() sem passar parâmetro ordena as entradas como STRINGS e por ordem alfabética
const food = ["arroz", "feijão", "farofa", "chocolate", "doce de leite"];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// Sem passar parâmetro ordena as entradas entendendo como se fosse STRINGS e por ordem alfabética.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers.join()); // 1,10,2,3,4,5,6,7,8,9

// Parâmetros para ordenação em ordem numérica points.sort((a, b) => a - b)
// a - b ordem crescente
// b - a ordem decrescente
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]
