const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
//Percorrer (iterar) uma lista de elementos
for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}
// document.querySelector("#minhaDiv p").textContent = "Chega de calor";
const contadores = document.querySelectorAll(".contador");
let tempoAtual = new Date();
const tempoObjetivo1 = new Date("2024-05-03T00:00:00");
const tempoObjetivo2 = new Date("2024-10-17T00:00:00");
const tempoObjetivo3 = new Date("2024-06-25T00:00:00");
const tempoObjetivo4 = new Date("2024-12-25T00:00:00");
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  return (
    dias +
    " dias " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos"
  );
}

for (let i = 0; i < contadores.length; i++) {
  contadores[i].textContent = calculaTempo(tempos[i]);
}
