// 1- Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
const newEmployees = () => {
  const employees = {
    id1: newEmploy("Pedro Guerra"),
    id2: newEmploy("Luiza Drumond"),
    id3: newEmploy("Carla Paiva"),
  };
  return employees;
};

const newEmploy = (name) => {
  return `${name.toLowerCase().replace(" ", "_")}@trybe.com`;
};

console.log(newEmployees());

// 2- Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// Gera um número aleatório com base na chamada da função, arredondando esse numero para cima ou para baixo
const getRandomArbitrary = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const doingThings = (action, funcSort, chosenNumber) => {
  if (funcSort === chosenNumber) {
    return action(`Parabéns você ganhou com o número ${funcSort}`);
  } else {
    return action(
      `O numero sorteado foi ${funcSort}, e você apostou no ${chosenNumber}, tente novamente`
    );
  }
};

doingThings(console.log, getRandomArbitrary(1, 5), 4);

// 3- Crie uma HOF utilizando o conceito de currying . Passe como parâmetros a resposta correta (Ex: Gabarito) para uma pergunta e uma resposta a ser validada (Ex: Resposta de uma pessoa). Sua HOF deve checar se a resposta enviada pela pessoa usuária é correta. Se for, a função retorna true , se não for, a função retorna false . A validação da resposta não deve ser case sensitive. Deve ser possível chamar a HOF criada de forma encadeada (Ex: checarResposta('Gabarito')('Teste'))

// Resposta correta
const correctAnswer = "higher order function";

// Verificação em currying sem Case Sensitive
const resultCorrectAnswer = (cAnswer) => (uAnswer) => uAnswer === cAnswer;

// Chamando a verificação
const userAnswer = resultCorrectAnswer(correctAnswer);

// Visualizando a resposta do usuário
console.log(userAnswer("HIGHER ORDER FUNCTION"));

// 4- Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas. Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const rightAnswers = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const studentAnswers = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const checkAnswers = (student, check) => {
  let result = 0;
  for (const key in check) {
    if (student[key] !== "N.A") {
      if (student[key] === check[key]) {
        result += 1;
      } else {
        result -= 0.5;
      }
    }
  }
  console.log(result);
};

checkAnswers(studentAnswers, rightAnswers);

// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada. Para os próximos exercícios copie o código abaixo.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const { strength } = dragon;
  const dragonDmg = Math.floor((Math.random() * (strength - minDmg) + minDmg));
  return dragonDmg;
};

const warriorAttack = (warrior) => {
  const { weaponDmg } = warrior;
  const minDmg = warrior.strength;
  const maxDmg = minDmg * weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
  return warriorDamage;
};

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
    return turnStats;
};

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack();
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack();
    const mageDamage = mageTurnStats.damageDealt;
    const { manaSpent } = mageTurnStats;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  monsterTurn: (monsterAttack) => {
    const dragonDamage = monsterAttack();
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.monsterTurn(dragonAttack);
console.log(gameActions.turnResults());