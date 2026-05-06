<html>
    <head><title>SIGN IN</title></head>
<body>
    <FORM ACTION="" METHOD="POST" NAME="register">
    Username : <input type="text" name="username"><br>
    Password : <input type="password" name="password"><br>
    <input type="submit" name="submit" value="submit"><br>
    Belum punya akun? bikin disini...<br>
    <input type="submit" name="register" value="register"><br>
    </FORM>
    </body>
</html>

<?php
    if (isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
    $conn = mysqli_connect("localhost","root","","registrasi");
    $data = mysqli_query($conn, "SELECT * FROM sign_up WHERE Username = '$username' && Password = '$password'");
    $cek = mysqli_num_rows($data);
    if($cek > 0){
        echo "login berhasil";
        # header("location:halaman_utama.php");
    }
    else{
        echo "login gagal";
    }
}
    if (isset($_POST['register'])) {
        header("location:registrasi.php");
 
    }

?>