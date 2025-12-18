// Cursos e Certificações - Barbara Lopes
const certificacoes = [
    {
        titulo: "Curso de extensão em berçário neonatal",
        instituicao: "Universidade São Camilo",
        ano: 1999
    },
    {
        titulo: "Curso de extensão em Diagnóstico Psicodinâmico Breve",
        instituicao: "Universidade Mackenzie",
        ano: 1999
    },
    {
        titulo: "Curso de extensão em Transtornos de Aprendizagem",
        instituicao: "Faculdade de Medicina do ABC",
        ano: 2005
    },
    {
        titulo: "Curso de extensão em Amor Patológico",
        instituicao: "USP",
        ano: 2024
    }
];

const congressos = [
    {
        titulo: "XXXIX Congresso Brasileiro de Psiquiatria em Fortaleza",
        ano: "Outubro de 2022",
    },
    {
        titulo: "XL Congresso Brasileiro de Psiquiatria em Salvador",
        ano: "Outubro de 2023",
    },
    {
        titulo: "XLI Congresso Brasileiro de Psiquiatria",
        ano: "Outubro de 2024",
    }
];

function renderCongressos() {
    const congressosContainer = document.getElementById("congressos");
    if (!congressosContainer) {
        console.error("Elemento #congressos não encontrado");
        return;
    }
    const titulo = document.createElement("h2");
    titulo.className = "section-title";
    titulo.textContent = "Congressos";
    congressosContainer.appendChild(titulo);

    const grid = document.createElement("div");
    grid.className = "grid-congresso";

    congressos.forEach((congresso) => {
        const congressoCard = createCongressoCard(congresso);
        grid.appendChild(congressoCard);
    });
    congressosContainer.appendChild(grid);
}

function createCongressoCard(congresso) {
    const card = document.createElement("div");
    card.className = "formation-item";

    card.innerHTML = `
        <div class="formation-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        </div>
        <div class="formation-content">
            <h3>${congresso.titulo}</h3>
            <span class="formation-year">${congresso.ano}</span>
        </div>
    `;

    return card;
}


/**
 * Renderiza os cards de certificação na página
 */
function renderCertificacoes() {
    const certificacoesContainer = document.getElementById("certificacao");

    // Verifica se o elemento existe
    if (!certificacoesContainer) {
        console.error("Elemento #certificacao não encontrado");
        return;
    }

    // Adiciona o título da seção
    const titulo = document.createElement("h2");
    titulo.className = "section-title";
    titulo.textContent = "Cursos e Certificações";
    certificacoesContainer.appendChild(titulo);

    // Cria o container do grid
    const gridContainer = document.createElement("div");
    gridContainer.className = "formation-grid";

    // Renderiza cada certificação
    certificacoes.forEach((cert) => {
        const certCard = createCertificacaoCard(cert);
        gridContainer.appendChild(certCard);
    });

    certificacoesContainer.appendChild(gridContainer);
}

/**
 * Cria um card de certificação seguindo o mesmo padrão visual das formações
 * @param {Object} cert - Objeto com dados da certificação
 * @returns {HTMLElement} - Elemento div com o card formatado
 */
function createCertificacaoCard(cert) {
    const card = document.createElement("div");
    card.className = "formation-item";

    card.innerHTML = `
        <div class="formation-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
        </div>
        <div class="formation-content">
            <h3>${cert.titulo}</h3>
            <p>${cert.instituicao}</p>
            <span class="formation-year">${cert.ano}</span>
        </div>
    `;

    return card;
}

// Executa quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", () => {
    renderCertificacoes();
    renderCongressos();
});