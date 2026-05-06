<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log In | Prodigy</title>

    <link rel="stylesheet" href="style/style-login.css">

    <!--font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit&family=Oxanium&family=Poppins&family=Readex+Pro&display=swap" rel="stylesheet">   

</head>
<body>
    <main class="login-page">
        <div class="login-card">
            <div class="heading">
                <img class="logo" src="assets/Logo.png" alt="prodigy_logo">
                <p class="title">Prodigy</p>
            </div>
            <div class="login-text">Log In</div>
            <form method="POST" class="formulir">
                <label class="lblusername" for="username">Username</label>
                <input required class="username" type="text" name="username">
                <p class="text-signup">belum punya akun ? <a class="daftar" href="signup.php">daftar</a></p>
                <br>

                <label class="lblpw" for="password">Password</label>
                <input required class="pw" type="password" name="password">
                
                <input class="button-submit" type="submit" name="data_submit" value="Log In">
            </form>
        </div>
    </main>
</body>
</html>

<?php
    session_start();
    if (isset($_POST['data_submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
    $conn = mysqli_connect("localhost","root","","prodigy");
    $data = mysqli_query($conn, "SELECT * FROM registrasi WHERE Username = '$username' && Password = '$password'");
    $cek = mysqli_num_rows($data);
    if($cek > 0){
        echo "login berhasil";
        $_SESSION['login'] = true;
        $_SESSION['username'] = $username;
        # header("location:halaman_utama.php");
    }
    else{
        echo "login gagal";
    }
}
    if (isset($_SESSION['login'])) {
        header("location:index.php");
 
    }

?>