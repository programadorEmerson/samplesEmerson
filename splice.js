const myFish = ["angel", "clown", "mandarin", "surgeon"];

// 2 é a posição no array 
// 0 insere drum na posição 2 sem remover a posição 2
myFish.splice(2, 0, "drum");
console.log(myFish);

// 3 é a posição no array 
// 1 insere emerson na posição 3 removendo a posição 3 anterior
myFish.splice(3, 1, "emerson");
console.log(myFish);

// 3 é a posição no array 
// Remove a posição 3
myFish.splice(3, 1);
console.log(myFish);

// 0 é a posição no array 
// Remove 2 elemento a partir da posição 0 e insere os demais passados no parâmetro
myFish.splice(0, 2, "parrot", "anemone", "blue");
console.log(myFish);

//remove todos os elementos a partir da posição 3
myFish.splice(3, Number.MAX_VALUE);
console.log(myFish);