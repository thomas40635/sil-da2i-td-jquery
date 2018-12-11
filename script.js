$(document).ready(function() {

    $("#button1").on("click", function() {
        $("aside").hide(2000);
    });

    $("#button2").on("click", function() {
        $("img").fadeOut();
    });

    $("#button3").on("click", function() {
        $("nav").slideToggle(500);
    });

});