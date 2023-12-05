window.onload = function () {
  carregarCadastrosSalvos();
  listarCadastrosSalvos();
};

function cadastrarUsuario() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;

  if (nome && email) {
    var novoCadastro = {
      nome: nome,
      email: email,
    };

    salvarCadastro(novoCadastro);

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";

    alert("Cadastro efetuado com sucesso!");

    listarCadastrosSalvos();
  } else {
    alert("Preencha todos os campos do formulário!");
  }
}

function salvarCadastro(cadastro) {
  var cadastrosSalvos = JSON.parse(localStorage.getItem("cadastros")) || [];

  cadastrosSalvos.push(cadastro);

  localStorage.setItem("cadastros", JSON.stringify(cadastrosSalvos));
}

function listarCadastrosSalvos() {
  var cadastrosSalvos = JSON.parse(localStorage.getItem("cadastros")) || [];

  console.log("Cadastros Salvos:");
  cadastrosSalvos.forEach(function (cadastro) {
    console.log(`Nome: ${cadastro.nome}, Email: ${cadastro.email}`);
  });
}

function limparLocalStorage() {
  localStorage.removeItem("cadastros");
  console.log("LocalStorage limpo!");
}