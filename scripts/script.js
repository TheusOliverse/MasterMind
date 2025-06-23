//caixas de textos
document.getElementById('section_caixas').style.display = 'none';
function caixas_iniciais() {
    document.getElementById('section_caixas').style.display = '';
}

//hora do dispositivo
function horario() {
    let tempo = new Date();
    var hora, minuto;
    hora = tempo.getHours();
    minuto = tempo.getMinutes();
    if (hora < 10) {
        hora = '0' + hora;
    }
    if (minuto < 10) {
        minuto = '0' + minuto;
    }
    let mensagem_tempo = 'A hora atual é: ' + hora + ':' + minuto;
    alert(mensagem_tempo)
}

//Caixa de emails
document.getElementById('ultima_caixa').style.display = 'none';
function caixa_email() {
    document.getElementById('ultima_caixa').style.display = '';
}
function fechar_caixa_email() {
    document.getElementById('ultima_caixa').style.display = 'none';
}

//biblioteca
let bibli = document.getElementById("bibli");
bibli.style.display = 'none';
function add_bibli() {
    bibli.style.display = '';
    remove_cont();
}
function remove_bibli() {
    bibli.style.display = 'none';
}

//contato
let cont = document.getElementById("cont");
cont.style.display = 'none';
function add_cont() {
    document.getElementById("cont").classList.toggle("cont2");
    cont.style.display = '';
    remove_bibli();
}
function remove_cont() {
    cont.style.display = 'none';
}

//sidebar
let icone_canto = document.getElementById("icone_canto");
let sidebar = document.getElementById("sidebar");
function add_sidebar() {
    icone_canto.classList.add("invi");
    sidebar.classList.toggle("mov_sidebar");
    cont.style.display = 'none';
    bibli.style.display = 'none';
}

function add_sidebar2() {
    icone_canto.classList.remove("invi");
    sidebar.classList.toggle("mov_sidebar");
}
//configurações
let conf = document.getElementById("conf");

function addmove_conf() {
    conf.classList.toggle("lado_conf");
    sidebar.classList.toggle("mov_sidebar");
}

//temas
let nav1 = document.getElementById("nav_sections");
let header = document.getElementById("header");

function red() {
    header.classList.add("red_header");
    nav1.classList.add("red");

    header.classList.remove("dark_header");
    nav1.classList.remove("dark");
}

function dark() {
    header.classList.add("dark_header");
    nav1.classList.add("dark");
}

function blue_roxo() {
    header.classList.remove("red_header");
    nav1.classList.remove("red");
    header.classList.remove("dark_header");
    nav1.classList.remove("dark");
}

//cor do texto
let color = document.getElementById("body");

function yellow_text() {
    color.classList.add("yellow_text");
    color.classList.remove("dark_text");
}

function dark_text() {
    color.classList.add("dark_text");
    color.classList.remove("yellow_text");
}

function white_text() {
    color.classList.remove("yellow_text");
    color.classList.remove("dark_text");
}

//modo dev
let dev = document.getElementById("modo_dev");
function add_dev() {
    sidebar.classList.toggle("mov_sidebar");
    dev.classList.toggle("sumir_caixa_dev");
}

let wel = document.getElementById("welcome");
let space = document.getElementById("welcome");
let close_dev = document.getElementById("but-dev");

function login_dev() {
    let nome_dev = document.getElementById("nome_dev").value;
    let senha_dev = document.getElementById("senha_dev").value;
    let incorreto = document.getElementById("incorreto");
    let correto = document.getElementById("correto");

    //O que você tá fazendo aqui?
    if (nome_dev == 'dev' && senha_dev == '8114') {
        correto.innerHTML = 'Logado com sucesso.';
        incorreto.innerHTML = '';
        wel.style.display = '';
        space.classList.remove("wel_space");
        dev.classList.toggle("sumir_caixa_dev");
        close_dev.style.display = 'none';
    } else {
        correto.innerHTML = '';
        incorreto.innerHTML = 'Nome ou senha incorreto.';
    }
}

function continue_dev() {
    space.classList.add("wel_space");
    icone_canto.classList.remove("invi");
}

//parte do login
let  main = document.getElementById("main");
let login = document.getElementById("form_login");
let icone = document.getElementById("icone_canto");
let vis = document.getElementById("vis");
let close_login = document.getElementById("fechar_logn");

close_login.style.display = 'none';
main.style.display = '';
icone.style.display = '';

function addMain_visitante() {
    login.style.display = 'none';
    main.style.display = '';
    icone.style.display = '';
    vis.style.display = 'none';
    close_login.style.display = '';
}

function login_add() {
    login.style.display = '';
    icone.style.display = 'none';
    sidebar.classList.toggle("mov_sidebar");
}

function fechar_aba_login() {
    login.style.display = 'none';
    icone.style.display = '';
    sidebar.classList.toggle("mov_sidebar");
}

//Login em off
login.style.display = 'none';

let logar = document.getElementById("perfil");

logar.style.display = 'none';

let devlogar = document.getElementById("devmodo");
devlogar.style.display = 'none';