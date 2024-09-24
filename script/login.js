function validar_campos(event) {
  if (
    $(".login-login").val().trim().length == 0 ||
    $(".senha-login").val().trim().length == 0
  ) {
    event.preventDefault();
    swal("Campos Vazios");
  } else {
    console.log("OK!");
    return true;
  }
}

function validar_dados(event) {
  let login = $(".login-login").val();
  let senha = $(".senha-login").val();
  const locLogin = localStorage.getItem("login");
  const locSenha = localStorage.getItem("senha");

  if (login == locLogin && senha == locSenha) {
    swal("Login e senha válidos.");
    localStorage.setItem("isLogado", true);
    return true;
  } else {
    event.preventDefault();
    swal("Erro: Login ou senha incorretos.");
  }
}

$(document).ready(function () {
  $("form").on("submit", function (event) {
    if (validar_campos(event)) {
      validar_dados(event);
    }
  });
});
