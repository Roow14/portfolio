const experiencias = [
  {
    funcao: "Desenvolvedor Front-End",
    data: "Dez 2022 a Fev 2023",
    empresa: "Fisiopeti Clínica De Reabilitação",
    descricao: "Minha primeira oportunidade na área da programação surgiu quando fui contratado para o suporte técnico em uma clínica. Acabei assumindo a responsabilidade pelo suporte de um sistema privado já existente. Este sistema era voltado para o cadastro e agendamento de pacientes. Curiosamente, mesmo sem ter acesso ao código-fonte, decidi recriar completamente o sistema do zero, utilizando HTML e CSS."
  },
  {
    funcao: "Desenvolvedor Web",
    data: "Fev 2023 a Fev 2024",
    empresa: "Forecast Web",
    descricao: "Como desenvolvedor, este é meu primeiro contrato assinado. Fui contratado para a posição de front-end junior . O sistema da Fisiopeti foi originalmente desenvolvido pela Forecast Web. Tive que entrar em contato com a Forecast e, após avaliarem positivamente o meu trabalho, me fizeram uma proposta. Decidi aceitar, e este é o meu emprego atual."
  },
  {
    funcao: "Desenvolvedor Drupal",
    data: "Fer 2024",
    empresa: "IBDMAR",
    descricao: "Desenvolvi um site corporativo totalmente do zero utilizando o CMS Drupal, atendendo à demanda de um cliente que precisava de um website escalável, seguro e com funcionalidades personalizadas para gerenciar conteúdo de forma eficiente."
  },
  {
    funcao: "Desenvolvedor WordPress",
    data: "Mar 2024 a Abr 2024",
    empresa: "Bassh",
    descricao: "Neste papel, trabalhei com WordPress, assumindo responsabilidades relacionadas ao desenvolvimento e manutenção de sites baseados na plataforma. A experiência envolveu a personalização de temas, plugins e a garantia de que os sites funcionassem corretamente em diferentes dispositivos e navegadores."
  },
  {
    funcao: "Desenvolvedor WordPress",
    data: "Nov 2024",
    empresa: "Apptour",
    descricao: "Desenvolvi uma landing page moderna e eficiente utilizando WordPress para atender às necessidades de um cliente que desejava capturar leads de maneira estratégica. O objetivo era criar uma página focada em conversões, com design atrativo, carregamento rápido e otimização para dispositivos móveis."
  }
];

function inicializarExperiencia() {
  const listaItens = document.querySelectorAll('.lista-empresas ul li');

  listaItens.forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.getAttribute('data-index'));
      mostrarExperiencia(index);
    });
  });

  function mostrarExperiencia(index) {
    const exp = experiencias[index];
    document.getElementById('funcao').textContent = exp.funcao;
    document.getElementById('data').textContent = exp.data;
    document.getElementById('empresa').textContent = exp.empresa;
    document.getElementById('descricao').textContent = exp.descricao;

    listaItens.forEach((el, i) => {
      el.classList.toggle('ativo', i === index);
    });
  }

  mostrarExperiencia(0);
}
