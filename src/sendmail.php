<?php

// show errors for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

// sanitize input
$name = htmlspecialchars(trim($_POST['name'] ?? ''));
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$formSubject = htmlspecialchars(trim($_POST['subject'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

// validation
if (!$name || !$email || !$formSubject) {
    echo json_encode([
        "status"=>"error",
        "message"=>"Required fields are missing."
    ]);
    exit;
}

try {

    $mail = new PHPMailer(true);

    // SMTP configuration
    $mail->isSMTP();
    $mail->Host = "smtp.hostinger.com";
    $mail->SMTPAuth = true;

    $mail->Username = "support@saraswathirubbers.com";
    $mail->Password = "Saraswathirubbers@123";

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    // sender
    $mail->setFrom("support@saraswathirubbers.com","Saraswathi Rubbers Website");

    // admin receiver
    $mail->addAddress("support@saraswathirubbers.com");

    // reply to user
    $mail->addReplyTo($email,$name);

    $mail->isHTML(false);

    $mail->Subject = "New Enquiry from Saraswathi Rubbers Website";

    $mail->Body =
"You have received a new enquiry from your website.

Name: $name
Email: $email
Subject: $formSubject

Message:
$message
";

    $mail->send();

    echo json_encode([
        "status"=>"success",
        "message"=>"Message sent successfully."
    ]);

}
catch (Exception $e){

    echo json_encode([
        "status"=>"error",
        "message"=>$mail->ErrorInfo
    ]);
}