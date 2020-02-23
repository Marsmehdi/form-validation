
function validateForm() {
  let name =document.querySelector(".name").value
   let addres=document.querySelector(".addres").value
   let password=document.querySelector(".password").value

   let mail=document.querySelector(".mail").value
   let comment=document.querySelector(".comment").value 
   var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,16})$/;
if( name == "" ) {
  alert( "Please provide your name!" );
   
    }
if(addres== "" ) {
  alert( "Please provide your address!" );

}
if( (mail.indexOf("@") == -1 )||( mail.indexOf(".") == -1))
{
  alert( "Please provide your Email!" );

 
}
if (!password.match(regex)) {
  alert( "Please provide your Password!" );
  }

if( comment== "" ) {
  alert( "Please provide your comments!" );
 
  
}
return( true );

}
