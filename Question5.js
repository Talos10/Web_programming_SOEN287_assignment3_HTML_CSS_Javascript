function suggestion() {
    var suggestion = document.getElementById("expert").style;
    var price = document.getElementById("price").value;
    var location = document.getElementsByName("prefLoc")[0];

    document.write("Results is " + ("3" * 3) + "!");

    if(price === "50to100" && location.checked)
         suggestion.visibility = "visible";
    else
        suggestion.visibility = "hidden";
}