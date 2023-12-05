window.onload = function () {
    carregarCadastrosSalvos();
  };
  
  function listarCadastrosSalvos() {
    exibirCadastros();
  }
  
  function exibirCadastros() {
    var cadastrosSalvos = JSON.parse(localStorage.getItem("cadastros")) || [];
    var cadastrosExibicao = document.getElementById("cadastrosExibicao");
  
    cadastrosExibicao.innerHTML = "";
  
    if (cadastrosSalvos.length === 0) {
      cadastrosExibicao.innerHTML = "<p>Nenhum cadastro disponível.</p>";
    } else {
      var lista = document.createElement("ul");
  
      cadastrosSalvos.forEach(function (cadastro) {
        var itemLista = document.createElement("li");
        itemLista.textContent = `Nome: ${cadastro.nome}, Email: ${cadastro.email}`;
        lista.appendChild(itemLista);
      });
  
      cadastrosExibicao.appendChild(lista);
    }
  }