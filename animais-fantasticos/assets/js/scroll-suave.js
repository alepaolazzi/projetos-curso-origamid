export default class ScrollSuave {
  constructor(links, opcoes) {
    this.linksInternos = document.querySelectorAll(links);
    if (opcoes === undefined) {
      this.opcoes = { behavior: 'smooth', block: 'start' };
    } else {
      this.opcoes = opcoes;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.opcoes);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }

  // Forma alternativa de fazer o scroll suave

  /*
     const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });
     */
}
