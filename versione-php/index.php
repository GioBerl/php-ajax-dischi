<?php include '../database/dischi.php'; ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VERSIONE PHP</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="../public/css/style.css" />

    </head>
    <body>
        <header>
            <!-- <select id="authorSelect">
            <?php foreach ($dischi as $disco) { ?>
                <option value=""><?php echo $disco['author']; ?></option>
            <?php } ?>
            </select> -->
            <h1>GIRADISCHI PHP</h1>
        </header>
        <main>
            <?php foreach ($dischi as $disco) { ?>

            <div class="card">

                <div class="img-container">
                <img src=<?php echo $disco['poster']; ?> alt="<?php echo 'copertina album ' . $disco['title']; ?>"
                />
                </div>

                <div class="titolo"><?php echo $disco['title']; ?></div>
                <div class="autore"><?php echo $disco['author']; ?></div>
                <small class="anno"><?php echo $disco['year']; ?></small>
                <div class="base-stecca"><div class="stecca">
                    <div class="puntina"></div>
                </div></div>

            </div>

            <?php } ?>
        </main>



        <script src="../public/js/animation.js"></script>
    </body>
</html>
