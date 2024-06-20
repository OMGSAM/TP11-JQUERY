<!DOCTYPE html>
<html lang="en">
<head>
  <script>
  $(document).ready(function() {
    $("#redButton").click(function() {
        $("#text").css("color", "red");
    });
    $("#greenButton").click(function() {
        $("#text").css("color", "green");
    });
    $("#blueButton").click(function() {
        $("#text").css("color", "blue");
    });
});

  </script>
    <meta charset="UTF-8">
    <title>Changer la couleur du texte</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        button {
            font-size: 1em;
            padding: 10px 20px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <h1>Changer la couleur du texte</h1>
    <p id="text">Ceci est un texte dont la couleur va changer.</p>
    <button id="redButton">Rouge</button>
    <button id="greenButton">Vert</button>
    <button id="blueButton">Bleu</button>
    <script src="script.js"></script>
</body>
</html>
