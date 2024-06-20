<!DOCTYPE html>
<html lang="en">
<head>
  <script>
  $(document).ready(function() {
    $("#ajouter").click(function() {
        let newItem = $("#nouvelElement").val();
        if (newItem) {
            $("#maListe").append("<li>" + newItem + "</li>");
            $("#nouvelElement").val("");
        }
    });

    $("#maListe").on("click", "li", function() {
        $(this).remove();
    });
});

</script>
    <meta charset="UTF-8">
    <title>Manipulation de Liste avec jQuery</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        input[type="text"] {
            padding: 5px;
            margin-right: 10px;
        }
        button {
            padding: 5px 10px;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            margin: 5px;
            cursor: pointer;
            padding: 5px;
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <h1>Manipulation de Liste avec jQuery</h1>
    <input type="text" id="nouvelElement" placeholder="Nouvel élément">
    <button id="ajouter">Ajouter</button>
    <ul id="maListe">
        <!-- Liste vide pour commencer -->
    </ul>
    <script src="script.js"></script>
</body>
</html>
