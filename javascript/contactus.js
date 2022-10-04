// const firebaseConfig = {
//     apiKey: "AIzaSyAfk9oorgez6T8VvBZkE3Fub3ePxrascW0",
//     authDomain: "contact-emb.firebaseapp.com",
//     databaseURL: "https://contact-emb-default-rtdb.firebaseio.com",
//     projectId: "contact-emb",
//     storageBucket: "contact-emb.appspot.com",
//     messagingSenderId: "774470923232",
//     appId: "1:774470923232:web:d7e210d87993b4bc76b185"
//   };

//   firebase.initializeApp(firebaseConfig);

//   var contactusDB = firebase.database().ref("contactform");
//   document.getElementById("contactus").addEventListener("submit", submitForms)

//   function submitForms(e){
//     e.preventDefault();

//     var txtName = getElementVal("txtName");
//     var txtEmail = getElementVal("txtEmail");
//     var txtSubject = getElementVal("txtSubject");
//     var txtMessage = getElementVal("txtMessage");
   
//      saveMessages(txtName, txtEmail, txtSubject, txtMessage);

//      alert("Sent successfully :) we will contact you shortly")
//      document.getElementById("contactus").reset();
//   }
//   const saveMessages = (txtName, txtEmail, txtSubject, txtMessage) => {
//     var newContactForms = contactusDB.push();

//     newContactForms.set({
//         txtName: txtName,
//         txtEmail: txtEmail,
//         txtSubject: txtSubject,
//         txtMessage: txtMessage,
        
//     });
//   };

//   const getElementVal = (id) => {
//     return document.getElementById(id).value;
//   };

// function sendEmail() {
// 	Email.send({
//     SecureToken : "8168992f-ac19-4b33-befb-21b1802e25ea",
//     To : 'gwapoko0407@gmail.com',
//     From : "mozbygreen@gmail.com",
//     Subject : "Test Email",
//     Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
//     }).then(
//        alert("mail sent successfully")
//     );
// }

function sendEmail() {
    let name = document.getElementById("txtName").value;
    let email = document.getElementById("txtEmail").value;
    let subject = document.getElementById("txtSubject").value;
    let message = document.getElementById("txtMessage").value;
    let finalmessage = `Name : ${name} <br>  Email : ${email} <br> Subject: ${subject} <br>  Message : ${message} <br>`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mozbygreen13@gmail.com",
        Password : "07431A51AA5A23C51F6ECEB97C0E1BBDD826",
        To : 'mozbygreen13@gmail.com',
        From : "mozbygreen13@gmail.com",
        Subject : "EMB",
        Body : finalmessage
    }).then(
       alert("Sent Successfully")
    );
}