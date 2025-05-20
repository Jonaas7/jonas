document.querySelector(".submit-btn").addEventListener("click", function () {
    const respostasCorretas = [
        "JavaScript",
        "#id",       
        "POST",      
        "Document Object Model",
        "display: flex;"
    ];

    let pontuacao = 0;
    let total = respostasCorretas.length;
    let feedbackHTML = "";

    for (let i = 1; i <= total; i++) {
        const respostaSelecionada = document.querySelector(`input[name="pergunta${i}"]:checked`);
        if (respostaSelecionada) {
            const resposta = respostaSelecionada.value;
            if (resposta === respostasCorretas[i - 1]) {
                pontuacao++;
                feedbackHTML += `<p><span class="acertou">Pergunta ${i}: Correta!</span></p>`;
            } else {
                feedbackHTML += `<p><span class="errou">Pergunta ${i}: Errada</span> — Resposta correta: <strong>${respostasCorretas[i - 1]}</strong></p>`;
            }
        } else {
            feedbackHTML += `<p><span class="errou">Pergunta ${i}: Não respondida</span> — Resposta correta: <strong>${respostasCorretas[i - 1]}</strong></p>`;
        }
    }

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Você acertou <strong>${pontuacao}</strong> de <strong>${total}</strong> perguntas.</p>
        <div class="feedback">${feedbackHTML}</div>
    `;
    resultadoDiv.style.display = "block";
});
