<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard | Prodigy</title>

    <!--style css-->
    <link rel="stylesheet" href="style/style_dashboard.css">

    <!-- font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit&family=Poppins&family=Oxanium&family=Readex+Pro&display=swap" rel="stylesheet">   

</head>
<body>

    <?php
    session_start();
    if (!isset($_SESSION['login'])) {
        header("location:login.php");
    }
    else {
        $username = $_SESSION["username"];
        $conn = mysqli_connect("localhost","root","","prodigy");
        $query =  "SELECT * FROM registrasi WHERE Username = '$username'";
        $data = mysqli_query($conn, $query);
        $hasil = mysqli_fetch_array($data);
        $gender = $hasil["Gender"];
        $usia = $hasil["Usia"];
        $email = $hasil["Email"];
        $nama = ucwords(strtolower($hasil["Nama"]));
}
    ?>


    <nav class="nav-menu">
        <a href="index.php"><img class="logo" src="assets/Logo.png" alt="logo prodigy"> </a>
        <div class="head-title">Prodigy</div>
        <div class="about right"><a href="logout.php">About</a></div>
        <div class="team right">Our Team</div>
        <div class="contact right">Contact</div>
        <div class='account right'><a href='account.php'>Account</a></div>
    </nav>

    <main class="konten-utama">
        <div class="identity">
            <div class="foto-profil">
                <?php
                    if ($gender === "pria") {
                        echo "<img class='profile' src='assets/profile/boy.png' alt='foto profil'>";
                    }
                    else {
                        echo "<img class='profile' src='assets/profile/woman.png' alt='foto profil'>";
                    }
                ?>
            </div>
            <div>
                    <?php
                        echo "
                        <div class='data-diri'>
                            <div class='data-nama'>$nama</div>
                            <div class='data-username'>$username</div>                       
                        </div>
                        ";
                    ?>
            </div>
        </div>

        <div class="course">
            <div class="line-section"></div>

            <div class="course-text">Kursus</div>

            <div class="card-container">

                <div class="python-course card-element">
                    <div class="image"></div>
                    <div class="caption">Materi pembelajaran python untuk pemula !</div>
                    <div class="tombol-lihat"><a href="courses/video_python_dasar.php">Lihat</a></div>
                </div>
                
                <div class="java-course card-element">
                    <div class="image"></div>
                    <div class="caption">Dasar dasar pemrograman menggunakan bahasa Java</div>
                    <div class="tombol-lihat"><a href="courses/video_java_dasar.php">Lihat</a></div>
                    
                </div>

                <div class="cpp-course card-element">
                    <div class="image"></div>
                    <div class="caption">Dasar dasar pemrograman menggunakan bahasa C++</div>
                    <div class="tombol-lihat"><a href="courses/video_cpp_dasar.php">Lihat</a></div>
                </div>

            </div>
        </div>
    </main>

    <footer></footer>
</body>
</html>