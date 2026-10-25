<?php
// PHP Bridge for admit26.php -> admit26.html
if (file_exists(__DIR__ . '/admit26.html')) {
    include __DIR__ . '/admit26.html';
} else {
    header('Location: admit26.html', true, 301);
    exit;
}
?>
