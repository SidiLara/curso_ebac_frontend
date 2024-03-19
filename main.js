document.getElementById("campsValue").addEventListener("submit", function (e) {
    e.preventDefault();
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);
    const mensagemElement = document.querySelector(".mensagem");

    if (isNaN(campoA) || isNaN(campoB)) {
        mensagemElement.textContent = "Por favor, insira valores numéricos válidos.";
    } else if (campoB <= campoA) {
        mensagemElement.textContent = "O Campo B deve ser maior que o Campo A.";
    } else {
        mensagemElement.textContent = "Tudo OK!";
    }
});