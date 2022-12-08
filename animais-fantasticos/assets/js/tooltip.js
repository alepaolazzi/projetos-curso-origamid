export default class initTooltip {
  constructor(tootlips) {
    this.tooltips = document.querySelectorAll(tootlips);

    // bind do objeto da classe aso callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // os +20px são para não passar sobre a caixa, pois ela fica "piscando"
  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    // verifica a posição para não "vazar" na tela
    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 150}px`;
    } else {
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    }
  }

  // objetos podem ser passados como parametro para o eventListener, mas deve ter o handleEvent
  // desestruturação do event no parâmetro
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // cria a tooltip e adiciona os eventos de mouseMove e mouseLeave ao target
  onMouseOver({ currentTarget }) {
    // cria a tooltip box e coloca uma propriedade
    this.criarTooltipBox(currentTarget);

    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // adiciona os eventos de mouseOver a cada tooltip
  addTooltipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}
