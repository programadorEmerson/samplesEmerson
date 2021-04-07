let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54, 1];

// Faz a ordenação de itens através da condição passada neste caso ordena em ordem crescente
const newArray = arrayReceived => {
  // geral loop é a posição da iteração no primeiro for
  arrayReceived.forEach((valor, geralLoop, origem) => {

    // é a posição da iteração no for que percorre item por item para verificar o valor de grandeza
    arrayReceived.forEach((value, positionLoop, origin) => {

      // faz a verificação se o valor de referencia é menor que o valor do item sendo percorrido no array geral
      if (arrayReceived[geralLoop] < arrayReceived[positionLoop]) {

        // se for ele guarda na variável e altera as posições 
        let control = arrayReceived[geralLoop];
        arrayReceived[geralLoop] = arrayReceived[positionLoop];
        arrayReceived[positionLoop] = control;
      }
    });
  });
};
newArray(array);
console.log(array)
