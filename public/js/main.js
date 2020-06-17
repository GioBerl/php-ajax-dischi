$(document).ready(function () {
    var templateFunc = Handlebars.compile($("#card-template").html());
    var templateSelect = Handlebars.compile($("#select-template").html());
    var arrayGenre = [];

    localUrl =
        "http://localhost:8888/boolean-php/php-ajax-dischi/versione-ajax/dischi-ajax.php";

    $.ajax({
        method: "GET",
        url: localUrl,
        success: function (response) {
            stampaCard(response);
            generaOptions(response);
        },
        error: function () {
            console.log("errore");
        },
    });

    //AL CAMBIO DELLA SELECT
    $("#mySelect").on("change", function () {
        var optionSelected = $(this).find("option:selected").val();
        console.log(optionSelected);
        if (optionSelected) {
            $(".card").hide();
            // console.log(optionSelected);
            // console.log($(`.card[data-genre=${optionSelected}]`));
            $(`.card[data-genre=${optionSelected}]`).show();
        } else {
            $(".card").show();
        }
    });

    function generaOptions(arrayDati) {
        for (var i = 0; i < arrayDati.length; i++) {
            var singleObj = arrayDati[i];

            if (!arrayGenre.includes(singleObj.genre)) {
                arrayGenre.push(singleObj.genre);
            }
        }

        for (var j = 0; j < arrayGenre.length; j++) {
            var context = {
                genre: arrayGenre[j],
            };
            var html = templateSelect(context);
            $("#mySelect").append(html);
        }
    }

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
