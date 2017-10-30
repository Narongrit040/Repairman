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
    