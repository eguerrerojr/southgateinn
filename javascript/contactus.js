const firebaseConfig = {
    apiKey: "AIzaSyAfk9oorgez6T8VvBZkE3Fub3ePxrascW0",
    authDomain: "contact-emb.firebaseapp.com",
    databaseURL: "https://contact-emb-default-rtdb.firebaseio.com",
    projectId: "contact-emb",
    storageBucket: "contact-emb.appspot.com",
    messagingSenderId: "774470923232",
    appId: "1:774470923232:web:d7e210d87993b4bc76b185"
  };

  firebase.initializeApp(firebaseConfig);

  var contactusDB = firebase.database().ref("contactform");
  document.getElementById("contactus").addEventListener("submit", submitForms)

  function submitForms(e){
    e.preventDefault();

    var txtName = getElementVal("txtName");
    var txtEmail = getElementVal("txtEmail");
    var txtSubject = getElementVal("txtSubject");
    var txtMessage = getElementVal("txtMessage");
   
     saveMessages(txtName, txtEmail, txtSubject, txtMessage);

     alert("Sent successfully :) we will contact you shortly")
     document.getElementById("contactus").reset();
  }
  const saveMessages = (txtName, txtEmail, txtSubject, txtMessage) => {
    var newContactForms = contactusDB.push();

    newContactForms.set({
        txtName: txtName,
        txtEmail: txtEmail,
        txtSubject: txtSubject,
        txtMessage: txtMessage,
        
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  