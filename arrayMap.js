const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

// Map retorna um NOVO ARRAY com os resultado obtidos
const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

const numbers = [1, 2, 3, 4, -5];

// convertendo números maiores que 0 em números negativos sem alterar o array original
const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));
console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// Unindo 2 arrays
const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// Faz uma iteração no array products, e utilizando a posição index coleta a informação do segundo array e utilizando a função map gera um novo array com as informações obtidas.
const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));

const listProducts = updateProducts(products, prices);
console.log(listProducts);