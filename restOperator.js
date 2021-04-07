// (...spread)+(parametro) = rest que recebe vários elementos
// args teóricamente 1 parâmetro, mais utilizando o spread (...) ele se torna o rest, recebendo vários parâmetros em um só, poderia ser vários objetos, arrays, etc... 
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88