function inicializarProjetos() {
  const itens = document.querySelectorAll('.lista-projetos li');
  const titulo = document.getElementById('titulo');
  const descricao = document.getElementById('descricao');
  const imagem = document.getElementById('imagem');

  const projetos = [
    {
      titulo: 'Projeto Rater',
      imagem: './img/rater.jpg',
      descricao: `
        <p>Este projeto é um site de streaming de filmes desenvolvido utilizando as mais modernas tecnologias front-end para proporcionar uma experiência de usuário rica e dinâmica. O projeto é construído com React e TypeScript, o que garante uma aplicação escalável e com tipagem segura. A gestão do estado global é feita com Zustand, permitindo um gerenciamento de dados eficiente e reativo. Para a estilização dos componentes, são utilizados styled-components, que oferecem um sistema de estilos modular e reutilizável, mantendo o código CSS organizado e específico para cada componente.</p>

      <h3>Funcionalidades Principais:</h3>
      <ol>
        <li>
          <strong>Exibição de Filmes:</strong>
          <ul>
            <li>O site exibe uma variedade de filmes organizados em diferentes categorias, como lançamentos, recomendados e assistidos.</li>
            <li>O layout inclui componentes como SelectionContainer, que destaca filmes em uma seção principal, e Lancamento, que mostra os últimos lançamentos em um carrossel interativo.</li>
          </ul>
        </li>

        <li>
          <strong>Banners Dinâmicos:</strong>
          <ul>
            <li>Banners grandes e pequenos são usados para destacar filmes específicos. Esses banners incluem títulos, descrições, avaliações, e botões para assistir ao trailer ou ao filme.</li>
            <li>A exibição dos banners é responsiva e adaptada tanto para desktop quanto para dispositivos móveis.</li>
          </ul>
        </li>

        <li>
          <strong>API Integration:</strong>
          <ul>
            <li>O projeto consome dados de uma API pública de filmes (como o IMDB) para exibir tendências da semana, detalhes de filmes, e outras informações relevantes.</li>
            <li>A aplicação utiliza paths específicos, como /trending/all/week, para buscar os filmes mais populares em determinado período.</li>
          </ul>
        </li>
      </ol>
    `
    },
     {
  titulo: 'Projeto Plataforma de Streaming ',
  descricao: `
    <p>Projeto desenvolvido com <strong>HTML</strong>, <strong>CSS</strong> e integração com uma API pública de filmes, simulando uma plataforma de streaming inspirada na Netflix.</p>

    <h4>Menu Lateral Fixo:</h4>
    <p>Menu fixo à esquerda com categorias como EM ALTA, ORIGINAIS, NETFLIX, POPULARES, COMÉDIAS, ROMANCES e DOCUMENTÁRIOS. Navegação visual, sem troca real de conteúdo.</p>

    <h4>API de Filmes:</h4>
    <p>Busca dinâmica de filmes via API, exibindo imagens e sinopses curtas para facilitar a escolha dos usuários.</p>

    <h4>Design e Responsividade:</h4>
    <p>Layout centralizado com fundo preto e área de filmes transparente. Interface responsiva que se adapta a diferentes dispositivos, mantendo a legibilidade.</p>

    <h4>Funcionalidade:</h4>
    <p>Exibição simples de filmes e sinopses, sem interações avançadas como trailers ou links externos.</p>
  `,
  imagem: 'imagens/streaming.jpg' // ajuste conforme necessidade
}

,
    {
      titulo: 'Fastfood',
  imagem: 'imagens/fastfood.jpg',
  descricao: `
    <p>Este projeto é uma simulação de um site de fast food onde os usuários podem escolher entre dois restaurantes (McDonald's e Burger King), explorar categorias de produtos e fazer pedidos. O sistema calcula o total dos pedidos conforme a quantidade de cada item é ajustada.</p>
    <h3>Tecnologias Utilizadas:</h3>
    <ul>
      <li><strong>HTML5:</strong> Estrutura da página.</li>
      <li><strong>CSS3:</strong> Estilização e layout.</li>
      <li><strong>JavaScript:</strong> Funcionalidade interativa e manipulação do DOM.</li>
      <li><strong>JSON:</strong> Estrutura de dados dos itens do menu.</li>
    </ul>
  `
    },
   {
  titulo: 'Projeto Catálogo de Filmes com API e PHP',
  imagem: 'imagens/catalago-filmes.jpg', // ajuste o caminho da imagem conforme seu projeto
  descricao: `
    <p>✨ Projeto de Catálogo de Filmes com API e PHP ✨</p>
    <h3>🔎 O que foi solicitado:</h3>
    <ul>
      <li>Desenvolver uma aplicação web que consumisse uma API para listar filmes e apresentasse detalhes individuais.</li>
      <li>Um catálogo com imagens dos filmes.</li>
      <li>Um sistema para exibir informações detalhadas ao clicar em um filme.</li>
      <li>Responsividade para diferentes dispositivos.</li>
    </ul>
    <h3>💡 O que eu fiz e como fiz:</h3>
    <ul>
      <li>Desenvolvimento Back-End: Implementei um controlador em PHP para consumir dados da API e processá-los no servidor.</li>
      <li>Front-End Responsivo: Utilizei HTML, CSS e JavaScript para criar uma interface intuitiva e adaptável a dispositivos móveis.</li>
      <li>Funcionalidade de Detalhes: Configurei links nas imagens do catálogo que levam a uma página detalhada utilizando parâmetros de URL.</li>
      <li>Melhorias: Adicionei uma camada de escurecimento ao banner, estilizei os títulos para melhor visibilidade e utilizei placeholders para filmes sem imagens.</li>
      <li>Infraestrutura: Organizei o projeto em uma estrutura modular, com pastas para controladores, modelos, visões e assets.</li>
      <li>Testes Locais: Configurei o projeto para rodar no servidor local com suporte a responsividade e testei em diferentes tamanhos de tela.</li>
    </ul>
   
  `
},

   {
  titulo: 'Marketplace de NFTs',
  imagem: 'imagens/marketplace-nfts.jpg', // ajuste conforme seu projeto
  descricao: `
    <p>🎬🚀 Apresentando meu mais recente projeto: Um marketplace de NFTs!</p>
    <p>Acabei de finalizar um projeto desafiador e muito empolgante: um marketplace de NFTs desenvolvido com tecnologias modernas e boas práticas de desenvolvimento.</p>
    <h3>✅ Sobre o projeto:</h3>
    <p>A aplicação permite a exibição de produtos (NFTs) com detalhes completos, além de um sistema de carrinho de compras onde o usuário pode adicionar, visualizar e remover itens. Todo o estado do carrinho é gerenciado de forma eficiente com Redux.</p>
    <h3>💻 Tecnologias utilizadas:</h3>
    <ul>
      <li><strong>#NextJS</strong> – Framework moderno para React, com suporte a Server Side Rendering (SSR) e Static Site Generation (SSG).</li>
      <li><strong>#React</strong> – Biblioteca JavaScript para construção de interfaces reativas e performáticas.</li>
      <li><strong>#TypeScript</strong> – Garantindo tipagem estática e maior segurança no código.</li>
      <li><strong>#Redux</strong> – Gerenciamento centralizado do estado, utilizado no controle do carrinho de compras.</li>
      <li><strong>#Docker</strong> – Containerização da aplicação para um ambiente de desenvolvimento e produção mais eficiente.</li>
      <li><strong>#CSSModules</strong> – Estilização modular e isolada para maior organização do código.</li>
    </ul>
   
  `
}
,
    {
  titulo: 'Projeto Full Stack com Angular 17 + ASP.NET Core',
  imagem: 'imagens/fullstack.jpg', // ajuste conforme necessário
  descricao: `
    <p>🚀 Desafio técnico integrando front-end em Angular 17 com uma API mockada em ASP.NET Core! 💻</p>
    <p>O objetivo foi desenvolver uma aplicação simples, mas funcional, que consome uma API simulada para exibir uma lista de pessoas em uma tabela paginada. O projeto inclui:</p>
    <ul>
      <li>✅ API criada com ASP.NET Core gerando 30 registros de pessoas com dados mockados (usando a biblioteca Bogus)</li>
      <li>✅ Tabela com paginação, filtro por nome e carregamento via botão</li>
      <li>✅ UI construída com Angular Material</li>
      <li>✅ Separação clara entre front-end e back-end</li>
      <li>✅ Projeto funcionando localmente, sem necessidade de banco de dados</li>
    </ul>
    
  `
}
  ];

  itens.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Atualiza conteúdo com HTML na descrição
      titulo.textContent = projetos[index].titulo;
      descricao.innerHTML = projetos[index].descricao;
      imagem.src = projetos[index].imagem;
      imagem.alt = projetos[index].titulo;

      // Ajusta item ativo visualmente
      itens.forEach(li => li.classList.remove('ativo'));
      item.classList.add('ativo');
    });
  });
}
