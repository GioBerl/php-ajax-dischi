$(document).ready(function () {
    var template = Handlebars.compile($("#card-template").html());

    var phpUrl =
        "http://localhost:8888/boolean-php/php-ajax-dischi/versione-ajax/dischi-ajax.php";

    $("#mySelect").on("change", function () {
        var authorSelected = $(":selected").val();
        $.ajax({
            method: "GET",
            url: phpUrl,
            data: { author: authorSelected },
            success: function (response) {
                stampaCard(response, authorSelected);
            },
        });
    });

    function stampaCard(myArray, myAuthor) {
        // console.log(author);
        $("main").html("");
        for (var i = 0; i < myArray.length; i++) {
            var element = myArray[i];
            if (element.author == myAuthor) {
                var context = {
                    poster: element.poster,
                    title: element.title,
                    author: element.author,
                    year: element.year,
                    genre: element.genre,
                };
                var html = template(context);
                $("main").append(html);
            }
        }
    }
});
