const students = [
  { name: "Maria", grade: 70, approved: "" },
  { name: "José", grade: 56, approved: "" },
  { name: "Roberto", grade: 90, approved: "" },
  { name: "Ana", grade: 81, approved: "" },
];

// ForEach pode conter 3 parâmetros, item, index e array, porém o index e array são opcionais. o item é o valor atual da iteração, o index é a posição atual da iteração e o array é o array de referencia, exemplo abaixo. Obs o array não esta sendo usado porem foi declarado para ilustração
function verifyGrades() {
  students.forEach((item, index, array) => {
    if (item.grade >= 60) {
      students[index].approved = "Aprovado";
    } else {
      students[index].approved = "Recuperação";
    }
  });
}
verifyGrades();
console.log(students);
