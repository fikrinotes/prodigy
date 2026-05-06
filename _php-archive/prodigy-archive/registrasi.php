<html>
    <head><title>SIGN IN</title></head>
<body>
    <FORM ACTION="" METHOD="POST" NAME="register">
    Username: <input type="text" name="username"><br>
    Nama Lengkap : <input type="text" name="nama"><br>
    Email : <input type="email" name="email"><br>
    gender : <input type="text" name="gender"><br>
    Usia : <input type="number" name="usia" min="0"><br>
    Password : <input type="password" name="password"><br>
    <input type="submit" name="Input" value="Input">
    </FORM>
    </body>
</html>

<?php
    if (isset($_POST['Input'])) {
        $username = $_POST['username'];
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $gender = $_POST['gender'];
        $usia = $_POST['usia'];
        $password = $_POST['password'];
    $conn = mysqli_connect("localhost","root","","registrasi");

    $sql = "insert into sign_up (Username, Nama, Email, Gender, Usia, Password) ".
    "values('$username', '$nama', '$email', '$gender', '$usia', '$password')";
    mysqli_query($conn, $sql);
    $num = mysqli_affected_rows($conn);
    $cek = mysqli_query($conn, "SELECT * FROM sign_up WHERE Username = '$username'");
    if ($num > 0) {
        # echo "<h3>Data yang anda masukan sudah disimpan.</h3>";
        header("location:login.php");
        exit();
    } else if (mysqli_num_rows($cek)===1) {
        echo "<h3>Username sudah ada.</h3>";
    } else {
        echo "<h3>Data gagal disimpan ke dalam database.</h3>";
    }}
 ?>