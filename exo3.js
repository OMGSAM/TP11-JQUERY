<!DOCTYPE html>
<html lang="en">
<head>
  <script>
  $(document).ready(function() {
    $("#growButton").click(function() {
        $("#square").animate({width: "+=50px", height: "+=50px"});
    });
    $("#shrinkButton").click(function() {
        $("#square").animate({width: "-=50px", height: "-=50px"});
    });
    $("#colorButton").click(function() {
        let colors = ["green", "red", "yellow"];
        let currentColor = $("#square").css("background-color");
        let newColor = colors[Math.floor(Math.random() * colors.length)];
        while (currentColor === newColor) {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        }
        $("#square").css("background-color", newColor);
    });
});

  </script>
    <meta charset="UTF-8">
    <title>Animation de Taille et Couleur</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        #square {
            width: 100px;
            height: 100px;
            background-color: blue;
            margin: 0 auto;
        }
        button {
            font-size: 1em;
            padding: 10px 20px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <h1>Animation de Taille et Couleur</h1>
    <div id="square"></div>
    <br>
    <button id="growButton">Agrandir</button>
    <button id="shrinkButton">Réduire</button>
    <button id="colorButton">Changer Couleur</button>
    <script src="script.js"></script>
</body>
</html>
