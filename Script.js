let numeroSecreto = Math.floor(Math.random() * 101);
let tentativas = 0;

document.getElementById("check").addEventListener("click", verificar);
document.getElementById("restart").addEventListener("click", reiniciar);
document.getElementById("guess").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        verificar();
    }
});

function verificar() {
    const palpite = Number(document.getElementById("guess").value);
    const mensagem = document.getElementById("message");
    tentativas++;

    if (palpite < 0 || palpite > 100 || isNaN(palpite)) {
        mensagem.textContent = "Digite um número válido entre 0 e 100!";
        mensagem.style.color = "red";
    } else if (palpite === numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Você acertou em ${tentativas} tentativas.`;
        mensagem.style.color = "green";
        document.getElementById("check").disabled = true;
        document.getElementById("restart").style.display = "inline-block";
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "🔼 O número secreto é maior!";
        mensagem.style.color = "blue";
    } else {
        mensagem.textContent = "🔽 O número secreto é menor!";
        mensagem.style.color = "orange";
    }

    document.getElementById("guess").value = "";
    document.getElementById("guess").focus();
}

function reiniciar() {
    numeroSecreto = Math.floor(Math.random() * 101);
    tentativas = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("check").disabled = false;
    document.getElementById("restart").style.display = "none";
}1
