$(document).ready(function() {

    $("dt.main-dt").on("click", function() {
        let nbClic = $(this).next()[0].childNodes[1];
        nbClic.innerHTML = parseInt(nbClic.innerHTML) + 1;
        let actualResponse = $(this).siblings('.response');
        let otherResponse = $("dt.main-dt").siblings('.response')
        $(otherResponse).not(actualResponse).slideUp();
        actualResponse.slideToggle();
    });

});