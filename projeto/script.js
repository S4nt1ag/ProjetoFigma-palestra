//    BOTÃO MENU COM SUAS FUNÇÕES
const openMenu = () => {
    document.querySelector(".backdrop").className = "backdrop active";
    document.getElementById("asideMenu").className = "active";
  };
  const closeMenu = () => {
    document.querySelector(".backdrop").className = "backdrop";
    document.getElementById("asideMenu").className = "";
  };
  document.getElementById("menuBtn").onclick = (e) => {
    e.preventDefault();
    openMenu();
  };
  document.querySelector("aside button.close").onclick = (e) => {
    closeMenu();
  };
  document.querySelector(".backdrop").onclick = (e) => {
    closeMenu();
  };
  
// Obtém o nome do usuário armazenado no localStorage
var loggedUser = localStorage.getItem("loggedUser");

// Verifica se o nome do usuário existe e não é vazio
if (loggedUser && loggedUser !== "") {
  // Obtém o elemento h1 pelo ID
  var h1Element = document.getElementById("meu-nome");

  // Define o conteúdo do elemento h1 como o nome do usuário
  h1Element.textContent = loggedUser;
}

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    var tarefa = prompt("Digite o nome da tarefa:");
  
    if (tarefa && tarefa !== "") {
      // Obtém as tarefas existentes do localStorage
      var tarefas = obterTarefas();
  
      // Verifica se existem tarefas para o usuário logado
      if (!tarefas[loggedUser]) {
        tarefas[loggedUser] = [];
      }
  
      // Adiciona a nova tarefa ao array do usuário logado
      tarefas[loggedUser].push(tarefa);
  
      // Armazena as tarefas atualizadas no localStorage
      salvarTarefas(tarefas);
  
      // Cria um elemento de tarefa na interface
      criarElementoTarefa(tarefa);
    }
  }
  
  // Função para obter as tarefas do localStorage
  function obterTarefas() {
    var tarefas = localStorage.getItem("tarefas");
  
    if (tarefas) {
      return JSON.parse(tarefas);
    } else {
      return {};
    }
  }
  
  // Função para salvar as tarefas no localStorage
  function salvarTarefas(tarefas) {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }
  
  // Função para criar elementos de tarefas na interface
  function criarElementosTarefas(tarefas) {
    var containerTarefas = document.querySelector(".containerTarefas");
  
    for (var i = 0; i < tarefas.length; i++) {
      var label = document.createElement("label");
      label.className = "containerCheckbox";
      label.textContent = tarefas[i];
  
      var input = document.createElement("input");
      input.type = "checkbox";
      input.checked = false;
  
      var span = document.createElement("span");
      span.className = "checkmark";
  
      label.appendChild(input);
      label.appendChild(span);
      containerTarefas.appendChild(label);
    }
  }
  
  // Carrega as tarefas do localStorage ao carregar a página
  window.addEventListener("DOMContentLoaded", function () {
    var tarefas = obterTarefas();
  
    if (tarefas[loggedUser]) {
      criarElementosTarefas(tarefas[loggedUser]);
    }
  });
  
  // Associa a função adicionarTarefa ao evento de clique do botão "Adicionar"
  var buttonAdicionar = document.getElementById("buttonAdicionar");
  buttonAdicionar.addEventListener("click", adicionarTarefa);
  

