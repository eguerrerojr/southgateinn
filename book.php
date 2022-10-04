<?php
include_once "book.html";
// database connection code
if(isset($_POST['submit']))
{
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con2 = mysqli_connect('localhost', 'root', '','db_book');

// get the post records

$arrival = $_POST['arrival'];
$departure = $_POST['departure'];
$room = $_POST['room'];
$guest = $_POST['guest'];
$email = $_POST['email'];

// database insert SQL code
$sql2 = "INSERT INTO `tbl_book` (`ID`, `ARRIVAL`, `DEPARTURE`, `ROOM`, `GUEST`,`EMAIL`) VALUES ('0','$arrival', '$departure', '$room', '$guest', '$email')";

// insert in database
$rss = mysqli_query($con2, $sql2);
if($rss)
{
	echo "<script>
			alert('You have successfully submitted the form. ');
		  </script>";
}
}
else
{
	echo "Are you a genuine visitor?";

}
?>
