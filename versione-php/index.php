 <?php include __DIR__ . './dischi.php'; ?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Versione PHP</title>
        <link rel="stylesheet" href="../public/css/style.css" />
        <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    </head>
    <body>
        <header>
            <div class="logo">
                <img src="../public/img/logo-spotify.png" alt="logo image" />
            </div>
            <div>
                <select id="mySelect">
                    <option value="">--Tutti gli Artisti--</option>
                <?php foreach ($dischi as $disco) { ?>
                    <option value="<?php echo $disco['author']; ?>"><?php echo $disco['author']; ?></option>
                <?php } ?>
                </select>
            </div>
        </header>
        <main>
        <?php foreach ($dischi as $disco) { ?>
            <div class="card">
                <img
                    src= <?php echo $disco['poster']; ?>
                />
                <div class="title">
                    <?php echo $disco['title']; ?>
                </div>
                <div class="author">
                    <?php echo $disco['author']; ?>
                </div>
                <div class="year">
                    <?php echo $disco['year']; ?>
                </div>
            </div>
        <?php } ?>
        </main>

        <script id="card-template" type="text/x-handlebars-template">
            <div class="card" data-genre={{genre}}>
                <img src={{poster}}  />
                <div class="title">
                    {{title}}
                </div>
                <div class="author">
                    {{author}}
                </div>
                <div class="year">
                    {{year}}
                </div>
            </div>
        </script>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="php.js"></script>
    </body>
</html>

<?php

// foreach ($dischi as $disco) {
# code...
// echo($disco['poster']);
// echo($disco['title']);
// echo($disco['author']);
// echo($disco['genre']);
// echo($disco['year']);

// }

?>