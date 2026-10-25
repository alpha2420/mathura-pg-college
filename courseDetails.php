<?php
// PHP Compatibility Bridge for courseDetails.php -> academics.html
if (file_exists(__DIR__ . '/academics.html')) {
    include __DIR__ . '/academics.html';
} else {
    header('Location: academics.html', true, 301);
    exit;
}
?>