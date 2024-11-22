// Seleciona os botões
const btnNao = document.getElementById("btnNao");
const btnSim = document.getElementById("btnSim");

// Adiciona evento ao botão "Sim"
btnSim.addEventListener("click", () => {
  window.location.href = "https://youtu.be/do-UwrlI0pw?si=geywlzk_gFOiaYBv";
});

// Faz o botão "Não" se mover para uma posição aleatória
btnNao.addEventListener("mouseover", () => {
  const randomX = Math.random() * (window.innerWidth - btnNao.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - btnNao.offsetHeight);
  btnNao.style.left = `${randomX}px`;
  btnNao.style.top = `${randomY}px`;
});
