export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((num) => {
      const total = +num.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        num.innerText = start;
        if (start > total) {
          num.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  // função callback que será executada com parametro especial com 'observação' em formato array like;
  function handleMutation(mutacao) {
    // pega o primeiro parametro do elemento atual, verifica se contem ativo, caso sim inicia a função da contagem
    if (mutacao[0].target.classList.contains("ativo")) {
      //após verificação para de observar
      observador.disconnect();
      animaNumeros();
    }
  }

  // elemento que será observado
  const observadorAlvo = document.querySelector(".numeros");
  // observará se houver alguma mudança nos atributos
  const observador = new MutationObserver(handleMutation);

  // argumentos: alvo, o que observar
  observador.observe(observadorAlvo, { attributes: true });
}
