<?php
// PHP Compatibility Bridge for tandc.php -> tandc.html
if (file_exists(__DIR__ . '/tandc.html')) {
    include __DIR__ . '/tandc.html';
} else {
    header('Location: tandc.html', true, 301);
    exit;
}
?>