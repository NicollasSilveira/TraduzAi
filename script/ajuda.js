$(".content").css("display", "none");

function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function redirecionarParaArtigo(value) {
  var option = $("#artigos option[value='" + value + "']");
  if (option.length > 0) {
    var targetId = option.data("target");
    // Redireciona para a âncora do artigo
    window.location.href = "#" + targetId;
    // Mostra o conteúdo correspondente ao targetId
    $("#" + targetId).show();
  }
}