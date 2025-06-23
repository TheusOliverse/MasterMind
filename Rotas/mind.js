let tit = document.getElementById("tit");
let rol = document.getElementById("rol");
let in1 = document.getElementById("in1");

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        in1.classList.remove("in2");
    } else {
        in1.classList.add("in2");
    }
}); 

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        tit.classList.add("tit2");
        rol.classList.add("rol2");
    } else {
        tit.classList.remove("tit2");
        rol.classList.remove("rol2");
    }
}); 