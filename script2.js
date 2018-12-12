$(document).ready(function() {

    $("dt.main-dt").on("click", function() {
        // Incrémentation du total de clic
        let nbClic = $(this).next()[0].childNodes[1];
        nbClic.innerHTML = parseInt(nbClic.innerHTML) + 1;
        // Affichage de la réponse cliquée
        // Disparition des autres réponses
        let actualResponse = $(this).siblings('.response');
        let allResponse = $("dt.main-dt").siblings('.response');
        let otherResponse = $(allResponse).not(actualResponse);
        actualResponse.slideDown();
        otherResponse.slideUp();
    });

});