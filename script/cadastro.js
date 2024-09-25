function mostrarSenha() {
  var inputPass = document.getElementById("senha");
  var btShowPass = document.getElementById("m-senha-1");

  if (inputPass.type === "password") {
    inputPass.type = "text";s
    btShowPass.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    inputPass.type = "password";
    btShowPass.classList.replace("bi-eye-slash", "bi-eye");
  }
}

function mostrarConfirm() {
  var inputPass = document.getElementById("senhaConfirm");
  var btShowPass = document.getElementById("m-senha-2");

  if (inputPass.type === "password") {
    inputPass.type = "text";
    btShowPass.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    inputPass.type = "password";
    btShowPass.classList.replace("bi-eye-slash", "bi-eye");
  }
}

function verificarLetra(e) {
  return /^[a-zA-Z\s]+$/.test(e);
}

function verificar_campos(event){
  if(!verificarLetra($(".u_nome").val().trim()) ||
     !verificarLetra($(".u_mae").val().trim()) ||
     !verificarLetra($(".u_endereco").val().trim()) ||
     !verificarLetra($(".u_pais").val().trim())
  ){
    event.preventDefault();
    swal("Caracteres especiais não são permitidos ");
  }
}


function validar_cpf(event) {
  // Declaração das variaveis que serão usadas para o funcionamento dessa função.

  const cpf = $(".cpf").cleanVal();
  var peso = 10;
  var total = 0;
  var primeiro_verif = 0;
  var segundo_verif = 0;
  var mult = 0;
  let i = 0;

  console.log(cpf);

  for (; i < 9; i++) {
    // Estrutura de repetição responsavel por percorrer cada numero do cpf e fazer a multiplicação
    mult = cpf[i] * peso;
    console.log(mult);
    peso--;
    total = total + mult;
  }

  if (total % 11 < 2) {
    // Definição do numero verificador 1
    primeiro_verif = 0;
  } else {
    primeiro_verif = 11 - (total % 11);
  }

  peso = 11;
  total = 0;
  i = 0;

  console.log("// SEGUNDO //");

  for (; i < 10; i++) {
    // Estrutura de repetição responsavel por percorrer cada numero do cpf e fazer a multiplicação
    mult = cpf[i] * peso;
    console.log(mult);
    peso--;
    total = total + mult;
  }

  if (total % 11 < 2) {
    // Definição do numero verificador 2
    segundo_verif = 0;
  } else {
    segundo_verif = 11 - (total % 11);
  }
  // Logs para testes de mesa
  console.log("verificador 1");
  console.log(primeiro_verif);
  console.log("verificador 2");
  console.log(segundo_verif);

  if (primeiro_verif == cpf[9] && segundo_verif == cpf[10]) {
    // Validação do pós calculo com os valores inseridos
    console.log("CPF VÁLIDO");
    return true;
  } else {
    swal("CPF INVALIDO!!!"); // Mensagem de alerta do cpf invalida, (trocar pfv kkk)
    event.preventDefault(); // Cancela o evento do envio e progresso do submit
  }
}

function veirificar_senha(event) {
  console.log($("#senhaConfirm").val());
  console.log($("#senha").val());
  if ($("#senha").val() == $("#senhaConfirm").val()) {
    // Verificação da senha e a confirmação da mesma
    console.log("SENHA OK"); // Console log, teste
    return true;
  } else {
    event.preventDefault(); // Cancelar envio e progresso do submit
    swal("senha incorretro"); // Mensagem deerro (trocar)
  }
}
function verificar_data_nasci(event) {
  const data_nasc = new Date($(".datanasc").val()); // Recebe a data de nascimento do usuario
  const agora = new Date(); // Recebe a data atual da maquina
  // log
  console.log(data_nasc);
  console.log(agora);

  if (data_nasc >= agora) {
    // Verificação da data de nascimento com datas invalidas ex: dia seguinte
    swal("Data de nascimento invalida!");
    event.preventDefault(); // Cancelar envio e progresso do submit
  } else {
    return true;
  }
}

const cep = $(".u_cep").val();
const logradouro = $(".u_logra").val();
const bairro = $(".bairro").val();
const estado = $(".estado").val();
cep.addEventListener('focusout', async ()=>{
  
  const response = await fetch (`viacep.com.br/ws/${cep.value}/json/`); 
  if(!response.ok) {
    throw await response.json(); 
  } 


console.log(responseCep.cep, responseCep.logradouro, responseCep.bairro, responseCep.estado);  const responseCep = await response.json (); 

cep.value = responseCep.cep;
logradouro.value = responseCep.logradouro;
bairro.value = responseCep.bairro;
estado.value = responseCep.estado;
})



$(document).ready(function () {
  // Mascara nos campos
  $(".cpf").mask("000.000.000-00");
  $(".telefone").mask("(00) 00000-0000");
  $(".u_cep").mask("00000-000");
  // Chamada das funções ao click no butão
  $("form").on("submit", function (event) {
    if (validar_cpf(event)) {
      if (veirificar_senha(event)) {
        if (verificar_data_nasci(event)) {
          if (verificar_campos(event)) {
            swal(
              "Tudo certo, agora você pode fazer o login, seu cadastro está concluido!",
            );
          }
        }
      }
    }
  });
});
