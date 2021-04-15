//Version 0.1.1
//Last Updated: 4/7/2021

function logIn(evt, emailAddress, passWord)
{
  var cs321096Email = "cs321096@g.risd.org";
  var shanksEmail = "ashanks@g.risd.org";

  var enteredEmail = document.getElementById("username").value;

  var cs321096Pswrd = "123";
  var shanksPswrd = "shanks-pip";

  var enteredPswrd = document.getElementById("password").value;

  if(enteredEmail == cs321096Email && enteredPswrd ==  cs321096Pswrd)
  {
    //alert("Email found");

    location.href = 'https://risddigitaltimesheet.pip2021.repl.co/cs321096.html';
  }

  if(enteredEmail == shanksEmail || enteredEmail == shanksPswrd)
  {
    //alert("Email found");

    location.href = 'https://risddigitaltimesheet.pip2021.repl.co/teacherShanks.html';
  }
}