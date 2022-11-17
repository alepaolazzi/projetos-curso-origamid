export default function initFuncionamento() {
  // os dias e os meses comecam no 0, sendo assim DOMINGO = 0 e JANEIRO = 0

  const funcionamento = document.querySelector("[data-semana]");
  // map passando number, retrona tudo como number
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);

  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  // verificar se dia da semana está presente nos dias aberto
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  let horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioSemana < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
