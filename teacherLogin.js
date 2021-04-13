//Version 0.1.1
//Last Updated: 4/7/2021

function logIn(evt, emailAddress, passWord)
{
  var gulleyEmail = "agulley@g.risd.org";
  var shanksEmail = "ashanks@g.risd.org";

  var enteredEmail = document.getElementById("username").value;

  var gulleyPswrd = "gulley-pip";
  var shanksPswrd = "shanks-pip";

  var enteredPswrd = document.getElementById("password").value;

  if(enteredEmail == gulleyEmail || enteredPswrd == gulleyPswrd)
  {
    //alert("Email found");

    location.href = 'https://risddigitaltimesheet.pip2021.repl.co/teacherGulley.html';
  }

  if(enteredEmail == shanksEmail || enteredEmail == shanksPswrd)
  {
    //alert("Email found");

    location.href = 'https://risddigitaltimesheet.pip2021.repl.co/teacherShanks.html';
  }
}