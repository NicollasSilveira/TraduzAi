const axios = require("axios");

const apiKey = "851163703";

const url =
  "https://smartcat.com/api/integration/v1/smartTranslation/translate";

async function traduzir_texto(texto, lingFonte, lingAlvo) {
  try {
    const response = await axios.post(
      url,
      {
        text: texto,
        source_language: lingFonte,
        target_language: lingAlvo,
      },
      {
        headers: {
          Authorization: "Bearer ${apiKey}",
          "Content-Type": "application/json",
        },
      },
    );
    if (response.status === 200) {
      const traducao = response.data;
      console.log("tradução: ", traducao.translatedText);
    } else {
      console.error("erro na requisição: ", erro);
    }
  } catch (erro) {
    console.error("erro na requisição: ", erro);
  }
}

function traduz_auto() {
  const docEntrada = $("#input-file").val();
  console.log(docEntrada);

  switch (docEntrada) {
    case "C:\\fakepath\\DeathNoteENG.pdf":
      swal("fazendo dowload do arquivo traduzido");
      document.getElementById("DeathNote").click();
      break;
    case "C:\\fakepath\\NarutoGER.pdf":
      swal("fazendo dowload do arquivo traduzido");
      document.getElementById("Naruto").click();
      break;
    case "C:\\fakepath\\CsmENG.pdf":
      swal("fazendo dowload do arquivo traduzido");
      document.getElementById("CSM").click();
      break;
    default:
      swal(`Erro no arquivo: ${docEntrada}`);
  }
}
