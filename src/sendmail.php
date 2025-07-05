<?php
// Set response type
header('Content-Type: application/json');

// Configuration
$to = "support@saraswathirubbers.com";
$subject = "New Enquiry from Saraswathi Rubbers Website";

// Sanitize and fetch POST data
$name = htmlspecialchars(trim($_POST['name'] ?? ''));
$email = htmlspecialchars(trim($_POST['email'] ?? ''));
$formSubject = htmlspecialchars(trim($_POST['subject'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

// Validate essential fields
if (!$name || !$email || !$formSubject) {
    echo json_encode(["status" => "error", "message" => "Required fields are missing."]);
    exit;
}

// Email content
$body = "
You have received a new enquiry from your website:

Name: $name
Email: $email
Subject: $formSubject
Message: 
$message
";

// Email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
$sent = mail($to, $subject, $body, $headers);

// Response
if ($sent) {
    echo json_encode(["status" => "success", "message" => "Message sent successfully."]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to send message."]);
}
?>
