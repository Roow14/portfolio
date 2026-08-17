const experiencias = [
  {
    funcao: "Suporte Técnico",
    data: "2010 a 2021",
    empresa: "Diversas Empresas",
    descricao:
      "Atuação como profissional independente prestando suporte técnico presencial e remoto. Responsável pela manutenção de computadores, configuração de redes e servidores, instalação de softwares, backup e recuperação de dados, além da orientação aos usuários. Foco em soluções ágeis, personalizadas e eficazes."
  },

  {
    funcao: "Suporte Técnico",
    data: "Nov 2021 a Mar 2022",
    empresa: "Waits",
    descricao:
      "Atendimento por chamados, suporte remoto e presencial em campo. Atuação com infraestrutura de redes, configuração de equipamentos, manutenção de computadores e auxílio aos usuários."
  },

  {
    funcao: "Suporte Técnico",
    data: "Abr 2022 a Nov 2022",
    empresa: "Revenda Auto",
    descricao:
      "Suporte técnico interno, atendimento presencial aos usuários, manutenção de computadores, infraestrutura de rede, instalação de programas e suporte aos sistemas da empresa."
  },

  {
    funcao: "Suporte Técnico e Desenvolvedor Web",
    data: "Dez 2022 a Fev 2023",
    empresa: "Fisiopeti Clínica de Reabilitação",
    descricao:
      "Minha primeira oportunidade na área da programação surgiu quando fui contratado para prestar suporte técnico em uma clínica. Além das atividades de suporte, acompanhei um sistema utilizado para cadastro e agendamento de pacientes. Mesmo sem acesso ao código-fonte original, desenvolvi uma nova versão do sistema utilizando HTML e CSS."
  },

  {
    funcao: "Desenvolvedor Web",
    data: "Fev 2023 a Fev 2024",
    empresa: "Forecast Web",
    descricao:
      "Atuação como desenvolvedor front-end júnior. A oportunidade surgiu após a empresa avaliar positivamente o sistema desenvolvido para a Fisiopeti. Durante esse período, trabalhei no desenvolvimento e manutenção de interfaces web utilizando HTML, CSS e JavaScript."
  },

  {
    funcao: "Desenvolvedor WordPress",
    data: "Mar 2024 a Abr 2024",
    empresa: "Bassh",
    descricao:
      "Atuação com WordPress, assumindo responsabilidades relacionadas ao desenvolvimento e à manutenção de sites. A experiência envolveu personalização de temas, ajustes em plugins e garantia de funcionamento adequado em diferentes dispositivos e navegadores."
  },

  {
    funcao: "Desenvolvedor Full Stack",
    data: "2026 Atual",
    empresa:
      "AGIR — Hospital e Maternidade Municipal Santa Ana (HMSA)",
    descricao:
      "Responsável pelo desenvolvimento de sistemas web internos e soluções para gestão hospitalar. Atuação com PHP, Oracle Database, SQL, OCI8, JavaScript, HTML5 e CSS3, desenvolvendo dashboards em tempo real, APIs, integrações com o sistema MV, consultas SQL de alta complexidade, monitoramento operacional e automação de processos. Entre os projetos desenvolvidos destacam-se os painéis do Centro Cirúrgico, Leitos, Pronto-Socorro, Farmácia, Nutrição, Almoxarifado, NIR, Médicos Plantonistas, Aplicativo Mobile HMSA, Portal Corporativo, Sistema de Alerta de Emergência e relatórios gerenciais, contribuindo para a otimização dos fluxos assistenciais e para a tomada de decisões das equipes hospitalares."
  }
];


function inicializarExperiencia() {
  const listaItens = document.querySelectorAll(
    ".lista-empresas li[data-index]"
  );

  const campoFuncao =
    document.getElementById("funcao");

  const campoData =
    document.getElementById("data");

  const campoEmpresa =
    document.getElementById("empresa");

  const campoDescricao =
    document.getElementById("descricao");


  if (
    listaItens.length === 0 ||
    !campoFuncao ||
    !campoData ||
    !campoEmpresa ||
    !campoDescricao
  ) {
    console.error(
      "Os elementos da página de experiência não foram encontrados."
    );

    return;
  }


  function mostrarExperiencia(index) {
    const experiencia = experiencias[index];

    if (!experiencia) {
      console.error(
        `Não existe experiência no índice ${index}.`
      );

      campoFuncao.textContent =
        "Experiência não encontrada";

      campoData.textContent = "";

      campoEmpresa.textContent = "";

      campoDescricao.textContent =
        "Verifique o data-index no experiencia.html.";

      return;
    }

    campoFuncao.textContent =
      experiencia.funcao;

    campoData.textContent =
      experiencia.data;

    campoEmpresa.textContent =
      experiencia.empresa;

    campoDescricao.textContent =
      experiencia.descricao;


    listaItens.forEach(item => {
      const indiceItem = Number(
        item.dataset.index
      );

      item.classList.toggle(
        "ativo",
        indiceItem === index
      );
    });
  }


  listaItens.forEach(item => {
    item.onclick = function () {
      const index = Number(
        this.dataset.index
      );

      mostrarExperiencia(index);
    };
  });


  mostrarExperiencia(0);
}