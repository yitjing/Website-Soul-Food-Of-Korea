
// Sign up registration Javascript
// check whether the user has key in all of the compulsory information
function checkFormData()
{
  var errorMessage = checkCompulsoryFieldsValues();

  if (errorMessage.length > 0)
    alert (errorMessage);
  else
  {
    var title = retrieveSelectedButtonValue();
    var fnameElement = document.getElementById ("FIRSTNAME");

    var confirmationMessage  = "-------------------------------------------\n";
        confirmationMessage += "Dear " + title + " " + fnameElement.value + ", \n";
        confirmationMessage += "Thank you for signing up with us!          \n";
        confirmationMessage += "-------------------------------------------\n";
        confirmationMessage += "We will send you an email as soon as possible. To confirm your registration, please complete the rest of the instructions in the email. \n\n";
        confirmationMessage += "Have a pleasant day!                      \n";

    alert (confirmationMessage);

  }
}

// ------------------------------------------
// to retrieve the selected button value

function retrieveSelectedButtonValue()
{
  var selectedTitle = "";

  var radioButtonArray = document.getElementsByClassName ("TITLE");

  for (var i=0; i<radioButtonArray.length; i++)
  {
    if (radioButtonArray[i].checked == true)
    selectedTitle = radioButtonArray[i].value;
  }

  return (selectedTitle);
}

// ------------------------------------------
// to Check whether the user got insert information in the compulsory section
// if yes, the background would be white color
// if no, the background would be red in color
function checkCompulsoryFieldsValues()
{
  var fnameElement = document.getElementById ("FIRSTNAME");
  var lnameElement = document.getElementById ("LASTNAME");
  var emailElement = document.getElementById ("EMAIL");

  var errorMessage = "";
  
  if (fnameElement.value.trim().length <= 0)
  {
    errorMessage += "\n Invalid First Name, pls enter non-blank values! \n";
    fnameElement.style.background = "pink";
  }
  else
    fnameElement.style.background = "white";

  if (lnameElement.value.trim().length <= 0)
  {
    errorMessage += "\n Invalid Last Name, pls enter non-blank values! \n";
    lnameElement.style.background = "pink";
  }
  else
    lnameElement.style.background = "white";

  var emailAsString = emailElement.value.trim();

  if (emailAsString.length <= 0 || !isValidEmailFormat (emailAsString))
  {
    errorMessage += "\n Invalid Email, pls enter non-blank email in correct format! \n";
    emailElement.style.background = "pink";
  }
  else
    emailElement.style.background = "white";

  return (errorMessage);
}

// ------------------------------------------
// to check whether the email address is in the correct form
// example,  example@mail.com
function isValidEmailFormat (value) 
{
 var regularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 if (regularExpression.test(value))
    return (true)
 else
    return (false)
}

// reset button 
// when reset, it will remove all the information in the field box and refresh the webpage
function resetFormData()
{
  // below code causes web-page to refresh/reload itself ...
  location = window.location.href;
}

// back to top button 
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  var mybutton = document.getElementById("topButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    mybutton.style.display = "block";
  } 

  else 
  {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() 
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}