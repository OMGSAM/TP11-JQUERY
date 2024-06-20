<!DOCTYPE html>
<html lang="en">
<head>
  <script>
  $(document).ready(function() {
    let count = 0;
    $("#increase").click(function() {
        count++;
        $("#counterValue").text(count);
    });
    $("#decrease").click(function() {
        count--;
        $("#counterValue").text(count);
    });
    $("#reset").click(function() {
        count = 0;
        $("#counterValue").text(count);
    });
});

  </script>
    <meta charset="UTF-8">
    <title>Compteur</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        .counter {
            font-size: 2em;
            margin: 20px 0;
        }
        button {
            font-size: 1em;
            padding: 10px 20px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <h1>Compteur</h1>
    <div class="counter" id="counterValue">0</div>
    <button id="increase">Augmenter</button>
    <button id="decrease">Diminuer</button>
    <button id="reset">Réinitialiser</button>
    <script src="script.js"></script>
</body>
</html>
