const assert = require("assert");

function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }
  return a + b;
}

// A função sum(a, b) retorna a soma do parâmetro a com o b
assert.strictEqual(sum(4, 9), 13, "4 + 9 = 13");

// Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(0, 0), 0, "Esperava o retorno 0");

// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
assert.strictEqual(sum(4, 5), 9, "Esperava o retorno 9");

// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.strictEqual(sum(0, 0), 0);

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  //console.log(newArr);
  return newArr;
}

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(i, 1);
      index -= 1;
      len -= 1;
    }
  }
  return arr;
}

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado [1, 2, 4]
// deepStrictEqual retorna o erro se não forem iguais, verifica internamente no objeto ou array
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// notDeepStrictEqual retorna o erro se forem iguais, verifica internamente no objeto ou array
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Verifique se o array passado por parâmetro não sofreu alterações, verifica internamente no objeto ou array
assert.deepStrictEqual(myRemove([10, 20, 30, 40], 15), [10, 20, 30, 40]);

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado, verifica internamente no objeto ou array
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// Comprando objetos diferentes, mude obj2 para obj3 para ver o erro, verifica internamente no objeto ou array
assert.deepStrictEqual(obj1, obj2);

// Verificando se é uma função
// typeof = Inicia a verificação de tipo, myRemove,= item a verificar, 'function' é o tipo de verificação, poderia ser string, number, array, objeto, etc...
assert.strictEqual(typeof myRemove, 'function');

// Escreva a função wordLengths para passar nos testes já implementados.
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [];

function wordLengths (props){
  props.forEach((words) => {
    expected.push(words.length);
  });
  return expected;
}

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

//Escreva a função sumAllNumbers para passar nos testes já implementados.

function sumAllNumbers (props){
  let retorno = 0;
  props.forEach((number) => {
    retorno += number;
  });
  return retorno;
}

const numbers = [9, 23, 10, 3, 8];
const expected2 = 53;
const outputs = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(outputs, expected2);



// Escreva a função findTheNeedle para passar nos testes já implementados.

let arrayWords = ['house', 'train', 'slide', 'needle', 'book'];
const esperado = 3;

function findTheNeedle (arrayWords, verify){
  for (const key in arrayWords) {
    if (verify === arrayWords[key]) {
      return parseInt(key);      
    }
  }
}

let output1 = findTheNeedle(arrayWords, 'needle');
assert.strictEqual(output1, esperado);


// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const greetPeople = (people) => {
  const retorno = [];
  for (const person in people) {
    retorno.push(`Hello ${people[person]}`);
  }
  return retorno;
};

const parameter = [ 'Irina', 'Ashleigh', 'Elsa' ];
const result = [ 'Hello Irina', 'Hello Ashleigh', 'Hello Elsa' ];
const saida = greetPeople(parameter);

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(saida, result);

// Use a variável parameter como parâmetro da função abaixo, escreva testes para  
// verificar se a mesma está retornando como se vê na variável result e, caso não esteja, 
// altere o código para que ele passe nos testes.

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let momentIndex = 0;
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      momentIndex += 1;
      results.push(momentIndex);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');;
};


const _parameter = 'Dayane';
const _expect = 'D1y2n3';
const _received = removeVowels(_parameter)
assert.strictEqual(_received, _expect);