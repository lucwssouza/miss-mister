<?php
$datax = json_decode(file_get_contents('php://input'), true);
$token = $datax['token'] ?? null;

if (isset($token) && $token === 'Q!W@ee344%%R') {

    require '../banco.php';

    try {
        $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $nome = $datax['aluno'];
        $juradoid = $datax['jurado'];
        $n1 = $datax['elegancia'];
        $n2 = $datax['desenvoltura'];
        $n3 = $datax['simpatia'];
        $n4 = $datax['reciclavel'];
        $total = ($n1 + $n2 + $n3 + $n4) /4;
        $juradonome = $datax['juradonome'];
        $curso = $datax['curso']; 
        $categoria = $datax['categoria']; 

        $sql = "INSERT INTO participantes (nome, curso, n1, n2, n3, n4, total, juradoid, juradonome, categoria)
                VALUES (:nome, :curso, :n1, :n2, :n3, :n4, :total, :juradoid, :juradonome, :categoria)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':curso', $curso);
        $stmt->bindParam(':n1', $n1);
        $stmt->bindParam(':n2', $n2);
        $stmt->bindParam(':n3', $n3);
        $stmt->bindParam(':n4', $n4);
        $stmt->bindParam(':total', $total);
        $stmt->bindParam(':juradoid', $juradoid);
        $stmt->bindParam(':juradonome', $juradonome);
        $stmt->bindParam(':categoria', $categoria);
        $stmt->execute();

        $response = array('success' => true, 'message' => 'Voto cadastrado com sucesso');
        echo json_encode($response);
    } catch (PDOException $e) {
        $response = array('success' => false, 'message' => 'Erro ao salvar: ' . $e->getMessage());
        echo json_encode($response);
    }
} else {
    $response = array('success' => false, 'message' => 'Token inválido');
    echo json_encode($response);
}
?>
