$(document).ready(function () {
    console.log("ciao");
    var template = Handlebars.compile($("#card-template").html());

    var phpUrl = "../versione-ajax/dischi-ajax.php";

    $("#mySelect").on("change", function () {
        var authorSelected = $(":selected").val();
        $.ajax({
            method: "GET",
            url: phpUrl,
            data: { author: authorSelected },
            success: function (response) {
                stampaCard(response);
            },
        });
    });

    function stampaCard(myArray) {
        $("main").html("");
        for (var i = 0; i < myArray.length; i++) {
            var element = myArray[i];
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
});
