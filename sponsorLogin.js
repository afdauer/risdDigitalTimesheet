//Version 0.1.1
//Last Updated: 4/7/2021

function logIn(evt, emailAddress, passWord)
{
  var robertUser = "r.sorenson";

  var enteredEmail = document.getElementById("username").value;

  var robertPswrd = "sorenson-pip";

  var enteredPswrd = document.getElementById("password").value;

  if(enteredEmail == robertUser && enteredPswrd ==  robertPswrd)
  {
    //alert("Email found");

    location.href = 'https://risddigitaltimesheet.pip2021.repl.co/sponsorRobert.html';
  }

}