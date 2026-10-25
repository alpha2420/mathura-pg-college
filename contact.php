<?php
// PHP Compatibility Bridge for contact.php -> contact.html
if (file_exists(__DIR__ . '/contact.html')) {
    include __DIR__ . '/contact.html';
} else {
    header('Location: contact.html', true, 301);
    exit;
}
?>