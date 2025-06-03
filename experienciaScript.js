const experiencias = [
{
    funcao: "Suporte Técnico",
    data: "2010 a 2021",
    empresa: "Diversas Empresas",
    descricao: "Atuação como profissional independente prestando suporte técnico presencial e remoto. Responsável por manutenção de computadores, configuração de redes e servidores, instalação de softwares, backup e recuperação de dados, além de orientação aos usuários. Foco em soluções ágeis, personalizadas e eficazes."
},
{
    funcao: "Suporte Técnico",
    data: "nov 2021 a mar 2022",
    empresa: "Waits",
    descricao: "Atendimento via chamados, suporte remoto e presencial em campo. Atuação com infraestrutura de redes e manutenção de equipamentos."
},

{
    funcao: "Suporte Técnico",
    data: "abr 2022 a nov 2022",
    empresa: "Revenda Auto",
    descricao: "Suporte técnico interno, com atendimento presencial aos usuários, manutenção de computadores, infraestrutura de rede e suporte aos sistemas da empresa."
},

  {
    funcao: "Suporte Técnico e Desenvolvedor Web",
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
    funcao: "Desenvolvedor WordPress",
    data: "Mar 2024 a Abr 2024",
    empresa: "Bassh",
    descricao: "Neste papel, trabalhei com WordPress, assumindo responsabilidades relacionadas ao desenvolvimento e manutenção de sites baseados na plataforma. A experiência envolveu a personalização de temas, plugins e a garantia de que os sites funcionassem corretamente em diferentes dispositivos e navegadores."
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
