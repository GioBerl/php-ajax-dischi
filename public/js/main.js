$(document).ready(function () {
    var templateFunc = Handlebars.compile($("#card-template").html());

    localUrl =
        "http://localhost:8888/boolean-php/php-ajax-dischi/versione-ajax/dischi-ajax.php";

    $.ajax({
        method: "GET",
        url: localUrl,
        success: function (response) {
            stampaCard(response);
        },
        error: function () {
            console.log("errore");
        },
    });

    function stampaCard(arrayDati) {
        for (var i = 0; i < arrayDati.length; i++) {
            var singleObj = arrayDati[i];
            var context = {
                title: singleObj.title,
                author: singleObj.author,
                year: singleObj.year,
                poster: singleObj.poster,
                genre: singleObj.genre,
            };
            var html = templateFunc(context);
            $("main").append(html);
        }
    }
});
