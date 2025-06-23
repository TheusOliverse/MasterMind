let main = document.getElementById("main");
let header = document.getElementById("header");
let tit = document.getElementById("titu");
let subtit =  document.getElementById("subtitu");
let div_black =  document.getElementById("div_black");
let fundo = document.getElementById("itens");
let rolagem = document.getElementById("rolagem");
let subitens = document.getElementById("subitens");
subitens.classList.remove("imagem-itens");


main.addEventListener('mouseenter', () => {
    tit.classList.add("titu");
    subtit.classList.add("subtitu");
    div_black.classList.add("black");
    rolagem.classList.add("rolagem2");
    subitens.classList.add("imagem-itens");
})

header.addEventListener('mouseenter', () => {
    subitens.classList.remove("imagem-itens");
    tit.classList.remove("titu");
    subtit.classList.remove("subtitu");
    div_black.classList.remove("black");
    rolagem.classList.remove("rolagem2");

})