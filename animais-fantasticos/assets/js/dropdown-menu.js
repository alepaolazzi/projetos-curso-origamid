import outsideClick from "./outside-click.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  const eventos = ["touchstart", "click"];

  dropdownMenus.forEach((menu) => {
    // criar um array e fazer um forEach nele para usar mais de um parâmetro de evento
    eventos.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(e) {
    e.preventDefault();
    this.classList.add("active");
    // função ativada logo após o clique no elemento
    outsideClick(this, eventos, () => {
      this.classList.remove("active");
    });
  }
}
