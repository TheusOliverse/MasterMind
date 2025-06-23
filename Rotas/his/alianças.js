let rol = document.getElementById('rol');
let tit = document.getElementById('tit');
let p = document.getElementById('p');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        rol.classList.add('rol2');
        tit.classList.add('rol2');
        p.classList.add('p2');
    } else{
        rol.classList.remove('rol2');
        tit.classList.remove('rol2');
        p.classList.remove('p2');
    }
})