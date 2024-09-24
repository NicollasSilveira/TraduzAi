$(document).ready(function () {
  $("#redirCadastro").hide();

  $("#lupa").click(function () {
    $("#lupa").hide();
    $("#pesqNav").css("display", "flex");
  });

  $("#icones").click(function () {
    $("#redirCadastro").show();
  });
});

//Redirecionamento para a tela de ajuda (ajustar com o Nic)

function redirecionarParaArtigo(value) {
  i = 0;
  $("input").keypress(function (e) {
    i += 1;
    if (i >= 45 || e.which === 13) {
      console.log(option);
      console.log(i);
      var option = $("#artigos option[value='" + value + "']");
      console.log(option.length);
      if (option.length > 0) {
        var targetId = option.data("target");
        sessionStorage.setItem("targetId", targetId); // Armazena o targetId no sessionStorage
        window.location.href = "ajuda.html#" + targetId;
      } else {
        var matchedOption = $("#artigos option").filter(function () {
          return this.value.toLowerCase().includes(value.toLowerCase());
        });
        if (matchedOption.length > 0) {
          var targetId = matchedOption.first().data("target");
          sessionStorage.setItem("targetId", targetId); // Armazena o targetId no sessionStorage
          window.location.href = "ajuda.html#" + targetId;
        } else {
          alert("Artigo não encontrado. Por favor, tente outra pesquisa.");
          document.getElementById("pesqNav").value = null; //não chame uma função dentro de outra e ao menos muito necessario e não existe nescessidade de criar uma função para ser usada uma unica vez
        }
      }
    }
  });
}

// Limpa o campo de entrada após o recarregamento da página
window.onload = function () {
  var targetId = sessionStorage.getItem("targetId");
  if (targetId) {
    $("#" + targetId).show();
    sessionStorage.removeItem("targetId"); // Remove o item após usar
  }
};
