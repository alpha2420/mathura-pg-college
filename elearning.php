<?php
// PHP Compatibility Bridge for elearning.php -> student-corner.html
if (file_exists(__DIR__ . '/student-corner.html')) {
    include __DIR__ . '/student-corner.html';
} else {
    header('Location: student-corner.html', true, 301);
    exit;
}
?>