function inicializarProjetos() {

    const itens = document.querySelectorAll(".lista-projetos li");
    const titulo = document.getElementById("titulo");
    const descricao = document.getElementById("descricao");
    const imagem = document.getElementById("imagem");
    const containerImagem = document.getElementById(
        "containerImagemProjeto"
    );

    /*
    |--------------------------------------------------------------------------
    | VALIDAÇÃO DOS ELEMENTOS
    |--------------------------------------------------------------------------
    */

    if (!itens.length || !titulo || !descricao) {

        console.warn(
            "Não foi possível inicializar a seção de projetos."
        );

        return;
    }

    /*
    |--------------------------------------------------------------------------
    | LISTA DE PROJETOS
    |--------------------------------------------------------------------------
    */

    const projetos = [

        /*
        |--------------------------------------------------------------------------
        | 0 - HMSA COMMAND CENTER
        |--------------------------------------------------------------------------
        */

        {
            titulo: "HMSA Command Center",

            imagem: "",

            descricao: `
                <p>
                    Plataforma desenvolvida para centralizar os principais
                    indicadores operacionais do ambiente hospitalar em uma
                    única tela.
                </p>

                <p>
                    O painel consulta diretamente o banco de dados Oracle,
                    organiza informações assistenciais e apresenta os dados
                    de forma visual, objetiva e atualizada.
                </p>

                <h3>Principais funcionalidades:</h3>

                <ul>
                    <li>Quantidade de pacientes internados.</li>
                    <li>Total de leitos livres e ocupados.</li>
                    <li>Taxa de ocupação hospitalar.</li>
                    <li>Quantidade de pacientes no pronto-socorro.</li>
                    <li>Exames pendentes.</li>
                    <li>Prescrições pendentes.</li>
                    <li>Médicos em atividade.</li>
                    <li>Altas pendentes.</li>
                    <li>Alertas críticos.</li>
                    <li>Monitoramento dos gargalos assistenciais.</li>
                </ul>

                <h3>Tecnologias utilizadas:</h3>

                <ul>
                    <li>PHP.</li>
                    <li>Oracle Database.</li>
                    <li>SQL.</li>
                    <li>OCI8.</li>
                    <li>JavaScript.</li>
                    <li>HTML5.</li>
                    <li>CSS3.</li>
                    <li>APIs em JSON.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 1 - CENTRAL DO PRONTO-SOCORRO
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Central do Pronto-Socorro",

            imagem: "",

            descricao: `
                <p>
                    Painel desenvolvido para acompanhar, em tempo real,
                    o fluxo dos pacientes dentro do pronto-socorro.
                </p>

                <p>
                    O sistema identifica em qual etapa cada paciente está,
                    calcula o tempo de espera e ajuda a localizar possíveis
                    gargalos no atendimento.
                </p>

                <h3>Etapas monitoradas:</h3>

                <ul>
                    <li>Retirada da senha.</li>
                    <li>Triagem.</li>
                    <li>Recepção.</li>
                    <li>Classificação de risco.</li>
                    <li>Espera pelo atendimento médico.</li>
                    <li>Atendimento médico.</li>
                    <li>Exames.</li>
                    <li>Medicação.</li>
                    <li>Aguardando alta.</li>
                </ul>

                <h3>Recursos desenvolvidos:</h3>

                <ul>
                    <li>Contadores por etapa.</li>
                    <li>Tempo médio de espera.</li>
                    <li>Atualização automática.</li>
                    <li>Destaque para pacientes atrasados.</li>
                    <li>Filtros por setor e especialidade.</li>
                    <li>Identificação de gargalos assistenciais.</li>
                </ul>

                <h3>Tecnologias utilizadas:</h3>

                <ul>
                    <li>PHP.</li>
                    <li>Oracle Database.</li>
                    <li>SQL.</li>
                    <li>JavaScript.</li>
                    <li>HTML5 e CSS3.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 2 - PAINEL DE LEITOS
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Painel de Leitos Hospitalares",

            imagem: "",

            descricao: `
                <p>
                    Sistema desenvolvido para acompanhar os leitos do
                    pronto-socorro, enfermarias e unidades de terapia intensiva.
                </p>

                <h3>Informações apresentadas:</h3>

                <ul>
                    <li>Número do leito.</li>
                    <li>Unidade de internação.</li>
                    <li>Nome do paciente.</li>
                    <li>Data de nascimento.</li>
                    <li>Idade.</li>
                    <li>Tempo de permanência.</li>
                    <li>Status atual do leito.</li>
                </ul>

                <h3>Status monitorados:</h3>

                <ul>
                    <li>Ocupado.</li>
                    <li>Disponível.</li>
                    <li>Em limpeza.</li>
                    <li>Reservado.</li>
                    <li>Em transferência.</li>
                    <li>Em manutenção.</li>
                    <li>Interditado.</li>
                </ul>

                <h3>Diferenciais:</h3>

                <ul>
                    <li>Atualização automática dos dados.</li>
                    <li>Ordenação numérica dos leitos.</li>
                    <li>Filtros persistentes.</li>
                    <li>Layout preparado para televisores.</li>
                    <li>Resumo de ocupação por unidade.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 3 - CENTRO CIRÚRGICO
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Painel do Centro Cirúrgico",

            imagem: "",

            descricao: `
                <p>
                    Painel desenvolvido para monitorar a programação
                    das salas do centro cirúrgico e do centro obstétrico.
                </p>

                <h3>Informações exibidas:</h3>

                <ul>
                    <li>Sala cirúrgica.</li>
                    <li>Nome do paciente.</li>
                    <li>Procedimento programado.</li>
                    <li>Médico responsável.</li>
                    <li>Horário de início.</li>
                    <li>Horário previsto de término.</li>
                    <li>Leito e unidade.</li>
                    <li>Tempo previsto da cirurgia.</li>
                </ul>

                <h3>Status monitorados:</h3>

                <ul>
                    <li>Marcada.</li>
                    <li>Em andamento.</li>
                    <li>Finalizada.</li>
                    <li>Atrasada.</li>
                    <li>Cancelada.</li>
                </ul>

                <h3>Recursos:</h3>

                <ul>
                    <li>Visualização de diferentes dias.</li>
                    <li>Cards separados por sala.</li>
                    <li>Rolagem automática quando há várias cirurgias.</li>
                    <li>Indicadores gerais das cirurgias.</li>
                    <li>Atualização automática.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 4 - AGENDAMENTOS
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Painel de Agendamentos",

            imagem: "",

            descricao: `
                <p>
                    Sistema criado para acompanhar os agendamentos
                    realizados no hospital e facilitar a localização
                    das informações dos pacientes.
                </p>

                <h3>Funcionalidades:</h3>

                <ul>
                    <li>Agendamentos do dia.</li>
                    <li>Pesquisa de pacientes pelo nome.</li>
                    <li>Consulta de agendamentos futuros.</li>
                    <li>Detalhes completos do agendamento.</li>
                    <li>Contadores por situação.</li>
                </ul>

                <h3>Situações apresentadas:</h3>

                <ul>
                    <li>Marcado.</li>
                    <li>Em andamento.</li>
                    <li>Finalizado.</li>
                    <li>Cancelado.</li>
                    <li>Atrasado.</li>
                </ul>

                <p>
                    O sistema também auxilia profissionais quando um paciente
                    comparece em uma data ou horário diferente daquele
                    originalmente agendado.
                </p>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 5 - FARMÁCIA
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Painel de Prescrições da Farmácia",

            imagem: "",

            descricao: `
                <p>
                    Painel criado para acompanhar solicitações,
                    prescrições e medicamentos direcionados à farmácia.
                </p>

                <h3>Informações apresentadas:</h3>

                <ul>
                    <li>Nome do paciente.</li>
                    <li>Número da prescrição.</li>
                    <li>Número da solicitação.</li>
                    <li>Setor solicitante.</li>
                    <li>Data e horário.</li>
                    <li>Primeira necessidade.</li>
                    <li>Medicamentos solicitados.</li>
                    <li>Situação do atendimento.</li>
                </ul>

                <h3>Priorização visual:</h3>

                <ul>
                    <li>Urgências destacadas em vermelho.</li>
                    <li>Pedidos atrasados destacados em amarelo.</li>
                    <li>Pedidos normais apresentados em azul.</li>
                    <li>Urgências mantidas no topo da tela.</li>
                </ul>

                <h3>Recursos:</h3>

                <ul>
                    <li>Alerta sonoro para novas urgências.</li>
                    <li>Atualização automática.</li>
                    <li>Rolagem interna dos medicamentos.</li>
                    <li>Filtros de unidade.</li>
                    <li>Layout para televisão vertical.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 6 - ETIQUETAS FARMÁCIA
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Sistema de Etiquetas da Farmácia",

            imagem: "",

            descricao: `
                <p>
                    Consulta desenvolvida para gerar etiquetas de identificação
                    dos medicamentos prescritos aos pacientes internados.
                </p>

                <h3>Dados disponíveis:</h3>

                <ul>
                    <li>Prontuário.</li>
                    <li>Nome do paciente.</li>
                    <li>Data de nascimento.</li>
                    <li>Número do atendimento.</li>
                    <li>Unidade de internação.</li>
                    <li>Leito.</li>
                    <li>Número da prescrição.</li>
                    <li>Data da medicação.</li>
                    <li>Horário da medicação.</li>
                    <li>Medicamentos agrupados.</li>
                </ul>

                <h3>Tecnologias utilizadas:</h3>

                <ul>
                    <li>Oracle SQL.</li>
                    <li>Consultas com agrupamento de informações.</li>
                    <li>Report Designer.</li>
                    <li>Stimulsoft Reports.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 7 - ALMOXARIFADO
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Painel do Almoxarifado",

            imagem: "",

            descricao: `
                <p>
                    Painel desenvolvido para monitorar, em tempo real,
                    as solicitações de produtos enviadas ao almoxarifado.
                </p>

                <h3>Informações exibidas:</h3>

                <ul>
                    <li>Número da solicitação.</li>
                    <li>Setor solicitante.</li>
                    <li>Nome do solicitante.</li>
                    <li>Produto solicitado.</li>
                    <li>Quantidade solicitada.</li>
                    <li>Data e horário.</li>
                </ul>

                <h3>Destaques do sistema:</h3>

                <ul>
                    <li>Pedidos urgentes em vermelho.</li>
                    <li>Pedidos atrasados em amarelo.</li>
                    <li>Novos pedidos com animação temporária.</li>
                    <li>Alerta por voz informando o setor.</li>
                    <li>Atualização automática sem recarregar a página.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 8 - NIR
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Painel NIR — Pré-Internação",

            imagem: "",

            descricao: `
                <p>
                    Painel desenvolvido para apoiar o Núcleo Interno
                    de Regulação no acompanhamento dos pacientes
                    que aguardam internação.
                </p>

                <h3>Classificação por tempo:</h3>

                <ul>
                    <li>Verde para solicitações com menos de 6 horas.</li>
                    <li>Amarelo para solicitações entre 6 e 18 horas.</li>
                    <li>Vermelho para solicitações acima de 18 horas.</li>
                </ul>

                <h3>Funcionalidades:</h3>

                <ul>
                    <li>Identificação de novas solicitações.</li>
                    <li>Ordenação pelos registros mais recentes.</li>
                    <li>Tempo de espera atualizado.</li>
                    <li>Destaque visual para novas internações.</li>
                    <li>Alerta de voz para a equipe.</li>
                    <li>Layout preparado para televisores.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 9 - NUTRIÇÃO
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Monitoramento da Nutrição",

            imagem: "",

            descricao: `
                <p>
                    Sistema desenvolvido para acompanhar dietas prescritas
                    e novas internações que precisam de avaliação da equipe
                    de nutrição.
                </p>

                <h3>Módulo de dietas:</h3>

                <ul>
                    <li>Nome do paciente.</li>
                    <li>Leito e unidade.</li>
                    <li>Descrição da dieta.</li>
                    <li>Observações da prescrição.</li>
                    <li>Horário da prescrição.</li>
                    <li>Médico responsável.</li>
                </ul>

                <h3>Módulo de internações:</h3>

                <ul>
                    <li>Identificação de novas internações.</li>
                    <li>Verificação da existência de prescrição.</li>
                    <li>Destaque visual temporário.</li>
                    <li>Alerta sonoro para a equipe.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 10 - MOBILE HMSA
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Aplicativo Mobile HMSA",

            imagem: "",

            descricao: `
                <p>
                    Aplicação web responsiva criada para disponibilizar
                    informações hospitalares em celulares e tablets.
                </p>

                <h3>Funcionalidades:</h3>

                <ul>
                    <li>Tela de abertura.</li>
                    <li>Autenticação de usuário.</li>
                    <li>Consulta de pacientes internados.</li>
                    <li>Ficha completa do paciente.</li>
                    <li>Linha do tempo do atendimento.</li>
                    <li>Consulta de médicos plantonistas.</li>
                    <li>Lista de pacientes por médico.</li>
                    <li>Painel mobile de leitos.</li>
                </ul>

                <h3>Tecnologias utilizadas:</h3>

                <ul>
                    <li>PHP.</li>
                    <li>Oracle Database.</li>
                    <li>JavaScript.</li>
                    <li>HTML5 e CSS3.</li>
                    <li>APIs REST.</li>
                    <li>Progressive Web App.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 11 - MÉDICOS PLANTONISTAS
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Painel de Médicos Plantonistas",

            imagem: "",

            descricao: `
                <p>
                    Sistema desenvolvido para acompanhar os médicos
                    em atividade e os atendimentos realizados durante
                    o plantão.
                </p>

                <h3>Dados monitorados:</h3>

                <ul>
                    <li>Nome do profissional.</li>
                    <li>Especialidade.</li>
                    <li>Horário do primeiro atendimento.</li>
                    <li>Horário do último atendimento.</li>
                    <li>Quantidade de atendimentos.</li>
                    <li>Quantidade de altas realizadas.</li>
                </ul>

                <p>
                    Também foi criada uma ficha individual do profissional,
                    apresentando os pacientes atendidos e o histórico
                    dos atendimentos realizados.
                </p>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 12 - ALERTA DE EMERGÊNCIA
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Sistema de Alerta de Emergência",

            imagem: "",

            descricao: `
                <p>
                    Sistema criado para permitir o acionamento de um alerta
                    de emergência diretamente pelo painel de leitos.
                </p>

                <h3>Funcionamento:</h3>

                <ul>
                    <li>O profissional seleciona o leito do paciente.</li>
                    <li>O alerta é registrado no servidor interno.</li>
                    <li>As demais unidades recebem o aviso automaticamente.</li>
                    <li>A tela informa o leito e a unidade da ocorrência.</li>
                    <li>Um alerta visual ocupa a tela.</li>
                    <li>Um som grave é reproduzido nas unidades.</li>
                </ul>

                <p>
                    O projeto foi preparado para funcionar em diferentes
                    computadores conectados à mesma rede hospitalar.
                </p>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 13 - PORTAL HMSA
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Portal de Sistemas HMSA",

            imagem: "",

            descricao: `
                <p>
                    Portal corporativo criado para centralizar o acesso
                    aos sistemas e painéis internos desenvolvidos.
                </p>

                <h3>Sistemas integrados:</h3>

                <ul>
                    <li>Central do pronto-socorro.</li>
                    <li>Painel de leitos.</li>
                    <li>Painel NIR.</li>
                    <li>Farmácia.</li>
                    <li>Almoxarifado.</li>
                    <li>Centro cirúrgico.</li>
                    <li>Indicadores institucionais.</li>
                    <li>Painel de agendamentos.</li>
                </ul>

                <p>
                    O portal possui cards de navegação, design responsivo
                    e identidade visual baseada nas cores institucionais.
                </p>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 14 - PACIENTES SEM CPF
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Relatório de Pacientes sem CPF",

            imagem: "",

            descricao: `
                <p>
                    Relatório criado para identificar fichas de atendimento
                    registradas sem o CPF do paciente.
                </p>

                <h3>Informações apresentadas:</h3>

                <ul>
                    <li>Número do atendimento.</li>
                    <li>Código do paciente.</li>
                    <li>Nome completo.</li>
                    <li>Nome da mãe.</li>
                    <li>Data do atendimento.</li>
                    <li>Situação do CPF.</li>
                </ul>

                <h3>Tratamentos realizados:</h3>

                <ul>
                    <li>Exclusão de pacientes de teste.</li>
                    <li>Exclusão de determinados registros de recém-nascidos.</li>
                    <li>Substituição de valores vazios por texto explicativo.</li>
                    <li>Formatação da data sem horário.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 15 - RATER
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Projeto Rater",

            imagem: "./img/rater.jpg",

            descricao: `
                <p>
                    Site de streaming de filmes desenvolvido com tecnologias
                    modernas de front-end para proporcionar uma experiência
                    dinâmica e responsiva.
                </p>

                <p>
                    O projeto utiliza React e TypeScript, garantindo uma
                    aplicação organizada, escalável e com tipagem segura.
                </p>

                <h3>Funcionalidades principais:</h3>

                <ul>
                    <li>Filmes organizados por categorias.</li>
                    <li>Seção de lançamentos.</li>
                    <li>Filmes recomendados e assistidos.</li>
                    <li>Carrosséis interativos.</li>
                    <li>Banners responsivos.</li>
                    <li>Informações e avaliações dos filmes.</li>
                    <li>Integração com API pública de filmes.</li>
                </ul>

                <h3>Tecnologias utilizadas:</h3>

                <ul>
                    <li>React.</li>
                    <li>TypeScript.</li>
                    <li>Zustand.</li>
                    <li>Styled Components.</li>
                    <li>API REST.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 16 - STREAMING
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Plataforma de Streaming",

            imagem: "imagens/streaming.jpg",

            descricao: `
                <p>
                    Projeto desenvolvido com HTML, CSS e integração
                    com uma API pública de filmes, simulando uma
                    plataforma de streaming.
                </p>

                <h3>Funcionalidades:</h3>

                <ul>
                    <li>Menu lateral fixo.</li>
                    <li>Categorias de filmes.</li>
                    <li>Busca dinâmica em API.</li>
                    <li>Exibição de imagens e sinopses.</li>
                    <li>Interface responsiva.</li>
                    <li>Layout inspirado em plataformas de streaming.</li>
                </ul>

                <h3>Tecnologias utilizadas:</h3>

                <ul>
                    <li>HTML5.</li>
                    <li>CSS3.</li>
                    <li>JavaScript.</li>
                    <li>API pública de filmes.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 17 - FASTFOOD
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Fastfood",

            imagem: "imagens/fastfood.jpg",

            descricao: `
                <p>
                    Simulação de um sistema de pedidos de fast food,
                    permitindo escolher restaurantes, categorias
                    e produtos.
                </p>

                <h3>Funcionalidades:</h3>

                <ul>
                    <li>Escolha entre diferentes restaurantes.</li>
                    <li>Exibição dos produtos por categoria.</li>
                    <li>Controle de quantidade.</li>
                    <li>Cálculo automático do total.</li>
                    <li>Manipulação dinâmica do carrinho.</li>
                </ul>

                <h3>Tecnologias utilizadas:</h3>

                <ul>
                    <li>HTML5.</li>
                    <li>CSS3.</li>
                    <li>JavaScript.</li>
                    <li>JSON.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 18 - CATÁLOGO STAR WARS
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Catálogo de Filmes Star Wars",

            imagem: "imagens/catalago-filmes.jpg",

            descricao: `
                <p>
                    Aplicação web desenvolvida para consumir uma API
                    e apresentar um catálogo de filmes com informações
                    individuais.
                </p>

                <h3>Funcionalidades:</h3>

                <ul>
                    <li>Catálogo com imagens dos filmes.</li>
                    <li>Consulta de detalhes individuais.</li>
                    <li>Navegação por parâmetros de URL.</li>
                    <li>Placeholders para imagens indisponíveis.</li>
                    <li>Interface responsiva.</li>
                    <li>Estrutura modular do projeto.</li>
                </ul>

                <h3>Tecnologias utilizadas:</h3>

                <ul>
                    <li>PHP.</li>
                    <li>HTML5.</li>
                    <li>CSS3.</li>
                    <li>JavaScript.</li>
                    <li>API REST.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 19 - NFT
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Marketplace de NFTs",

            imagem: "imagens/marketplace-nfts.jpg",

            descricao: `
                <p>
                    Marketplace de NFTs desenvolvido com tecnologias
                    modernas e gerenciamento centralizado do carrinho.
                </p>

                <h3>Funcionalidades:</h3>

                <ul>
                    <li>Exibição de NFTs.</li>
                    <li>Detalhes completos dos produtos.</li>
                    <li>Adição de itens ao carrinho.</li>
                    <li>Remoção de itens.</li>
                    <li>Visualização do carrinho.</li>
                    <li>Gerenciamento global do estado.</li>
                </ul>

                <h3>Tecnologias utilizadas:</h3>

                <ul>
                    <li>Next.js.</li>
                    <li>React.</li>
                    <li>TypeScript.</li>
                    <li>Redux.</li>
                    <li>Docker.</li>
                    <li>CSS Modules.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 20 - ANGULAR + ASP.NET
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Projeto Full Stack com Angular 17 e ASP.NET Core",

            imagem: "imagens/fullstack.jpg",

            descricao: `
                <p>
                    Desafio técnico integrando um front-end em Angular 17
                    com uma API desenvolvida em ASP.NET Core.
                </p>

                <h3>Funcionalidades:</h3>

                <ul>
                    <li>API com 30 registros simulados.</li>
                    <li>Geração de dados com a biblioteca Bogus.</li>
                    <li>Tabela paginada.</li>
                    <li>Filtro por nome.</li>
                    <li>Carregamento por botão.</li>
                    <li>Separação entre front-end e back-end.</li>
                    <li>Funcionamento sem banco de dados.</li>
                </ul>

                <h3>Tecnologias utilizadas:</h3>

                <ul>
                    <li>Angular 17.</li>
                    <li>Angular Material.</li>
                    <li>TypeScript.</li>
                    <li>ASP.NET Core.</li>
                    <li>C#.</li>
                    <li>Bogus.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 21 - IBDMAR
        |--------------------------------------------------------------------------
        */

        {
            titulo: "IBDMAR",

            imagem: "imagens/ibdmar.jpg",

            descricao: `
                <p>
                    Site corporativo desenvolvido do zero utilizando
                    o CMS Drupal.
                </p>

                <p>
                    O cliente precisava de um website escalável,
                    seguro e com funcionalidades personalizadas
                    para gerenciar conteúdo de forma eficiente.
                </p>

                <h3>Atividades realizadas:</h3>

                <ul>
                    <li>Configuração do Drupal.</li>
                    <li>Criação da estrutura das páginas.</li>
                    <li>Personalização do tema.</li>
                    <li>Organização dos conteúdos.</li>
                    <li>Desenvolvimento responsivo.</li>
                </ul>

                <h3>Tecnologias utilizadas:</h3>

                <ul>
                    <li>Drupal.</li>
                    <li>HTML5.</li>
                    <li>CSS3.</li>
                    <li>PHP.</li>
                </ul>
            `
        },

        /*
        |--------------------------------------------------------------------------
        | 22 - APPTOUR
        |--------------------------------------------------------------------------
        */

        {
            titulo: "Apptour",

            imagem: "imagens/apptour.jpg",

            descricao: `
                <p>
                    Landing page moderna desenvolvida em WordPress
                    para auxiliar um cliente na captação estratégica
                    de novos contatos.
                </p>

                <h3>Objetivos do projeto:</h3>

                <ul>
                    <li>Captura de leads.</li>
                    <li>Design moderno e atrativo.</li>
                    <li>Carregamento rápido.</li>
                    <li>Boa experiência em dispositivos móveis.</li>
                    <li>Estrutura focada em conversões.</li>
                </ul>

                <h3>Tecnologias utilizadas:</h3>

                <ul>
                    <li>WordPress.</li>
                    <li>HTML5.</li>
                    <li>CSS3.</li>
                    <li>Plugins de formulários.</li>
                </ul>
            `
        }

    ];

    /*
    |--------------------------------------------------------------------------
    | FUNÇÃO PARA EXIBIR O PROJETO
    |--------------------------------------------------------------------------
    */

    function exibirProjeto(index) {

        const projeto = projetos[index];

        if (!projeto) {

            console.error(
                "Projeto não encontrado no índice:",
                index
            );

            return;
        }

        titulo.textContent = projeto.titulo;
        descricao.innerHTML = projeto.descricao;

        /*
        |--------------------------------------------------------------------------
        | IMAGEM OPCIONAL
        |--------------------------------------------------------------------------
        */

        if (
            imagem &&
            containerImagem &&
            projeto.imagem &&
            projeto.imagem.trim() !== ""
        ) {

            imagem.src = projeto.imagem;
            imagem.alt = projeto.titulo;

            containerImagem.style.display = "block";

            imagem.onerror = function () {

                containerImagem.style.display = "none";

            };

        } else if (containerImagem) {

            containerImagem.style.display = "none";

        }

        /*
        |--------------------------------------------------------------------------
        | ATUALIZA O ITEM ATIVO
        |--------------------------------------------------------------------------
        */

        itens.forEach(function (item) {

            item.classList.remove("ativo");

        });

        const itemAtual = document.querySelector(
            `.lista-projetos li[data-index="${index}"]`
        );

        if (itemAtual) {

            itemAtual.classList.add("ativo");

        }

        /*
        |--------------------------------------------------------------------------
        | VOLTA A DESCRIÇÃO PARA O TOPO
        |--------------------------------------------------------------------------
        */

        const detalhesProjeto = document.querySelector(
            ".detalhes-projeto"
        );

        if (detalhesProjeto) {

            detalhesProjeto.scrollTop = 0;

        }

    }

    /*
    |--------------------------------------------------------------------------
    | EVENTOS DOS ITENS
    |--------------------------------------------------------------------------
    */

    itens.forEach(function (item) {

        /*
         * Evita adicionar o mesmo evento mais de uma vez.
         */

        if (item.dataset.inicializado === "true") {

            return;

        }

        item.dataset.inicializado = "true";

        item.addEventListener("click", function () {

            const index = Number(
                item.dataset.index
            );

            exibirProjeto(index);

        });

    });

    /*
    |--------------------------------------------------------------------------
    | PRIMEIRO PROJETO
    |--------------------------------------------------------------------------
    */

    exibirProjeto(0);

}


/*
|--------------------------------------------------------------------------
| INICIALIZAÇÃO AUTOMÁTICA
|--------------------------------------------------------------------------
|
| Funciona quando o projetos.html já estiver presente na página.
|
*/

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            if (
                document.querySelector(".lista-projetos")
            ) {

                inicializarProjetos();

            }

        }
    );

} else {

    if (
        document.querySelector(".lista-projetos")
    ) {

        inicializarProjetos();

    }

}
document
    .querySelectorAll(".lista-projetos li")
    .forEach(li => li.classList.remove("ativo"));

item.classList.add("ativo");