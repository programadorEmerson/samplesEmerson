const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

// Every verifica se TODOS os itens preenchem a condição e retorna true ou false, pode ser combinado com outras funções. Object.values, verifica os valores do objeto, se usasse Object.key verificaria as chaves.
const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));