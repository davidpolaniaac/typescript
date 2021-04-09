import "jquery";
import 'sweetalert';

console.log("Hi world");


$(document).ready(function() {
    console.log("Ready")
    $("h1").text("Hi Hi ");
});


$("#botAlert").on("click", function(){
    sweetAlert("Hello world!");
})