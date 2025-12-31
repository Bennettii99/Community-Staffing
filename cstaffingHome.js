window.toggleLeft = function() {
    var element = document.getElementById("offcanvas-left");
    element.classList.toggle("hide");
  }
  window.toggleRight = function() {
    var element = document.getElementById("offcanvas-right");
    element.classList.toggle("hide");
  }


  function Login(){ 
    
    var isValid=true;
    var message = "";
    user = document.getElementById("userN").value;
    Pass = document.getElementById("pass").value;

    if (user && user.trim() == "bennettii99") { } else { message += "invalid username\n"; isValid = false; }
    if (Pass && Pass.trim() == "Money") { } else { message += "invalid password\n"; isValid = false; }
    if (isValid == false) { alert(message);}
    else {window.open("cstaffingHome.html");}

    message = "";
}


function check(){ 
        
  var isValid=true;
  var message = "";
  user = document.getElementById("userN").value;
  Pass = document.getElementById("pass").value;
  rePass = document.getElementById("repass").value;


  if (user && user.trim() != "") { } else { message += "Invalid Username\n"; isValid = false; }
  if (Pass && Pass.trim() != "") { } else { message += "Invalid Password\n"; isValid = false; }
  if (Pass == rePass ) { } else { message += "Passwords Must Match\n"; isValid = false; }
  if (isValid == false) { alert(message);}
  else {window.open("cstaffingHome.html");}

  message = "";

  



  // var user="";
  // var Pass="";
  // var rePass="";
  // var isValid=true;
  // var message = "";
  // user = document.getElementById("userN").value;
  // Pass = document.getElementById("pass").value;
  // rePass = document.getElementById("repass").value;
  // if (user.trim() == "") { message += "invalid username\n";}
  // if (Pass.trim() == "") { message += "invalid password\n";}
  // if (rePass.trim()==""){message+= "please enter password\n";}
  // if (Pass.length < 8){message+= "password must have 8 characters\n"}
  // if (Pass != rePass ){ message += "passwords do not match\n";}
  // if (isValid == true) { alert(message); } else {window.open("cstaffingHome.html");}
  


}



function signup(){
  
    // Get the input values
    var email = document.querySelector('input[type="email"]').value;
    var username = document.querySelector('#userN').value;
    var password = document.querySelector('#pass').value;
    var confirmPassword = document.querySelectorAll('#pass')[1].value;
  
    // Check if all fields are filled
    if (email === "" || username === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields");
      return false;
    }
  
    // Check if email is valid
    var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
    // Check if password is at least 8 characters long
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
  
    // If all validation passes, display success message
    window.open("cstaffingHome.html");
    return true;
  }
  
  
  


function gettime(){

  var now = new Date();
  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString();
  var dateTime = date + ' ' + time;
  alert("pick-up at " + dateTime);


  
}


function getime(){

  var now = new Date();
  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString();
  var dateTime = date + ' ' + time;
  alert("drop-off at " + dateTime);


  
}