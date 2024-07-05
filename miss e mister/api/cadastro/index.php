<?php
$datax = json_decode(file_get_contents('php://input'), true);
$token = $datax['token'];

if (isset($token) && !empty($token) && $token === 'Q!W@ee344%%R') {

    require '../banco.php';

    try {
        $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $nome = $datax['nome'];
        $curso = $datax['curso'];

        $stmt_check = $pdo->prepare("SELECT COUNT(*) FROM jurados WHERE nome = :nome AND curso = :curso");
        $stmt_check->bindParam(':nome', $nome);
        $stmt_check->bindParam(':curso', $curso);
        $stmt_check->execute();
        $count = $stmt_check->fetchColumn();

        if ($count > 0) {
            $response = array('success' => false, 'message' => 'Esse jurado já está cadastrado');
            echo json_encode($response);
        } else {
            $sql = "INSERT INTO jurados (nome, curso) VALUES (:nome, :curso)";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':nome', $nome);
            $stmt->bindParam(':curso', $curso);
            $stmt->execute();

            $response = array('success' => true, 'message' => 'Jurado cadastrado');
            echo json_encode($response);
        }
    } catch (PDOException $e) {
        $response = array('success' => false, 'message' => 'Erro ao salvar: ' . $e->getMessage());
        echo json_encode($response);
    }
} else {
    $response = array('success' => false, 'message' => 'Token inválido');
    echo json_encode($response);
}
?>
