<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Romario Alcantara">
    <meta name="description" content="Portfólio da desenvolvedora front-end Romario Alcantara ">
    <meta name="keywords" content="portfolio, html, front-end, desenvolvimento, css, javascript">
    <title>Romario Alcantara </title>
    <link rel="icon" href="./icon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <header>
    <nav data-menu="suave">
       <p><a href="#home">Romário Alcântara </a></p>
       <button data-menu="button" aria-controls="menu"></button>
      <ul data-menu="list" id="menu">
        <a href="#home">
        <li>Home</li>
      </a>
        <a href="#sobre">
          <li>Sobre</li>
        </a>
        <a href="#experiencia">
        <li>Experiência</li>
      </a>
      <a href="#projetos">
        <li>Projetos</li>
      </a>
      </ul>
    </nav>
  </header>

    <main>
      <section class="principal" id="home" >
        <div class="principal__left">
          <h1>Olá, eu sou</h1>
            <span class="principal__sentence"></span>
            <span class="principal__input-cursor"></span>
          <h1>Desenvolvedor Front-End</h1>
          <div class="principal__botao">
            <a href="https://www.linkedin.com/in/romario-alcantara/" target="_blank">
              <div class="principal__botao-linkedin">
                <img src="./assets/linkedin.png" alt="" />
                <p>LinkedIn</p>
              </div>
            </a>
            <a href="https://github.com/Roow14" target="_blank">
              <div class="principal__botao-github">
                <img src="./assets/github.png" alt="" />
                <p>Github</p>
              </div>
            </a>
          </div>
        </div>
        <div class="principal__right">
          <img src="./assets/bannerliso2.png" alt="Ilustração representando uma desenvolvedora sentada na cadeira mexendo no notebook com ambiente em volta." data-tilt>
        </div>
        
        <div class="scroll" data-menu="suave"><a href="#sobre" > <p> scroll down </p> <img src="./assets/scroll.png" alt="Setinha indicando para rolar a tela para baixo"></a></div>
      </section>
      <section class="sobre-mim" id="sobre" data-anime="js-scroll">
        <div class="sobre-mim__foto">
          <img src="./assets/eu.jpeg" alt="Uma selfie" />
        </div>
        <div class="sobre-mim__descricao" >
          <h1>Sobre mim</h1>
          
          <p>
          Com mais de uma década de experiência em suporte de TI, tenho me dedicado a transformar problemas técnicos em soluções eficientes, sempre com um foco em oferecer a melhor experiência ao usuário.

Recentemente, dei um passo significativo em minha carreira ao me especializar em desenvolvimento frontend, combinando meu conhecimento profundo de sistemas com uma paixão por criar interfaces intuitivas e atraentes.<br>

<br>🎓 Formação<br>

Sou graduado em Análise e Desenvolvimento de Sistemas, o que me proporcionou uma base sólida em tecnologia e a capacidade de entender e resolver problemas complexos. 
Essa formação, juntamente com minha experiência prática, me permitiu desenvolver habilidades técnicas robustas e uma compreensão abrangente das necessidades dos usuários finais.<br>

<br>💼 Transição para Frontend<br>

Atualmente, estou em transição para a área de desenvolvedor, buscando aplicar meu background em suporte de TI para criar soluções visuais impactantes e funcionais.
 Tenho me aprofundado em tecnologias como HTML, CSS, JavaScript, e frameworks modernos, sempre com o objetivo de criar interfaces que não só atendam, mas superem as expectativas dos usuários.<br>

 <br>🎯 Objetivo de Carreira<br>

Meu objetivo é contribuir para projetos desafiadores e inovadores, onde eu possa aplicar minhas habilidades técnicas e minha experiência em suporte para desenvolver produtos que façam a diferença.
 Estou especialmente interessado em oportunidades que me permitam continuar aprendendo e crescendo, ao mesmo tempo em que agrego valor significativo à equipe e aos clientes.
          </p>
          
          <div class="sobre-mim__descricao-buttons">
            <a href="./assets/Curriculo-Romario.pdf" download="">
              <div class="sobre-mim__descricao-buttons-curriculo">
                <img src="./assets/download-da-nuvem.png" alt="" />
                <p>Currículo</p>
              </div>
            </a>
          
          </div>
          
        </div>
      </section>
      <section class="experiencia" id="experiencia" data-anime="js-scroll">
        <h1>Experiência</h1>
        <div class="experiencia__wrapper">
          <section class="experiencia__lugares">
            <ul data-tab="menu">
              <li>&#128064&#128064</li>
              <li>Fisiopeti</li>
              <li>Forecast Web</li>
              <li>Bassh</li>
            </ul>
          </section>
          <div class="experiencia__descricao" data-tab="content">
            <section data-anime="show-right">
              <h2>Em busca da oportunidades no mercado de trabalho </h2>
              <p class="experiencia__descricao-local">Quem sabe na sua empresa?</p>
              <p>Estou disponível para bater um papo, você pode entrar em contato via e-mail romariorbs@gmail.com &#10024</p>
            </section>
            <section data-anime="show-right">
            <h2>Desenvolvedor Front-End</h2>
            <span>Dez 2022 a Fev2023 </span>
            <p class="experiencia__descricao-local">Fisiopeti Clinica De Reabilitacao</p>
            <p>
              Minha primeira oportunidade na área da programação surgiu quando fui contratado para o suporte técnico em uma clínica.
               Acabei assumindo a responsabilidade pelo suporte de um sistema privado já existente. Este sistema era voltado para o cadastro e agendamento de pacientes.
                Curiosamente, mesmo sem ter acesso ao código-fonte, decidi recriar completamente o sistema do zero, utilizando HTML e CSS.
            </p>
          </section>
          <section data-anime="show-right">
            <h2>Desenvolvedor Web</h2>
            <span>Fev 2023 a Fev 2024</span>
            <p class="experiencia__descricao-local">Forecast Web Tecnologia da Informação </p>
            <p>
              Como desenvolvedor, este é meu primeiro contrato assinado. Fui contratado para a posição de front-end junior . 
              O sistema da Fisiopeti foi originalmente desenvolvido pela Forecast Web. 
              Tive que entrar em contato com a Forecast e, após avaliarem positivamente o meu trabalho, me fizeram uma proposta. Decidi aceitar, e este é o meu emprego atual.
            </p>
          </section>
          <section data-anime="show-right">
            <h2>Desenvolvedor WordPress</h2>
            <span>Março 2023 </span>
            <p class="experiencia__descricao-local">Bassh </p>
            <p>
            Neste papel, trabalhei com WordPress, assumindo responsabilidades relacionadas ao desenvolvimento e manutenção de sites baseados na plataforma. A experiência envolveu a personalização de temas, plugins e a garantia de que os sites funcionassem corretamente em diferentes dispositivos e navegadores.
            </p>
          </section>
        
        </div>
      </section>
      <div class="projeto">
      <h1>Projetos</h1> </div>
      <section class="projetos" id="projetos" data-anime="js-scroll">
         
            <a href="https://nivaldopisos.com.br/">Nivaldo Pisos  </a>
            <a href="https://ktadv.com.br/">Advogada <br>Kalanit Tiecher  </a>
            <a href="https://cachacawiba.com.br/wiba/">Cachaca Wiba  </a>
            <a href="https://mrrefrigera.com.br/">MR Refrigera </a>
            <a href="http://agenciapigeon.com.br/">Agencia Pigeon </a>
            <a href="https://stcad.com.br/">Stcad  </a>
            <a href="https://inovetecnologiams.com.br/">Inove Tecnologia MS</a>
            <a href="https://ilustrasales.com.br/">Ilustra Sales</a>
      </section>
            
             
          

      <footer>
        <p>Desenvolvido  por</p><a href="https://www.linkedin.com/in/romario-alcantara/" target="_blank"><span> Romário Alcântara</span></a>
      </footer>
    </main>

    <script src="./js/script.js" type="module"></script>
    <script src="./js/modules/vanilla-tilt.min.js"></script>
  </body>
</html>
