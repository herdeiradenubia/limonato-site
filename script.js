// Simulação de dados do portfólio
const portfolioData = [
    {
        "imagem": "assets/DEIXE A MÚSICA.png",
        "titulo": "Deixe a música mais perto",
        "descricao": "Projeto de design gráfico"
    },
    {
        "imagem": "assets/Um pensamento (1).png",
        "titulo": "Um pensamento não é um fato",
        "descricao": "Social media para psicólogo(a)"
    },
    // Adicione mais projetos conforme necessário
];

// Carregar projetos do portfólio dinamicamente
const portfolioGrid = document.querySelector('.portfolio-grid');

portfolioData.forEach(projeto => {
    let item = `
        <div class="portfolio-item">
            <img src="${projeto.imagem}" alt="${projeto.titulo}">
            <div class="portfolio-info">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
            </div>
        </div>
    `;
    portfolioGrid.innerHTML += item;
});