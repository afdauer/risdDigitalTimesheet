//Version 0.1.1
//Last Updated: 4/7/2021

function logIn(evt, emailAddress, passWord)
{
  var cs321096Email = "cs321096@g.risd.org";
  var ad321196Email = "ad321196@g.risd.org";

  var enteredEmail = document.getElementById("username").value;

  var cs321096Pswrd = "123";
  var ad321196Pswrd = "456";

  var enteredPswrd = document.getElementById("password").value;

  if(enteredEmail == cs321096Email && enteredPswrd ==  cs321096Pswrd)
  {
    //alert("Email found");

    location.href = 'https://risddigitaltimesheet.pip2021.repl.co/cs321096.html';
  }

  if(enteredEmail == ad321196Email && enteredPswrd == ad321196Pswrd)
  {
    //alert("Email found");

    location.href = 'https://risddigitaltimesheet.pip2021.repl.co/ad321196.html';
  }

  /*if(enteredEmail != ad321196Email || enteredEmail != cs321096Email)
  {
    alert("Incorrect Email");
  }

  if(enteredPswrd != ad321196Pswrd || enteredEmail != cs321096Pswrd)
  {
    alert("Incorrect Password");
  }*/
}