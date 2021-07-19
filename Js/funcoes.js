/*Mudando icones do css*/

function iconesAndParallax() {
    /*
     *
     *Você acessa o conteudo document.getElementByClassName por
     *por parametro exemplo 
     *
     *icone = document.getElementsByClassName("icone");
     *acessando icone[0]
     **/
    var icone = document.getElementsByClassName("icone");
    var paralax = document.getElementsByClassName("parallax");
    var contato = document.getElementsByClassName("iconeContato");

    //informações
    icone[1].style.backgroundImage = "url('./Icones/document.png')";
    icone[2].style.backgroundImage = "url('./Icones/scriptDesen.png')";
    icone[3].style.backgroundImage = "url('./Icones/webDesing.png')";
    icone[4].style.backgroundImage = "url('./Icones/desktop.png')";
    icone[5].style.backgroundImage = "url('./Icones/otimizacao.png')";

    //Paralax
    paralax[0].style.backgroundImage = "url(./Img/default/parallax01.jpg)";
    paralax[1].style.backgroundImage = "url(./Img/default/parallax03.jpg)";
    
    //Contato
    contato[0].style.backgroundImage = "url(./Icones/call.png)";
    contato[1].style.backgroundImage = "url(./Icones/email.png)";
    contato[2].style.backgroundImage = "url(./Icones/whatsapp.png)";
    contato[3].style.backgroundImage = "url(./Icones/facebook.png)";
    contato[4].style.backgroundImage = "url(./Icones/instagram.png)";
}

/*fim*/

function fotoEquipe(){
    var picture;
    
    //atribuindo valor
    picture = document.getElementsByClassName("fotoDoFuncionario");
    
    //colocando as imagens
    picture[0].style.backgroundImage = "url(../Img/portfolio/patric.jpeg)";
    picture[1].style.backgroundImage = "url(../Img/portfolio/igor.jpeg)";
    picture[2].style.backgroundImage = "url(../Img/portfolio/amanda.jpeg)";
    picture[3].style.backgroundImage = "url(../Img/portfolio/vandinha.jpeg)";
    picture[4].style.backgroundImage = "url(../Img/portfolio/izaias.jpeg)";
    picture[5].style.backgroundImage = "url(../Img/portfolio/henry.jpeg)";
    picture[6].style.backgroundImage = "url(../Img/portfolio/samuel.jpeg)";
}

/* troca conteudo(portfolio e equipeDev) */
var trocaConteudo = function (pagina, conteudo) {
    //variaveis Locais
    var informacao, portfolio, equipeDev, btnWeb, btnDev, contatoForm, duvidaFreq, btnForm, btnDuvida, flyer;

    //atribuindo valores

    informacao = parseInt(conteudo); //convertando um data em numero
    pagina = parseInt(pagina);

    //Portfolio
    portfolio = document.getElementsByClassName("portfolio");
    flyer = document.getElementsByClassName("flyer");
    equipeDev = document.getElementsByClassName("equipeDev");
    btnWeb = document.getElementsByClassName("btnSite");
    btnDev = document.getElementsByClassName("btnEquipe");

    //SAC Formulario e Duvidas
    contatoForm = document.getElementsByClassName("contatoFormulario");
    duvidaFreq = document.getElementsByClassName("duvidasFrequentes");
    btnForm = document.getElementsByClassName("btnForm");
    btnDuvida = document.getElementsByClassName("btnDuvida");



    if (pagina == 1) {

        switch (informacao) {
            case 1:
                portfolio[0].style.display = "block";
                flyer[0].style.display = "block";
                flyer[0].style.paddingTop = "0.6%";
                flyer[0].style.paddingBottom = "0.6%";
                equipeDev[0].style.display = "none";
                portfolio[0].style.paddingTop = "0.6%";
                portfolio[0].style.paddingBottom = "0.6%";
                btnWeb[0].style.backgroundColor = "#31313b";
                btnWeb[0].style.color = "#fff";
                btnDev[0].style.backgroundColor = "#fff";
                btnDev[0].style.color = "#31313b";
                break;

            case 2:
                portfolio[0].style.display = "none";
                flyer[0].style.display = "none";
                equipeDev[0].style.display = "block";
                equipeDev[0].style.paddingTop = "0.6%";
                equipeDev[0].style.paddingBottom = "0.6%";
                btnDev[0].style.backgroundColor = "#31313b";
                btnDev[0].style.color = "#fff";
                btnWeb[0].style.backgroundColor = "#fff";
                btnWeb[0].style.color = "#31313b";
                break;

            default:
                portfolio[0].style.display = "block";
                equipeDev[0].style.display = "none";
                break;
        }
    } else {

        switch (informacao) {
            case 1:
                contatoForm[0].style.display = "block";
                duvidaFreq[0].style.display = "none";
                contatoForm[0].style.paddingTop = "0.6%";
                contatoForm[0].style.paddingBottom = "0.6%";
                btnForm[0].style.backgroundColor = "#31313b";
                btnForm[0].style.color = "#fff";
                btnDuvida[0].style.backgroundColor = "#fff";;
                btnDuvida[0].style.color = "#31313b";
                break;

            case 2:
                contatoForm[0].style.display = "none";
                duvidaFreq[0].style.display = "block";
                duvidaFreq[0].style.paddingTop = "0.6%";
                duvidaFreq[0].style.paddingBottom = "0.6%";
                btnForm[0].style.backgroundColor = "#fff";
                btnForm[0].style.color = "#31313b";
                btnDuvida[0].style.backgroundColor = "#31313b";
                btnDuvida[0].style.color = "#fff";
                break;

            default:
                contatoForm[0].style.display = "block";
                duvidaFreq[0].style.display = "none";
                break;
        }
    }

};
/*fim*/

/*modalFunction e stopModal*/

var modal = function () {

    //O modal principal
    var modalMain = document.getElementsByClassName("myModal")[0];

    //botao de fechar
    var spanClose = document.getElementsByClassName("close")[0];

    modalMain.style.display = "block";

    //Fazendo o evento de ao clikar fechar o modal
    spanClose.onclick = function () {
        modalMain.style.display = "none";
    }

    //Quando o usuario clicar por fora do modal
    window.onclick = function (event) {

        if (event.target == modalMain) {
            modalMain.style.display = "none";
        }
    }

};


function stopModal01() {
    
    //variaveis locais
    var valorPage;

    //pegando o valor da pagina e convertendo.
    valorPage = parseInt(document.getElementById("pagina").value);

    //desativando o modal em certas paginas, só para aparecer uma vez
    switch (valorPage) {
        case 0:

            if (document.cookie == "" || document.cookie == null) {
                
                //executando o modal
                modal();
                
                //colocando ou criando o cookie
                document.cookie = "entradaDeUsuario=1";
            }

            break;
            
        case 1:
            
            if(document.cookie == "entradaDeUsuario=1"){
               
                //executa o modal
                modal();
                
                //alterando o valor
                document.cookie = "entradaDeUsuario=2";
            }
            
            break;
            
        default:
            alert("Erro na parada do modal 0023!!!");
            break;
    }
    
    /*if (valorPage == 0) {

        if (document.cookie == "") {
            modal();

            document.cookie = "entradaDeUsuario=1";
            //alert("Cookie inexistente!!!");

        } else {
            alert("Cookie com valor");
        }
    } else {
        alert("Error De Logica!!!")
    }*/
}
/*fim*/

/*formulario*/
var sacFormulario = function () {
    var nome, email, opiniao, emailNumber, emailTexto;
    
    //atribuindo valores
    nome = document.getElementById("nomeSac").value;
    email = document.getElementById("emailSac").value;
    opiniao = document.getElementById("textoSac").value;
    
    //verificando se é email
    emailNumber = email.indexOf("@");
    emailTexto = email.slice(emailNumber);
    
    if(emailTexto == "@Outlook.com" || emailTexto == "@Gmail.com" || emailTexto == "@hotmail.com" || emailTexto == "@Hotmail.com" || emailTexto == "@outlook.com" || emailTexto == "@gmail.com"){
        
        modal();
        
        //limpando os campos
        document.getElementById("nomeSac").value = "";
        document.getElementById("emailSac").value = "";
        document.getElementById("textoSac").value = "";
        
        
    }else{
        //focando no campo
        alert("Escreve Email Do Formato @gmail ou @outlook!!!");
        document.getElementById("emailSac").focus();
    }
    
};
/*fim/

/* Efeito accordion */

function accordion(valorJsonClass) {
    var painelControlPar, btnAccordion;

    btnAccordion = document.getElementsByClassName("accordion");

    //Convertendo
    painelControlPar = parseInt(valorJsonClass);

    //Com animação

    /*
        aqui estou pegando os valores da minha função depois de convertida e jogada em uma variavel jogando como um parametro para localizar qual className eu quero ativar e depois usando um envento de click para ativar  a outra função
    */
    btnAccordion[painelControlPar].addEventListener("click", function () {

        /*
            nextElementSibling serve para retorna o elemento após o elemento especificado, no mesmo nível de árvore.
            
            exemplo class="accordion" esse é o irmão dele class="panelConteudo"
        */
        var panel = this.nextElementSibling;

        /*
            Uma propriedade classList retorna o (s) nome (s) da classe de um elemento, como um objeto DOMTokenList.

            Essa propriedade é útil para adicionar, remover e alternar classes CSS em um elemento.
        */

        this.classList.toggle("active");

        if (panel.style.maxHeight) {

            panel.style.maxHeight = null;

        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

    });



}
/*fim*/

/*var testeDeCookie = function (value) {
    //atribuindo o valor
    var testeArmazem = value;
    
    
    //atribuindo valor ou criando um cookie
    document.cookie = "entradaDeUsuario=" + testeArmazem;
    
    //guardando o cookie para ser usado mais tarde
    var cookieTes = document.cookie;
    
    //exibindo o valor do cookie
    alert(cookieTes);
};*/
