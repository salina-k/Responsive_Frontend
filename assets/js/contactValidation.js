function validation(){
  var user = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var entermsg = document.getElementById('entermsg').value;
  entermsg
  if (user==""){
    alert("Please fill the Name filed.");
    return false;

  }
  if ((user.length <=2) || (user.length > 20))
  {
    document.getElementById('username').innerHTML = "**Name length must be between 2 and 20.";
    return false;
  }
  if(!isNaN(user)){
    document.getElementById('username').innerHTML = "**Only charcters are allowed.";
    return false;
  }
  if (email==""){
    alert("Please fill the Email filed.");
    return false;
  }
  if (phone==""){
    alert("Please fill the Phone filed.");
    return false;

  }
  if(isNaN(phone)){
    document.getElementById('mobilephone').innerHTML = "**Only digits are allowed not character.";
    return false;
  }
  if(phone.length !=10){
    document.getElementById('mobilephone').innerHTML = "**Mobile number must be 10 digits.";
    return false;
  }
  if (entermsg==""){
    document.getElementById('message').innerHTML = "**Enter mesage.";
    return false;
  }
}