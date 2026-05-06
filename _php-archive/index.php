<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prodigy - Learn How to become an IT Prodigy !</title>
    <link rel="stylesheet" href="style/index.css">

    <!-- font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit&family=Poppins&family=Oxanium&family=Readex+Pro&display=swap" rel="stylesheet">   
</head>
<body>
    <main>
        <section id="first-view">
            <nav class="nav-menu">
                <img class="logo" src="assets/Logo.png" alt=""> 
                <div class="head-title">Prodigy</div>
                <div class="about right"><a href="logout.php">About</a></div>
                <div class="team right">Our Team</div>
                <div class="contact right">Contact</div>
                <?php
                session_start();
                if (isset($_SESSION['login'])) {
                    if ($_SESSION['login']) {
                        echo "<div class='login right'><a href='dashboard.php'>Dashboard</a></div>";
                    }
                }

                else {
                    echo "<div class='login right'><a href='login.php'>Log In</a></div>";
                }
                ?>
            </nav>

            <img class="main_image" src="assets/main_image.png" alt="main_image">
            
        </section>
    </main>
</body>
</html>