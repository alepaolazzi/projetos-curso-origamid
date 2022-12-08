export default class AnimaNumeros {
  constructor(numeros, observadorTarget, observadorClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observadorClass = observadorClass;
    this.observadorTarget = document.querySelector(observadorTarget);
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do DOM com número em seu texto;
  // incrementa a partir de 0 até o num final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ativa incrementar num para cada item selecionado do DOM
  animaNumeros() {
    this.numeros.forEach((num) => this.constructor.incrementarNumero(num));
  }

  // função callback será executada com parametro especial com 'observação' em formato array like;
  handleMutation(mutacao) {
    // pega o 1º parametro do elemento atual, verifica se ativo caso sim inicia a função de contagem
    if (mutacao[0].target.classList.contains(this.observadorClass)) {
      // após verificação para de observar
      this.observador.disconnect();
      this.animaNumeros();
    }
  }

  // adiciona o mutation observador para verificar quando a classe ativo é adicionada ao target
  addMutationObservador() {
    // observará se houver alguma mudança nos atributos
    this.observador = new MutationObserver(this.handleMutation);

    // argumentos: alvo, o que observar
    this.observador.observe(this.observadorTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observadorTarget) {
      this.addMutationObservador();
    }
    return this;
  }
}
