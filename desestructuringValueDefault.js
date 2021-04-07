const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

// Desestruturando objetos e passando valores como default caso não seja informado, no exemplo acima z = 0, pois no array position2d não existe a terceira posição assim o z assume o valor padrão 0
console.log(x); // 1
console.log(y); // 2
console.log(z); // 0