export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li"); //seleciona todos li;
  const tabContent = document.querySelectorAll("[data-tab='content'] section"); // seleciona todas section;

  // verifica se os elementos existem;
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo"); // adiciona a classe ativo para o primeiro li;

    // funcão que adiciona classe ativo para um e remove dos outros;
    function activeTab(i) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabContent[i].dataset.anime;
      tabContent[i].classList.add("ativo", direcao);
    }

    // função seleciona cada li e add o evento que quando clicado ativa a função;

    tabMenu.forEach((liItem, i) => {
      liItem.addEventListener("click", () => {
        activeTab(i);
      });
    });
  }
}
