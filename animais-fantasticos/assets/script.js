function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li"); //seleciona todos li;
  const tabContent = document.querySelectorAll(".js-tabcontent section"); // seleciona todas section;

  // verifica se os elementos existem;
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo"); // adiciona a classe ativo para o primeiro li;

    // funcão que adiciona classe ativo para um e remove dos outros;
    function activeTab(i) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[i].classList.add("ativo");
    }

    // função seleciona cada li e add o evento que quando clicado ativa a função;

    tabMenu.forEach((liItem, i) => {
      liItem.addEventListener("click", () => {
        activeTab(i);
      });
    });
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const ativo = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(ativo);
    accordionList[0].nextElementSibling.classList.add(ativo);

    console.log(accordionList);

    function activeAccordion() {
      this.classList.toggle(ativo);
      this.nextElementSibling.classList.toggle(ativo);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initTabNav();
initAccordion();
