<?php
require '../banco.php';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$sql = "SELECT nome, curso, sum(total) as pontos from participantes where categoria = 'mister' group by nome order by pontos desc;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $usuarios = array();

    while($row = $result->fetch_assoc()) {
        $row['id'] = intval($row['id']);
        $usuarios[] = $row;
    }
	header('Content-Type: application/json');
  echo  json_encode($usuarios, JSON_PRETTY_PRINT);
	
	
} else {
    echo "Nenhum usuário encontrado.";
}
?>   



