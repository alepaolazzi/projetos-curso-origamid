import AnimaNumeros from './animaNumeros.js';

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  // Cria a div contento informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // anima os numeros de cada animal
  function animaNumerosAnimais() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // puxa os animais pelo json e cria cada animal
  async function criarAnimais() {
    try {
      // fetch, espera resposta e transforma resposta em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      // após transformar ativa as funções
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaNumerosAnimais();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  return criarAnimais();
}
