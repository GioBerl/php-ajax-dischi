$(document).ready(function () {
    //ANIMAZIONE DISCO
    $(document)
        .on("mouseenter", ".img-container", function () {
            $(this).removeClass("stopRotate").addClass("rotate");
            $(this)
                .siblings(".base-stecca")
                .addClass("parti")
                .removeClass("torna");
        })
        .on("mouseleave", ".img-container", function () {
            $(this).removeClass("rotate").addClass("stopRotate");

            $(this)
                .siblings(".base-stecca")
                .addClass("torna")
                .removeClass("parti");
        });
});
