const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// some, se um item corresponder, retorna true, ou seja ele percorre um array, se encontrar algo que se encaixe na condição ele ja para a iteração e retorna true, senão segue até o final e retorna false
const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false