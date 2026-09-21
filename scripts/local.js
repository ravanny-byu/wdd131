// ========================================
// DADOS ESTÁTICOS DO CLIMA
// ========================================

const temperatura = 28;
const velocidadeVento = 12;


// ========================================
// FUNÇÃO PARA CALCULAR A SENSAÇÃO TÉRMICA
// Fórmula para Celsius e km/h
// ========================================

function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return 13.12 +
        0.6215 * temperatura -
        11.37 * Math.pow(velocidadeVento, 0.16) +
        0.3965 * temperatura * Math.pow(velocidadeVento, 0.16);
}


// ========================================
// VERIFICAÇÃO DAS CONDIÇÕES
// ========================================

const elementoSensacao = document.querySelector("#sensacao");

if (temperatura <= 10 && velocidadeVento > 4.8) {
    const sensacao = calcularSensacaoTermica(
        temperatura,
        velocidadeVento
    );

    elementoSensacao.textContent = `${sensacao.toFixed(1)} °C`;
} else {
    elementoSensacao.textContent = "N/A";
}


// ========================================
// ANO ATUAL
// ========================================

const dataAtual = new Date();

document.querySelector("#ano").textContent =
    dataAtual.getFullYear();


// ========================================
// ÚLTIMA MODIFICAÇÃO
// ========================================

const ultimaModificacao = document.lastModified;

document.querySelector("#ultima-modificacao").textContent =
    ultimaModificacao;
