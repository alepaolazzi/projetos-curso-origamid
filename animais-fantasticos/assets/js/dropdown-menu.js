import outsideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'active';

    // adiciona dois eventos como argumento padrão
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa dropdown e adiciona função outside click
  activeDropdownMenu(e) {
    e.preventDefault();
    const element = e.currentTarget;
    element.classList.add(this.activeClass);
    // função ativada logo após o clique no elemento
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos
  addDropdownEvents() {
    this.dropdownMenus.forEach((menu) => {
      // criar um array e fazer um forEach nele para usar mais de um parâmetro de evento
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownEvents();
    }
    return this;
  }
}
