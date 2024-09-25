<!doctype html>
<html lang="pt-br">
  <head>
    <script src="script/jquery-3.7.1.min.js"></script>
    <meta charset="utf-8"/>
    <script src="script/adicionais.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Central de Ajuda</title>
    <link rel="stylesheet" href="css/ajuda.css"/>
    <link rel="stylesheet" href="css/bg.css"/>
    <script src="script/script.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
  </head>

<?php
    include "php\connectDb.php";
    $sql = "SELECT `id`, `CONTRATO_id`, `nome`, `NomeMaterno`, `cpf`, `email`, `cel`, 
    `dtNasc`, `cep`, `complementoEnd`, `login`, `senha`, `sexo`, `isAtivo` FROM `usuario` WHERE id = ". $_GET["id"];
    $result = $conn->query($sql);
?>

  <body>
    <header>
      <nav>
        <ul>
          <li id="pergunta">
            <a><p class="tamPequeno">Precisa de ajuda? Digite aqui como podemos te ajudar.</p></a>
          </li>
          <li>
              <input
                class="tamPequeno"
                id="pesqNav"
                type="text"
                placeholder="Selecione um artigo..."
                list="artigos"
                name="artigos"
                oninput="redirecionarParaArtigo(this.value)"
              />
              <datalist id="artigos">
                <option value="Como usar o TraduzAí?" data-target="como-usar-traduza"></option>
                <option value="Encontrei um erro na minha tradução, e agora?" data-target="erro-traducao"></option>
                <option value="Por que não há outros idiomas disponíveis?" data-target="outros-idiomas"></option>
              </datalist>
          </li>

          <li>
            <img src="img/lupa.png"
              id="lupa" width="32px" height="32px">
          </li>
      <!-- MENU DROPDOWN !-->
          <div id="navIcon">
            <li>
              <a href="index.html"><img id="logoNav" src="img/Logo.png" alt="Volar a pagina principal" title="Volar a pagina principal"></a>
            </li>
            <li>
              <img src="img/LuaModoEscuro.png" class="trocarTema" id="temaClar" width="40px" height="40px" alt="Trocar para tema escuro" title="Trocar para tema escuro"/>
              <img src="img/SolModoClaro.png" class="trocarTema" id="temaEscu" width="33px" height="33px" alt="Trocar para tema claro" title="Trocar para tema claro"/>
            </li>
        <div class="drop">
          <li><img class="imgNav" id="treslinhas" src="img/tresLinhas.png"/>
        <div class="dropdown-content" id="papai">
                  <a id="textoDrop" href="login.html" style="text-decoration: none;">Login</a>
                  <a id="textoDrop2" href="cadastro.html" style="text-decoration: none;">Cadastro</a>
                  <a id="textoDrop3" href="sobreNos.html" style="text-decoration: none;">Sobre</a>
        </div>
        </div>
            <li><a href="Configuracoes.html"><img class="imgNav" title="Configurações" src="img/pessoa.png"/></a></li>
        </div>
      <!-- FIM MENU DROPDOWN !-->
      </nav>
    </header>
    <main>
      <form action="">
        <?php
            if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                      if($row["isAtivo"] == 1){$isAtivo = "online";} else{ $isAtivo = "Offline";}
                    echo"<label>ID usuario: <input type='text' disabled value='" .$row['id']. "'></input></label><br>
                         <label>Online: <input type='text' disabled value='" .$isAtivo. "'></input></label><br>
                         <label>Nome usuario: <input type='text' value='" .$row['nome']. "'></input></label><br>
                         <label>Nome materno usuario: <input type='text' value='" .$row['NomeMaterno']. "'></input></label><br>
                         <label>Email usuario: <input type='text' value='" .$row['email']. "'></input></label><br>
                         <label>Data nascimento usuario: <input type='text' value='" .$row['dtNasc']. "'></input></label><br>
                         <label>CEP usuario: <input type='text' value='" .$row['cep']. "'></input></label><br>
                         <label>Endereço usuario: <input type='text' value='" .$row['complementoEnd']. "'></input></label><br>
                         <label>Login usuario: <input type='text' value='" .$row['login']. "'></input></label><br>
                         <label>Senha usuario: <input type='text' disabled value='" .$row['senha']. "'></input></label><br>
                         <label>Sexo usuario: <input type='text' value='" .$row['sexo']. "'></input></label><br>";
                    }
                } else {
                    echo "USURIO INEXISTENTE";
                }
        ?>

        </form>
    </main>
    
    <footer>
      <div id="avatar">
        <img id="avatrImg" src="img/Avatar.png" width="430px" height="430px"/>
      </div>

      <div id="faleCnc">
        <ul>
          <li>
              <a href="https://mail.google.com/mail/?view=cm&to=faleconoscotraduzai@gmail.com&su=Oi,%20pode%20me%20ajudar?" target="_blank">
                 <img id="em" src="img/Email_TemaClaro.png"> <a href="https://mail.google.com/mail/?view=cm&to=faleconoscotraduzai@gmail.com&su=Oi,%20pode%20me%20ajudar?" target="_blank" id="fale">Fale conosco</a>
              </a>
          </li>
        </ul>
      </div>
    </footer>
  </body>
  