const projetos = [
    {
        nome: "Catálogo viagem",
        descricao: "Indicação de turismo.",
        link: "https://joaofelipecss.github.io/viagens--landing-page/"
    },
    {
        nome: "Notas de atletas",
        descricao: "Ranking de atletas",
        link: "https://joaofelipecss.github.io/notas-atletas/"
    },
  ];

const container = document.getElementById("lista-projetos");

projetos.forEach(proj => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${proj.nome}</h3>
        <p>${proj.descricao}</p>
        <a href="${proj.link}" target="_blank">Ver projeto</a>
    `;

    container.appendChild(card);
});
