$(document).ready(function () {
    var dataUrl = "../database/dischi.php";
    $.ajax({
        method: "GET",
        url: dataUrl,
        success: function (response) {
            creaCard(response);
            creaSelect(response);
        },
        error: function () {
            console.log("errore");
        },
    });

    //CAMBIO DELLA SELECT
    $("#authorSelect").on("change", function () {
        if ($(this).val()) {
            var authorSelected = $(this).val();
            var queryObj = { author: authorSelected };
        } else {
            //non servirebbe, ma per ricordarmi che di la se la query non ha parametri mi rimanda tutti i dischi
            var queryObj = null;
        }
        $.ajax({
            method: "GET",
            url: dataUrl,
            data: queryObj,
            success: function (response) {
                console.log(response);
                creaCard(response);
            },
            error: function (err) {
                console.log(err);
            },
        });
    });

    function creaCard(myArray) {
        $("main").html("");
        var template = Handlebars.compile($("#card-template").html());
        myArray.forEach((disco) => {
            var dati_disco = {
                imgUrl: disco.poster,
                title: disco.title,
                author: disco.author,
                year: disco.year,
            };
            var html = template(dati_disco);
            $("main").append(html);
        });
    }

    function creaSelect(myArray) {
        var autori = [];
        var template = Handlebars.compile($("#select-template").html());
        myArray.forEach(function (disco) {
            if (!autori.includes(disco.author)) {
                autori.push(disco.author);
            }
        });
        autori.forEach((autore) => {
            var nome_autore = {
                author: autore,
            };
            var html = template(nome_autore);
            $("#authorSelect").append(html);
        });
    }
});
