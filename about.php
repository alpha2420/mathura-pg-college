<?php
// PHP Compatibility Bridge for about.php -> about.html
if (file_exists(__DIR__ . '/about.html')) {
    include __DIR__ . '/about.html';
} else {
    header('Location: about.html', true, 301);
    exit;
}
?>