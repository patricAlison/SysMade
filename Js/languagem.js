function trocaDeIdioma(valuePg) {
    var btnLinguagem, textoIngles, tituloIngles, paginaAtual;

    //convertendo
    paginaAtual = parseInt(valuePg);

    //declarando os valores
    btnLinguagem = document.getElementsByClassName("languagem");
    tituloIngles = document.getElementsByClassName("tituloEnglish");
    textoIngles = document.getElementsByClassName("textoEnglish");
    menuNav = document.getElementsByClassName("menuEnglish");

    btnLinguagem[0].style.opacity = "0.5";
    btnLinguagem[0].style.cursor = "not-allowed";

    //Aviso da função
    alert("Para voltar ao idioma de origem só basta você atualizar a pagina ou trocar de pagina!");

    //trocando os valores index

    /*CabeçarioMenu*/
    menuNav[0].innerHTML = "Home";
    menuNav[1].innerHTML = "Portfolio / Team";
    menuNav[2].innerHTML = "SAC";
    menuNav[3].innerHTML = "Sustainability";
    menuNav[4].innerHTML = "About";
    /*fimCabeçarioMenu*/

    if (paginaAtual == 1) {
        /*Como trabalhamos*/
        tituloIngles[0].innerHTML = "How we work";
        document.getElementsByClassName("ajustInfo")[0].style.paddingTop = "1%";
        tituloIngles[1].innerHTML = "Your Project";
        textoIngles[0].innerHTML = "<i><b>SysMade</b></i> is always open to all types of project ideas, as we are here to give life and style to them.";
        tituloIngles[2].innerHTML = "We do the Survey";
        textoIngles[1].innerHTML = "We always do the necessary surveys to bring or even improve the ideas of our customers, in addition to also avoiding future problems.";
        tituloIngles[3].innerHTML = "We ship to Developers";
        textoIngles[2].innerHTML = "When we finish the documentation part, we send it to our team of developers to start creating the system or website faster.";
        /*fimComoTrabalhamos*/


        /*serviço*/
        tituloIngles[4].innerHTML = "Services";
        tituloIngles[5].innerHTML = "Web and Web Designer";
        tituloIngles[6].innerHTML = "Designer";
        tituloIngles[7].innerHTML = "Web";
        textoIngles[3].innerHTML = "No discount";
        textoIngles[4].innerHTML = "No discount";
        textoIngles[5].innerHTML = "No discount";
        tituloIngles[8].innerHTML = "Windows and Linux Executable Programs";
        tituloIngles[9].innerHTML = "Windows and Linux";
        textoIngles[6].innerHTML = "No discount";
        textoIngles[7].innerHTML = "No discount";
        textoIngles[8].innerHTML = "No discount";
        tituloIngles[10].innerHTML = "Systems Optimization";
        tituloIngles[11].innerHTML = "System Changes";
        tituloIngles[12].innerHTML = "Systems Transitions";
        tituloIngles[13].innerHTML = "Not available";
        textoIngles[9].innerHTML = "No discount";
        textoIngles[10].innerHTML = "No discount";
        textoIngles[11].innerHTML = "No discount";
        /*fimServiço*/

        /*contato*/
        tituloIngles[14].innerHTML = "Location / Contact";
        textoIngles[12].innerHTML = "Telephone: +55 (11) 2790-9893";
    } else if (paginaAtual == 2) {

        /*navegacaoPortfolio*/
        textoIngles[0].innerHTML = "Projects";
        textoIngles[1].innerHTML = "Team";
        /*fimNavegacaoPortfolio*/

        /*sitesFeitos*/
        tituloIngles[0].innerHTML = "Projects";
        tituloIngles[1].innerHTML = "User Screen Template";
        tituloIngles[2].innerHTML = "Social Model";
        tituloIngles[3].innerHTML = "Anime home Reviews";
        tituloIngles[4].innerHTML = "Four hits home";
        tituloIngles[5].innerHTML = "Team";
        textoIngles[2].innerHTML = "Site Models was developed for a client who wanted a social network of beginners to post their photos to be analyzed by her company, being creative and without using filters only the natural beauty brought to the world.";
        document.getElementsByClassName("ajustEnglish")[0].style.paddingTop = "8.4%";
        document.getElementsByClassName("ajustEnglish")[0].style.paddingBottom = "4.1%";
        textoIngles[3].innerHTML = "Anime Reviwes is a website that has the focus to be a point of criticism of several Japanese animations, news about great works in the otaku world and always give tips on sites to be able to watch their anime. Outside the users can leave their comments and likes.";
        textoIngles[4].innerHTML = "FourHits is a site that focuses on 4 musical genres that are rock, country, rap and pop. Each week talks about 4 artists from each musical genre, explaining about the origin story, the clips, composed songs and random news about the world of music.";
        textoIngles[5].innerHTML = "Leader, System Analyst and Front-end";
        textoIngles[6].innerHTML = "Back-end";
        textoIngles[7].innerHTML = "Database Analyst";
        textoIngles[8].innerHTML = "Designer Analyst";
        textoIngles[9].innerHTML = "Front-end";
        textoIngles[10].innerHTML = "Front-end";
        textoIngles[11].innerHTML = "System Analyst and Back-end";



    } else if (paginaAtual == 3) {

        /*navegacaoDoSAC*/
        textoIngles[0].innerHTML = "Form";
        textoIngles[1].innerHTML = "Doubts";
        /*fimNavegacaoSAC*/

        /*SAC Formulario*/
        tituloIngles[0].innerHTML = "Form SAC";
        textoIngles[2].innerHTML = "Name:";
        textoIngles[3].innerHTML = "Your Doubt or Opinion:";
        textoIngles[4].innerHTML = "Submit";
        /*fimSACFormulario*/

        /*duvidas*/
        tituloIngles[1].innerHTML = "Frequently Asked Questions";
        tituloIngles[2].innerHTML = "Doubts 1";
        tituloIngles[3].innerHTML = "Doubts 2";
        tituloIngles[4].innerHTML = "Doubts 3";
        tituloIngles[5].innerHTML = "Doubts 4";
        /*fimDuvidas*/




    } else if (paginaAtual == 4) {

        /*sustentabilidade*/
        tituloIngles[0].innerHTML = "Sustainability";
        tituloIngles[1].innerHTML = "World Value";
        textoIngles[0].innerHTML = "We are a company one hundred percent concerned with the preservation of the environment and, for this reason, we have adopted the T.I Verde methodology which aims to adopt a set of strategies to reduce the negative impact on the environment. One of our goals for the coming year is to obtain international certification ISO 14001, which is responsible for measuring the impact of certain businesses on the environment. Below we list some of the numerous strategies we have adopted.";
        tituloIngles[2].innerHTML = "Company Strategy";
        textoIngles[1].innerHTML = "Our server is located in a strategic place in order to save physical space and energy;";
        textoIngles[2].innerHTML = "We only use equipment that consumes less energy and we use them consciously, avoiding keeping them connected unnecessarily;";
        textoIngles[3].innerHTML = "We advise our team to reduce unnecessary paper use whenever possible by replacing its use. To exchange information, for example, we use applications such as email, Skype, WhatsApp etc;";
        textoIngles[4].innerHTML = "We use cloud services whenever possible, thus avoiding unnecessary equipment purchases and wasting resources;";
        textoIngles[5].innerHTML = "We use an intuitive intranet that dramatically reduces resources and spending on printing, saving several trees.";
        /*fimSustentabilidade*/

    } else if (paginaAtual == 5) {

        /*empresa*/
        tituloIngles[0].innerHTML = "Company";
        tituloIngles[1].innerHTML = "SysMade Headquarters";
        textoIngles[0].innerHTML = "The company was created in 2020, by seven students, who met at Etec Basilides de Godoy in the Systems Development course, all with the aim of improving their knowledge, learning new things and experimenting with new perspectives. In the midst of the difficulties that the job market imposes, they decided to create a company that was not only looking for profits, but rather, to expand and apply their business knowledge obtained in the course.";

        tituloIngles[2].innerHTML = "Company vision";
        textoIngles[1].innerHTML = "One day we seek to become a reference company in the systems development market, offering safe work and with maximum agility in the creation of projects, without losing its quality. With the intention of amplifying the company's visibility, conquering the long-awaited space in the market as one of the first options in systems development.";

        tituloIngles[3].innerHTML = "Company values";
        textoIngles[2].innerHTML = "We prioritize the safety and satisfaction of our customers, always working in a transparent, agile, effective, ethical manner. In search of results, innovation, with maximum quality and the best technological resources in our systems.";

        tituloIngles[4].innerHTML = "Company mission";
        textoIngles[3].innerHTML = "Our mission is very simple, we are focused on developing good systems as close to what the client asked for, because sometimes the client asked for something and we who are the professionals, realize that executing in that way may have errors in the future, so we will always see other perspectives, but never leave the client's idea. In addition to also focusing on systems as safe as possible in the reality in question and always optimizing to the maximum.";

    } else {

        alert("Não Existe TRadução para essa pagina!!! ERrOr123");

    }



    //    alert("funfou!!!");
}
