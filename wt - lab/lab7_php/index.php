<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'];
        $email = $_POST['email'];

        echo "<h2>Form Data Received</h2>";
        echo "Name: " . $name . "<br>";
        echo "Email: " . $email . "<br>";
    } else {
        echo "Form data not submitted.";
    }
    ?>