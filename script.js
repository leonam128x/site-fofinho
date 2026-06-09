const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");
const resultado = document.getElementById("resultado");
const botoes = document.getElementById("botoes");
const titulo = document.getElementById("titulo");

botaoNao.addEventListener("mouseover", () => {

    const largura = window.innerWidth - 150;
    const altura = window.innerHeight - 100;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
});

botaoSim.addEventListener("click", () => {

    titulo.innerHTML = "💕 EBAAAAAA! 💕";

    botoes.style.display = "none";

    resultado.style.display = "block";
});