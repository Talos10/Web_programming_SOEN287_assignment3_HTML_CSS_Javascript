function search() {

    var textarea = document.getElementById("textarea").value;
    var split = document.getElementById("split").value;
    var regex = document.getElementById("regex").value;
    var modifiers = document.getElementById("modifiers").value;
    var regularExpression = new RegExp(regex,modifiers);
    var bool;
    var match = 0;
    var result = document.getElementById("result");

    if(split !== ""){
        textarea = textarea.split(split);

        for(var i=0; i<textarea.length; i++){
            bool = regularExpression.test(textarea[i]);
            if(bool)
                match++;
        }
    }

    else{
        bool = regularExpression.test(textarea);
        if(bool)
            match = 1;
    }

    result.innerText = "There is a total of " + textarea.length + " non-empty words in the text, including " + match + " words matching the regex.";
}

function reset() {
    var result = document.getElementById("result");
    result.innerText = "";
}