<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'lukasz.ciaston@interia.pl';
    $subject = 'Wiadomość z formularza kontaktowego';
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        echo 'Wiadomość została wysłana.';
    } else {
        echo 'Wysyłanie wiadomości nie powiodło się. Spróbuj ponownie.';
    }
}
