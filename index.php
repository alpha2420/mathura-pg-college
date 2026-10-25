<?php
// PHP Compatibility Bridge for index.php -> index.html
if (file_exists(__DIR__ . '/index.html')) {
    include __DIR__ . '/index.html';
} else {
    header('Location: index.html', true, 301);
    exit;
}
?>