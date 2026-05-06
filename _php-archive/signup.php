<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up | Prodigy</title>

    <link rel="stylesheet" href="style/style-signup.css">

    <!--font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit&family=Oxanium&family=Poppins&family=Readex+Pro&display=swap" rel="stylesheet">   

</head>
<body>
    <main class="signup-page">
        <div class="signup-card">
            <div class="heading">
                <img class="logo" src="assets/Logo.png" alt="prodigy_logo">
                <p class="title">Prodigy</p>
            </div>
            <div class="signup-text">Sign Up</div>
            <form method="POST" class="formulir">
                <label class="lblnama" for="nama">Nama Lengkap</label>
                <input required class="nama" type="text" name="nama">

                <label class="lblusername" for="username">Username</label>
                <input required class="username" type="text" name="username">

                <label class="lblemail" for="email">Email</label>
                <input required class="email" type="email" name="email">

                <div class="container-usia-gender">
                        <div class="blokgender">
                            <label class="lblgender" for="gender">Gender</label>
                            <input required class="gender" type="text" name="gender">
                        </div>
        
                        <div class="blokusia">
                            <label class="lblusia" for="usia">Usia</label>
                            <input required class="usia" type="number" name="usia" min="0">
                        </div>
                </div>

                <label class="lblpw" for="password">Password</label>
                <input required class="pw" type="password" name="password">

                <input class="button-submit" type="submit" name="data_submit" value="Sign Up">
            </form>
        </div>
    </main>
</body>
</html>


<?php
    if (isset($_POST['data_submit'])) {
        $username = $_POST['username'];
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $gender = $_POST['gender'];
        $usia = $_POST['usia'];
        $password = $_POST['password'];
    $conn = mysqli_connect("localhost","root","","prodigy");

    $username_sama = mysqli_query($conn, "SELECT * FROM registrasi WHERE Username = '$username'");
    $baris_username_sama = mysqli_fetch_row($username_sama);

    if ($baris_username_sama > 0) {
        echo "
        <script>
            alert('akun dengan username tersebut sudah ada. silakan buat username baru');
        </script>
        ";
    }
    else {
        $sql = "insert into registrasi (Username, Nama, Email, Gender, Usia, Password) ".
        "values('$username', '$nama', '$email', '$gender', '$usia', '$password')";
        mysqli_query($conn, $sql);
        $num = mysqli_affected_rows($conn);
        if ($num > 0) {
            # echo "<h3>Data yang anda masukan sudah disimpan.</h3>";
            header("location:login.php");
            exit();
        } else {
            echo "<h3>Data gagal disimpan ke dalam database.</h3>";
        }
    }
    
    }
 ?>