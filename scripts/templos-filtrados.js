const container = document.querySelector("#temples-container");
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");


// ========================================
// CRIAR UM CARD
// ========================================

function criarCard(templo) {

    const card = document.createElement("article");
    card.classList.add("temple-card");

    const imagem = document.createElement("img");

    imagem.src = templo.urlDaImagem;
    imagem.alt = templo.textoAlternativo;
    imagem.loading = "lazy";
    imagem.width = 400;
    imagem.height = 250;

    const informacoes = document.createElement("div");
    informacoes.classList.add("temple-info");

    const nome = document.createElement("h3");
    nome.textContent = templo.nomeDoTemplo;

    const localizacao = document.createElement("p");

    localizacao.innerHTML =
        `<strong>Localização:</strong> ${templo.localizacao}`;

    const dedicacao = document.createElement("p");

    dedicacao.innerHTML =
        `<strong>Dedicação:</strong> ${templo.dataDedicacao}`;

    const area = document.createElement("p");

    area.innerHTML =
        `<strong>Área:</strong> ${templo.areaEmPesQuadrados.toLocaleString("pt-BR")} pés²`;

    informacoes.appendChild(nome);
    informacoes.appendChild(localizacao);
    informacoes.appendChild(dedicacao);
    informacoes.appendChild(area);

    card.appendChild(imagem);
    card.appendChild(informacoes);

    return card;
}


// ========================================
// MOSTRAR TEMPLOS
// ========================================

function mostrarTemplos(lista) {

    container.innerHTML = "";

    lista.forEach((templo) => {
        const card = criarCard(templo);
        container.appendChild(card);
    });
}


// ========================================
// FILTROS
// ========================================

function filtrarTemplos(filtro) {

    let resultado;

    switch (filtro) {

        case "antigos":
            resultado = templos.filter((templo) => {
                const ano = obterAno(templo.dataDedicacao);
                return ano < 1900;
            });
            break;

        case "novos":
            resultado = templos.filter((templo) => {
                const ano = obterAno(templo.dataDedicacao);
                return ano > 2000;
            });
            break;

        case "grandes":
            resultado = templos.filter((templo) => {
                return templo.areaEmPesQuadrados > 90000;
            });
            break;

        case "pequenos":
            resultado = templos.filter((templo) => {
                return templo.areaEmPesQuadrados < 10000;
            });
            break;

        default:
            resultado = templos;
    }

    mostrarTemplos(resultado);
}


// ========================================
// OBTER O ANO
// ========================================

function obterAno(data) {

    const partes = data.split(" ");

    return Number(partes[partes.length - 1]);
}


// ========================================
// MENU MOBILE
// ========================================

menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");

    const menuAberto = nav.classList.contains("open");

    if (menuAberto) {
        menuButton.setAttribute("aria-label", "Fechar menu");
        menuButton.textContent = "✕";
    } else {
        menuButton.setAttribute("aria-label", "Abrir menu");
        menuButton.textContent = "☰";
    }
});


// ========================================
// LINKS DO MENU
// ========================================

const links = document.querySelectorAll("nav a");

links.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const filtro = link.dataset.filtro;

        filtrarTemplos(filtro);

        nav.classList.remove("open");

        menuButton.setAttribute("aria-label", "Abrir menu");
        menuButton.textContent = "☰";
    });
});


// ========================================
// ANO ATUAL
// ========================================

const anoAtual = new Date().getFullYear();

document.querySelector("#currentyear").textContent = anoAtual;


// ========================================
// ÚLTIMA MODIFICAÇÃO
// ========================================

document.querySelector("#lastModified").textContent =
    document.lastModified;


// ========================================
// CARREGAMENTO INICIAL
// ========================================

mostrarTemplos(templos);