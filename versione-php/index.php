 <?php include __DIR__ . './dischi.php'; ?>

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

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="../public/css/style.css" />
    </head>
    <body>
        <header>
            <div class="logo">
                <img src="../public/img/logo-spotify.png" alt="logo image" />
            </div>
            <div class="my-select">
                <select id="">
                    <option value="">Ciao</option>
                </select>
            </div>
        </header>
        <main>
        <?php foreach ($dischi as $disco) { ?>


            <div class="card">
                <img
                    src= <?php echo $disco['poster']; ?>
                    alt="album image"
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
    </body>
</html>
