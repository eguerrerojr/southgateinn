<?php

// session_start();
     
$chooseroom = isset($_POST['choose-room']) ? $_POST['choose-room'] : "";
$arrival = isset($_POST['arrival']) ? $_POST['arrival'] : "";
$departure = isset($_POST['departure']) ? $_POST ['departure'] : "";
$room = isset($_POST['room']) ? $_POST ['room'] : "";
$guest = isset($_POST['guest']) ? $_POST ['guest'] : "";
$email = isset($_POST['email']) ? $_POST ['email'] : "";

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ROOM-BOOKING</title>
    <link rel="stylesheet" href="css/room-booking.css">
</head>
<body>
   <div class="container-room-booking">
        <div class="title"><h2>Booking Table</h2></div>
        <div class="table">
        <table style="width:100%">
        <tr>
            <th>Type of Room</th>
            <th>Arrival Date</th>
            <th>Departure Date</th>
            <th>Number of Rooms</th>
            <th>Number of Guest</th>
            <th>Email</th>
        </tr>
        <tr>
         <?php
         function exexute(){
             $chooseroom = isset($_POST['choose-room']) ? $_POST['choose-room'] : "";
             $arrival = isset($_POST['arrival']) ? $_POST['arrival'] : "";
             $departure = isset($_POST['departure']) ? $_POST ['departure'] : "";
             $room = isset($_POST['room']) ? $_POST ['room'] : "";
             $guest = isset($_POST['guest']) ? $_POST ['guest'] : "";
             $email = isset($_POST['email']) ? $_POST ['email'] : "";
             
             if(isset($_POST['submitForm'])){
                 echo '<td>'.$chooseroom. '</td>';
                 echo '<td>' .$arrival. '</td>';
                 echo '<td>' .$departure. '</td>';
                 echo '<td>' .$room. '</td>';
                 echo '<td>' .$guest. '</td>';
                 echo '<td>' .$email. '</td>';
             }        
         }
         echo exexute();
     
         ;?>

        </tr>
   
        </table>

        <div class="buttons">
        <button type='submit' onclick="document.location='room.html'" name="submitback">Add another room</button>   
        <button>Clear</button>
        <button>Submit</button>
        </div>

        </div>

      
   </div>


</body>
</html>
