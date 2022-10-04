// const firebaseConfig = {
//     apiKey: "AIzaSyADLegYnSFGel502fZzVOt9HyFC2eGTziQ",
//     authDomain: "booking-emb.firebaseapp.com",
//     databaseURL: "https://booking-emb-default-rtdb.firebaseio.com",
//     projectId: "booking-emb",
//     storageBucket: "booking-emb.appspot.com",
//     messagingSenderId: "785957098266",
//     appId: "1:785957098266:web:33005cfbab8407f72bd2a3"
//   };


//   firebase.initializeApp(firebaseConfig);

//   var bookingDB = firebase.database().ref("booking");
//   document.getElementById("booking").addEventListener("submit", submitForm)

//   function submitForm(e){
//     e.preventDefault();

//     var arrival = getElementVal("arrival");
//     var departure = getElementVal("departure");
//     var room = getElementVal("room");
//     var guest = getElementVal("guest");
//     var email = getElementVal("email");
    
//     saveMessages(arrival, departure,room,guest,email);

//     alert("You successfully submitted the form")
//     document.getElementById("booking").reset();
//   }
//   const saveMessages = (arrival, departure, room, guest, email) => {
//     var newContactForm = bookingDB.push();

//     newContactForm.set({
//         arrival: arrival,
//         departure: departure,
//         room: room,
//         guest: guest,
//         email: email,
//     });
//   };

//   const getElementVal = (id) => {
//     return document.getElementById(id).value;
//   };
  