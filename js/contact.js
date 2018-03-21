/**********************************
VALIDATE FORM
***********************************/



/* Store the array values in a variable */
function validateForm(formsCheck) {
  var formFields = ["user_name", "user_email", "user_phone", "user_subject", "user_message"];

  /* If variable is empty run the loop */
  var errors = "";
  /* Check each user field to see if left blank, replace with a concatanated alert message telling the user which field is left blank. */
  for (i = 0; i < formFields.length; i++) { 
      var x = document.forms["myForm"][formFields[i]].value;
      if (x == "") {
        var labelName = document.getElementById(formFields[i] + '_lbl').innerText.replace(":","");
        errors +=  '- ' + labelName + ' is required.\n'
    }
  }

  if (errors != "")
  {
    alert(errors);
    return false;
  }
  

}