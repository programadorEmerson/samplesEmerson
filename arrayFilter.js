// A função filter retorna um array com todas as opções que se enquadrem nos parâmetros, ele monta UM NOVO ARRAY com base em um array PAI
const numbers = [19, 21, 30, 3, 45, 22, 15];
const isEven = numbers.filter((number) => number % 2 === 0);
console.log(isEven); // [ 30, 22 ]

const objPeople = [
  { name: "José", age: 21 },
  { name: "Lucas", age: 19 },
  { name: "Maria", age: 16 },
  { name: "Gilberto", age: 18 },
  { name: "Vitor", age: 15 },
];

// Outro exemplo filtrando pessoas menores que 18 anos
const verifyAgeDrive = (arrayOfPeople) =>
  arrayOfPeople.filter((item, index, array) => item.age < 18);
console.log(verifyAgeDrive(objPeople));

// Removendo um item do array usando filter
const arrayMyStudents = ["Maria", "Manuela", "Jorge", "Ricardo", "Wilson"];

// Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array. (item é o item atual, index é a posição da iteração e array é o array de referência, index e array são opcionais)
const removeStudentByName = (name, listStudents) =>
  listStudents.filter((item, index, array) => item !== name);

const newListStudents = removeStudentByName("Ricardo", arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]

