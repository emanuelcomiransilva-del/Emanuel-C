// Estilo da página
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#f4f4f4";

// Cabeçalho
const header = document.createElement("header");
header.style.background = "#222";
header.style.color = "white";
header.style.padding = "20px";
header.style.textAlign = "center";

const titulo = document.createElement("h1");
titulo.textContent = "Blog de Tecnologia";

const subtitulo = document.createElement("p");
subtitulo.textContent = "Notícias, curiosidades e tendências do mundo da tecnologia.";

header.appendChild(titulo);
header.appendChild(subtitulo);

document.body.appendChild(header);

// Conteúdo principal
const main = document.createElement("main");
main.style.maxWidth = "900px";
main.style.margin = "30px auto";
main.style.padding = "20px";

// Lista de artigos
const artigos = [
    {
        titulo: "Inteligência Artificial em 2026",
        texto: "A IA está cada vez mais presente em empresas, escolas e na vida das pessoas."
    },
    {
        titulo: "Como aprender JavaScript",
        texto: "JavaScript é uma das linguagens mais utilizadas para criar páginas e aplicações web."
    },
    {
        titulo: "O futuro da Computação",
        texto: "Computação em nuvem, IA e segurança digital estão entre as principais tendências."
    }
];

artigos.forEach(artigo => {
    const card = document.createElement("div");
    card.style.background = "white";
    card.style.padding = "20px";
    card.style.marginBottom = "20px";
    card.style.borderRadius = "10px";
    card.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

    const h2 = document.createElement("h2");
    h2.textContent = artigo.titulo;
    h2.style.color = "#333";

    const p = document.createElement("p");
    p.textContent = artigo.texto;

    const botao = document.createElement("button");
    botao.textContent = "Ler mais";
    botao.style.padding = "10px 20px";
    botao.style.border = "none";
    botao.style.background = "#007BFF";
    botao.style.color = "white";
    botao.style.borderRadius = "5px";
    botao.style.cursor = "pointer";

    botao.onclick = () => {
        alert("Obrigado por visitar o Blog de Tecnologia!");
    };

    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(botao);

    main.appendChild(card);
});

document.body.appendChild(main);

// Rodapé
const footer = document.createElement("footer");
footer.style.background = "#222";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "15px";
footer.textContent = "© 2026 - Blog de Tecnologia";

document.body.appendChild(footer);