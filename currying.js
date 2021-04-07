const exemplo1 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

// Passando o console.log por paramentro, poderia ser qualquer função
exemplo1(5, console.log);


// Passando o arrow function por parâmetro
const exemplo2 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

exemplo2(100, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});


// Passando o arrow function por parâmetro
const exemplo3 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

exemplo3(3, isEven); // Testa quais números serão pares;
exemplo3(3, isOdd); // Testa quais números serão ímpares;


// Chamando função dentro de função
const greaterThan = firstNumber => secondNumber => secondNumber > firstNumber;

const greaterThan10 = greaterThan(10);

// passo o 15 para a constante greaterThan10
// que passa 10 para a greaterThan com 1 parâmetro e o 15 recebido como 2 paramento
// depois executa a verificação
console.log(greaterThan10(15));


const doingThings = (action, msg) => {
  if (msg === "wakeUp") {
    action('Acordando!!');      
  } else if (msg === "breakFast") {
    action('Bora tomar café!!');      
  } else {
    action('Partiu dormir!!');
  }
};

doingThings(console.log, 'breakFast');