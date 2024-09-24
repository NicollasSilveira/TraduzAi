function aumentarTexto() {
  var tamanho = parseFloat(
    window.getComputedStyle(document.body, null).getPropertyValue("font-size"),
  );
  var add = 6;
  var tamnhoAtual = tamanho + add;
  document.body.style.fontSize = tamnhoAtual + "px";

  localStorage.setItem("tamnhoTexto", tamnhoAtual);
}

function diminuirTexto() {
  var tamanho = parseFloat(
    window.getComputedStyle(document.body, null).getPropertyValue("font-size"),
  );
  var add = -6;
  var tamnhoAtual = tamanho + add;
  document.body.style.fontSize = tamnhoAtual + "px";

  localStorage.setItem("tamnhoTexto", tamnhoAtual);
}

function returnUndefined(undefined) {
  return undefined;
}
$(document).ready(function () {
  if (localStorage.getItem("isLogado")) {
    $("#deslogar").css("display", "block");
  } else {
    $("#deslogar").css("display", "none");
  }

  var tamanhoSalvo = localStorage.getItem("tamnhoTexto");
  if (tamanhoSalvo) {
    document.body.style.fontSize = tamanhoSalvo + "px";
  }
  // Função para trocar o tema
  async function trocar_tema() {
    let avatar = document.getElementById("avatrImg");
    let tema = localStorage.getItem("tema");
    if (tema === "escuro") {
      // Entra tema escuro
      $("#temaClar").css("display", "none");
      $("#temaEscu").css("display", "block");

      // Troca de ícones e trocar de plano de fundo
      $("body").css("background-image", "url('img/fundoEscuro.png')");
      try {
        avatar.src = "img/AvatarTemaEscuro.png";
      } catch {
        console.log("erro ao carregar avatar");
      }

      // Troca de cores e texto
      $("p , h1, h2, h3, h4, h5, h7").css("color", "white");

      //Navbar
      $("nav").css(
        "background",
        "linear-gradient(to bottom, #0C1425, #0C1425)",
      );
      $("#logoNav").attr("src", "img/LogoModoEscuro.png");

      //Lupa Modo Responsivo
      $("#lupa").attr("src", "img/LupaModoEscuro.png");

      //Logo Test
      $("#logoCa").attr("src", "img/LogoTestModoEscuro.png");

      //Fale Conosco
      $("#em").attr("src", "img/Email_TemaEscuro.png");
      $("#fale").css("color", "white");

      //Menu DropDown
      $(".dropdown-content").css("background-color", "rgba(64, 64, 64, 0.8)");
      $(".dropdown-content").css("border-color", "rgba(12, 20, 37)");

      // Atualiza cor do hover dos links
      let dropdownLinks = document.querySelectorAll(".dropdown-content a");
      dropdownLinks.forEach((link) => {
        link.addEventListener("mouseover", function () {
          this.style.backgroundColor = "grey";
        });
        link.addEventListener("mouseout", function () {
          this.style.backgroundColor = "";
        });
      });

      $("#textoDrop").css("color", "white");
      $("#textoDrop2").css("color", "white");
      $("#textoDrop3").css("color", "white");
      $("#textoDrop4").css("color", "white");

      //Index
      $("#setaE").attr("src", "img/SetaEsquerda_TemaEscuro.png");
      $("#setaD").attr("src", "img/SetaDireita_TemaEscuro.png");
      $("#pdf").attr("src", "img/PDF_TemaEscuro.png");
      $("#web").attr("src", "img/WEB_TemaEscuro.png");

      $("#redirCadastro").css("background-color", "#404040");
      $("#btnCadastrar").css("color", "white");
      $("#clickAqui").css("color", "#4FCCF2");

      // Sobre Nós
      $(".perfil").css("background-color", "#0C1425");
      $(".perfil").css("border", "15px", "#0C1425");

      // central de ajuda
      $("#inf").css("background-color", "#0C1425");
      $("#bordtop").css("border", "#0C1425");
      $(".titulo").css("border", "#0C1425");

      $("#inf2").css("background-color", "#0C1425");
      $("#bordtop2").css("border", "#0C1425");

      $("#inf3").css("background-color", "#0C1425");
      $("#bordtop3").css("border", "#0C1425");

      $(".artigo").css("background-color", "#404040");

      //Cadastro
      $("#fundo").css("background-color", "rgba(12, 20, 37, 0.3)");
      $("#fundo").css("border-color", "rgba(12, 20, 37, 0.1)");
      // $('input[type="radio"]').css("background-color", "#0C1425");
      $('input[type="radio"]:checked').css("background-color", "white");
      $("#botao1").css("background-color", "white");

      //login
      $("#botao").css("background-color", "white");
      $(".login-login").css("background-color", "white");
      $(".senha-login").css("background-color", "white");
      $("#Login_a_login").css("color", "white");
      $("#Login_a_senha").css("color", "white");
    } else {
      // Entra tema claro
      localStorage.setItem("tema", "claro");
      $("#temaEscu").css("display", "none");
      $("#temaClar").css("display", "block");

      // Troca de ícones e trocar de plano de fundo
      $("body").css("background-image", "url('img/fundo.jpg')");
      try {
        avatar.src = "img/Avatar.png";
      } catch {
        console.log("erro ao carregar avatar");
      }

      // Troca de cores e texto
      $("p , h1, h2, h3, h4, h5, h7").css("color", "black");

      // Navbar
      $("nav").css(
        "background",
        "linear-gradient(to bottom, #E48FA4, #f9cddc)",
      );
      $("#logoNav").attr("src", "img/Logo.png");

      //Lupa Modo Responsivo
      $("#lupa").attr("src", "img/lupa.png");

      //Logo Test
      $("#logoCa").attr("src", "img/LogoTest.png");

      //Fale Conosco
      $("#em").attr("src", "img/Email_TemaClaro.png");
      $("#fale").css("color", "black");

      //Menu DropDown
      $(".dropdown-content").css(
        "background-color",
        "rgba(249, 231, 230, 0.8)",
      );
      $(".dropdown-content").css("border-color", "rgba(228, 143, 164)");

      // Atualiza cor do hover dos links
      let dropdownLinks = document.querySelectorAll(".dropdown-content a");
      dropdownLinks.forEach((link) => {
        link.addEventListener("mouseover", function () {
          this.style.backgroundColor = "white";
        });
        link.addEventListener("mouseout", function () {
          this.style.backgroundColor = "";
        });
      });

      $("#textoDrop").css("color", "black");
      $("#textoDrop2").css("color", "black");
      $("#textoDrop3").css("color", "black");
      $("#textoDrop4").css("color", "black");

      //Index
      $("#setaE").attr("src", "img/SetaEsquerda_TemaClaro.png");
      $("#setaD").attr("src", "img/SetaDireita_TemaClaro.png");
      $("#pdf").attr("src", "img/PDF_TemaClaro.png");
      $("#web").attr("src", "img/WEB_TemaClaro.png");

      // Sobre Nós
      $(".perfil").css("background-color", "#f9cddc");
      $(".perfil").css("border", "15px", "#f9cddc");

      $("#redirCadastro").css("background-color", "#fff6e5");
      $("#btnCadastrar").css("color", "black");
      $("#clickAqui").css("color", "#f2567b");

      // central de ajuda
      $("#inf").css("background-color", " #f9cddc");
      $("#bordtop").css("border", "#f9cddc");
      $(".titulo").css("border", "#f9cddc");

      $("#inf2").css("background-color", "#f9cddc");
      $("#bordtop2").css("border", "#f9cddc");
      $(".titulo").css("border", "#f9cddc");

      $("#inf3").css("background-color", "#f9cddc");
      $("#bordtop3").css("border", "#f9cddc");
      $(".titulo").css("border", "#f9cddc");

      $(".artigo").css("background-color", "#fff6e5");

      //Cadastro
      $("#fundo").css("background-color", "rgba(249, 205, 220, 0.3)");
      $("#fundo").css("border-color", "rgba(249, 205, 220, 0.1)");
      $("#botao1").css("background-color", "#f9cddc");

      //login
      $("#botao").css("background-color", "#f9cddc");
      $(".login-login").css("background-color", "#f9cddc");
      $(".senha-login").css("background-color", "#f9cddc");
      $("#Login_a_login").css("color", "black");
      $("#Login_a_senha").css("color", "black");
    }
  }
  trocar_tema();

  // Configurar o clique do botão para trocar o tema
  $(".trocarTema").click(function () {
    let tema = localStorage.getItem("tema");
    if (tema === "escuro") {
      localStorage.setItem("tema", "claro");
    } else {
      localStorage.setItem("tema", "escuro");
    }
    trocar_tema();
  });
});
