const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");
const resultado = document.getElementById("resultado");
const botoes = document.getElementById("botoes");
const titulo = document.getElementById("titulo");

const botaoNao = document.getElementById("nao");

function fugir() {
    const largura = window.innerWidth - botaoNao.offsetWidth;
    const altura = window.innerHeight - botaoNao.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";
}

// Computador
botaoNao.addEventListener("mouseover", fugir);

// Celular
botaoNao.addEventListener("touchstart", function(e) {
    e.preventDefault();
    fugir();
});

botaoSim.addEventListener("click", () => {

    titulo.innerHTML = "💕 EBAAAAAA! 💕";

    botoes.style.display = "none";

    resultado.style.display = "block";
});
