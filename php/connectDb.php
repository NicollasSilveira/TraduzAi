<?php
$conn = new mysqli("localhost","root","","traduzdb");
if ($conn->connect_error) {die("ERRO EM:<?=$conn->connect_error?>");}
?>