const menu = {
  seletor: '.principal',
};

console.log(menu.seletor);
console.log(menu.seletor.toUpperCase());

// Segundo conceito -> Arrow functions

const upperName = (name) => {
  return name.toUpperCase();
};

const lowerName = () => {}; // exemplo com arrow functions

console.log(upperName('andre'));

//Terceiro conceito

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

// Quarto conceito

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

carroAno = { ...carro, ano: 2008 };

console.log(carroAno);
