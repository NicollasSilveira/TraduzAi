<!doctype html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="script/jquery-3.7.1.min.js"></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <script src="script/jQuery-Mask-Plugin-master/dist/jquery.mask.js"></script>
  <script src="script/cadastro.js"></script>
  <link rel="stylesheet" href="css/bg.css" />
  <link rel="stylesheet" href="css/logs.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
  <script src="script/script.js"></script>
  <script src="script/adicionais.js"></script>

  <title>LOGS</title>
</head>

<?php
include "php\connectDb.php";

$sql = "SELECT id, USUARIO_id, dataHora, acaoResult, dadosEntrada FROM log";
$result = $conn->query($sql);
?>

<body>
  <header>
    <nav>
      <ul>
        <li><h1>ADMIN</h1></li>
        <li>
          <img src="img/lupa.png" id="lupa" width="32px" height="32px">
        </li>
        <!-- MENU DROPDOWN !-->
        <div id="navIcon">
          <li>
            <a href="index.html"><img id="logoNav" src="img/Logo.png" alt="Volar a pagina principal"
                title="Volar a pagina principal"></a>
          </li>
          <li>
            <img src="img/LuaModoEscuro.png" class="trocarTema" id="temaClar" width="40px" height="40px"
              alt="Trocar para tema escuro" title="Trocar para tema escuro" />
            <img src="img/SolModoClaro.png" class="trocarTema" id="temaEscu" width="33px" height="33px"
              alt="Trocar para tema claro" title="Trocar para tema claro" />
          </li>

          <div class="drop">
            <li><img class="imgNav" id="treslinhas" src="img/tresLinhas.png" />
              <div class="dropdown-content">
                <a id="textoDrop" href="login.html" style="text-decoration: none;">Login</a>
                <a id="textoDrop3" href="sobreNos.html" style="text-decoration: none;">Sobre</a>
                <a id="textoDrop4" href="ajuda.html" style="text-decoration: none;">Central de Ajuda</a>
              </div>
          </div>
          <li><a href="Configuracoes.html"><img id="pessoa" class="imgNav" title="Configurações"
                src="img/pessoa.png" /></a></li>
        </div>
        <!-- FIM MENU DROPDOWN !-->
    </nav>
  </header>

  <main>

    <div class="logs">
        <h2>Central de logs</h2>
        <div class="camposLogs">
          <table style="width: 100%;">
            <tr>
              <th>ID</th>
              <th>USUARIO</th>
              <th>DATA/HORARIO</th>
              <th>AÇÃO</th>
              <th>ENTRADA</th>
           </tr>
           <?php
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>
                <th>" . $row['id'] . "</th>
                <th>" . $row['USUARIO_id'] . "</th>
                <th>" . $row['dataHora'] . "</th>
                <th>" . $row['acaoResult'] . "</th>
                <th>" . $row['dadosEntrada'] . "</th>
             </tr>";
                }
            } else {
                echo "0 results";
            }
            $conn->close();
           ?>
          </table>
        </div>

    </div>

  </main>
  <footer>
  </footer>
</body>

</html>