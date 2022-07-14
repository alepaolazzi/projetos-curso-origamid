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

function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  // Forma alternativa de fazer o scroll suave

  /* section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
     */
}

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.6;
  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initTabNav();
initAccordion();
initScrollSuave();
initAnimacaoScroll();
