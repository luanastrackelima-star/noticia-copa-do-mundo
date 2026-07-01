document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("btnMensagem");
    const mensagem = document.getElementById("mensagem");

    if (botao && mensagem) {
        botao.addEventListener("click", function () {
            mensagem.innerHTML = "🇧🇷 O Brasil venceu o Japão por 2 a 1 e está classificado para as oitavas de final da Copa do Mundo 2026!";
        });
    }

});