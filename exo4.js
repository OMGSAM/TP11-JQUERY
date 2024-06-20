<!DOCTYPE html>
<html lang="en">
<head>
  <script>
  $(document).ready(function() {
    $("#text").hover(function() {
        $(this).css("color", "red");
    }, function() {
        $(this).css("color", "black");
    });
});

</script>
    <meta charset="UTF-8">
    <title>Changer la couleur du texte au survol</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <h1 id="text">Survolez ce texte</h1>
    <script src="script.js"></script>
</body>
</html>
