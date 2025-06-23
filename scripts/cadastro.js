let falha = document.getElementById("falha");
falha.style.display = 'none';

let cadastrar = document.getElementById("cadastrar_button");
cadastrar.style.display = 'none';

function falha_senha() {
  let senha = document.getElementById("senha").value;
  let confirmar = document.getElementById("confirmar").value;

  if (senha == confirmar) {
    falha.style.display = 'none';
    cadastrar.style.display = '';
  } else{
    falha.style.display = '';
    cadastrar.style.display = 'none';
  }
}