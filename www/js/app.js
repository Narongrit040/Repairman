//Register ---
function handSignUp(){
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;
    if(email.length<4){
    alert("กรุณาป้อน Email ให้ถูกต้อง");
    return;
    }
    if(password.length<4){
    alert("กรุณาป้อน Password มากกว่า 4 ตัว");
    return;
    }
    
    
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){alert('Registration Successfully'); location="index.html" })
    .catch(function(error) {
    
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
     
  

        
        if(errorCode == 'auth/weak-password'){ //this condition not working
            alert("The password is too weak");
          }else {
            alert(errorMessage);
            
        }
        console.log(error);
      });
    
    }
    //End Register ---
    
    //login with facebook
    

function loginWithEmail(){
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;
    var credential = firebase.auth.EmailAuthProvider.credential(email, password);
               //login with email


              firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
               
        if(errorCode == 'auth/weak-password'){ //this condition not working
            alert("The password is too weak");
          }else {
            alert(errorMessage);
            
        }
        console.log(error);
      });
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          alert(isAnonymous);
          alert(uid);
          // ...
        } else {
          // User is signed out.
          alert("By!!")
          // ...
        }
        // ...
      });
}
    ////--------$(function () {

    firebase.initializeApp({
      apiKey: "AIzaSyBvbVfCeSUHx4Nag-D5tTMlRjKoh0lWzxU",
      authDomain: "repairman-d41d3.firebaseapp.com",
      projectId: "repairman-d41d3",

   
  });

  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

  $('#save').click(function () {

      var username = $('#username').val();
      var fullname = $('#fullname').val();
      var mobileno = $('#mobileno').val();

      db.collection("users").add({
          username: username,
          fullname: fullname,
          mobileno: mobileno
      })
          .then(function (docRef) {
              console.log("Document written with ID: ", docRef.id);                

              $('#tablebody').empty();

              db.collection("users").get().then(function(querySnapshot) {
                  querySnapshot.forEach(function(doc) {

                      console.log(doc.id, " => ", doc.data());
                      var username = doc.username;
                      var fullname = doc.fullname;
                      var mobileno = doc.mobileno;

                      var row = "<tr>" +
                      "<th scope='row'>" + doc.id + "</th>" +
                      "<td>" + doc.data().username + "</td>" +
                      "<td>" + doc.data().fullname + "</td>" +
                      "<td>" + doc.data().mobileno + "</td>" +
                      "</tr>"

                      $('#tablebody').append(row);

                  });
              });
          
          })
          .catch(function (error) {
              console.error("Error adding document: ", error);
          });

  });


