const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Inglês",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//(obj, key, value) valores para passar na chamada
//obj[key] = value atribui ao objeto, na chave informada o valor informado
const adicionarNovaChave = (obj, key, value) => {
  obj[key] = value;
};
adicionarNovaChave(lesson2, "turno", "manhã");
//console.log(lesson2)

// props é o parâmetro que vai receber, no caso objeto
// Object.keys, retorna os valores das keys dentro do objeto
const retornarChave = (props) => Object.keys(props);

// props é o parâmetro que vai receber, no caso objeto
// Object.values, retorna os valores dentro values do objeto
const retornarValor = (props) => Object.values(props);

// props é o parâmetro que vai receber, no caso objeto
// Object.keys, retorna as Keys dentro do objeto
// .length neste caso retorna a quantidade de itens no objeto
const retornarTamanho = (props) => Object.keys(props).length;

// Object.assign = Função "concatenar"
// {} criando novo obj, é o target
// Objetos que vão dentro do Target, { lesson1, lesson2, lesson3 }
// Porém o itens de mesmo nomes são sobrescrevidos
const concatenarObjetos = Object.assign({}, { lesson1, lesson2, lesson3 });

const somarValorDentroDeUmObjeto = (objPai) => {
  let valor = 0;

  // Object.entries, busca as entradas chave, valor do objeto encontrado
  // objPai objeto que contem mais objetos internamente
  // forEach for percorrento as entradas do objeto Object.entries(obj)
  // objFilho é o objeto encontrado no objPai
  Object.entries(objPai).forEach(([key, objFilho]) => {
    //console.log(key); a key encontrada ex Lesson1
    valor += objFilho.numeroEstudantes;
  });
  return valor;
};
//console.log(somarValorDentroDeUmObjeto(concatenarObjetos));

// obj, passado por parâmetro
// number, posição do valor dentro do objeto
// Object.values, retorna o valor dentro do objeto
// Object.values(obj)[number], retorna o valor dentro do objeto
const obterValorDeUmaPosicaoNoObjeto = (obj, number) =>
  Object.values(obj)[number];
//console.log(obterValorDeUmaPosicaoNoObjeto(lesson3, 2));

// (obj, chave, valor) parametros recebidos
const verificarSeExisteChaveComValor = (obj, chave, valor) => {
  // Variável de retorno
  let isEqual = false;

  // Object.entries(obj) Verificando as entradas do objeto ex professor: "Carlos"
  // percorre todas as entradas do objetos
  // [key, value] valores encontrados ex professor: "Carlos"
  Object.entries(obj).forEach(([key, value]) => {
    // chave parametro reecebido na função
    // key, valor da key encontrada no for
    // valor parametro reecebido na função
    // value, valor do value encontrado no for
    // key === chave && value === valor verifica se correspondem
    if (key === chave && value === valor) {
      isEqual = true;
    }
  });
  return isEqual;
};
//console.log(verificarSeExisteChaveComValor(lesson2, "professor", "Carlos"));

const somarValorDentroUmObjetoComUmaChaveEspecifica = (
  objPai,
  keyEspecifica
) => {
  let valor = 0;
  Object.entries(objPai).forEach(([key, objFilho]) => {
    if (keyEspecifica === objFilho.materia) {
      valor += objFilho.numeroEstudantes;
    }
  });
  return valor;
};
//console.log(somarValorDentroUmObjetoComUmaChaveEspecifica(concatenarObjetos, 'Matemática'));

const relatorioEspecifico = (objPai, keyEspecifica) => {
  let resultado = "";
  Object.entries(objPai).forEach(([key, objFilho]) => {
    if (keyEspecifica === objFilho.professor) {
      resultado += `Aula: ${objFilho.materia}, ${objFilho.numeroEstudantes} alunos / `;
    }
  });
  return resultado;
};
//console.log(relatorioEspecifico(concatenarObjetos, 'Maria Clara'));

const objeto_ = {
  food: { coxinha: 3.9, sanduiche: 9.9 },
  drinks: { agua: 3.9 },
};

Object.values(objeto_).forEach((objFilho) => {
  Object.keys(objFilho).forEach((key) => {
    //console.log(key);
  });
});
