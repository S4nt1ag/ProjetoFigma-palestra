document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("entrarBtn").onclick = function() {
      var username = document.getElementById("username").value;
      var mensagemBoasVindas = "Bem-vindo(a), " + username + "!"; // Personalize the welcome message as needed
      
      if (username) {
        var storedUser = localStorage.getItem(username);
        
        if (storedUser) {
          var password = document.getElementById("password").value;
          var storedPassword = JSON.parse(storedUser).password;
          
          if (password === storedPassword) {
            // Redirect to homepage.html
            localStorage.setItem("loggedUser", username);
            window.location.href = "homepage.html";
          } else {
            alert("Senha incorreta. Por favor, tente novamente.");
          }
        } else {
          var newUserPassword = prompt("Usuário não encontrado. Insira uma senha para cadastro:");
          
          if (newUserPassword) {
            var newUser = {
              username: username,
              password: newUserPassword
            };
            localStorage.setItem(username, JSON.stringify(newUser));
            alert(mensagemBoasVindas);
          } else {
            alert("Por favor, insira uma senha válida.");
          }
        }
      } else {
        alert("Por favor, insira seu nome de usuário.");
      }
    };
    
  });
  