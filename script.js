$(document).ready(function() {


$("#myBtn").click(function(){
 var email = $("#email").val();
 var names = $("#name").val();      
 
 $(".modal-body").append("Hi " + names + " thank you for signing up! We will send an email to " + email + " shortly")
})


});