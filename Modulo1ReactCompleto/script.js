const menu = {
  seletor: '.principal',
};

console.log(menu.seletor);
console.log(menu.seletor.toUpperCase());

//------------- Segundo conceito -> Arrow functions------------------

const upperName = (name) => {
  return name.toUpperCase();
};

const lowerName = () => {}; // exemplo com arrow functions

console.log(upperName('andre'));

//------------------------Terceiro conceito-----------------------

function handleMouse(e) {
  const x = e.clientX;
  const y = e.clientY;
  const { clientX, clientY } = e;
  console.log(x, y, clientX, clientY);
}

const frutas = ['banana', 'uva'];
const [fruta1] = frutas;
console.log(fruta1);

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

document.addEventListener('click', handleMouse);

// ------------------------------------------- Quarto conceito ------------------------

function showList(empresa, clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList('Google', ['andre', 'rafael']);

const numeros = [10, 5, 20];
const maior = Math.max(...numeros);

console.log(maior);

const numeros2 = [...numeros, 24, 32, 33];
console.log(numeros2);

const carro = {
  cor: 'Azul',
  portas: 4,
};
carro.ano = 2020;

console.log(carro);

const carroAno = { ...carro, ano: 2008 };

console.log(carroAno);

//-----------------Quinto conceito - importando funções---------------

import quadrado from './quadrado.js';
import numeroAleatorio from './numeroAleatorio.js';

console.log(quadrado.areaQuadrado(5), quadrado.perimetroQuadrado(5));

console.log(numeroAleatorio());

//-------------------------Sexto Conceito - fetch---------------------

/*

fetch('https://ranekapi.origamid.dev/wp-json/api/produto')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

fetchProdutos('https://ranekapi.origamid.dev/wp-json/api/produto');

**/
//----------------------- Setimo conceito filter e map ------------------------------
const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

// Retorna uma array nova, que contem os items em
// que o retorno da função for verdadeiro
const precosFiltro = precos.filter((preco) => preco.includes('R$'));

console.log(precosFiltro);
// Retorna uma nova array, modificada com o
// retorno de cada item da função
const precoNumeros = precosFiltro.map((preco) =>
  Number(preco.replace('R$ ', '')),
);

console.log(precoNumeros);

// oitavo conceito

const grupoA = 100;
const grupoB = 200;

if (grupoA > grupoB) {
  console.log('Grupo A ganhou');
} else {
  console.log('Grupo B ganhou');
}

const vencedor = grupoA > grupoB ? 'Grupo A ganhou' : 'Grupo B ganhou';

console.log(vencedor);

const active = false;
const button = active && 'botão está ativo';

console.log(button);
