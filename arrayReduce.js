const array = [1, 2, 3, 4];
// reduce, percorre cada elemento no array, ele acumula a soma para retornar no final ou na condição que se enquadre. o 0 significa que ele começa a contar com o valor 0, mais poderia ser um array vazio, um objeto vazio, não é obrigatório, mais é importante colocar para maior controle e em algumas condições se não colocar faz diferença, por exemplo em uma iteração em um objeto, se não colocar ele vai sempre sobrescrever o primeiro item, mais se colocar um objeto vazio como inicial ele gera um objeto novo com vários itens da iteração.
const reducer = (array) =>
  array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

//console.log(reducer(array))

// Utilizando Objetos, fazendo a soma somente dos "values"
const arrayObj = [{ x: 1 }, { x: 2 }, { x: 3 }];
const reducer1 = (array) =>
  array.reduce((acumulador, valorAtual) => acumulador + valorAtual.x, 0);

console.log(reducer1(arrayObj))

// Combinando itens do array
const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// Passando uma chave vazia, ou seja array vazio, ele retorna um novo array combinando os valores
function flatten(props) {
  return props.reduce((acc, curr) => acc.concat(curr), []);
  // saída ['1', '2', '3', true, 4, 5, 6]
}
