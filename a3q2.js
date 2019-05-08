var input = document.getElementById("input");

function validateVariable() {


    var pattern =/^[a-z][A-Za-z0-9_]+$/;

    if(!pattern.test(input.value)){
        input.setAttribute("class", "wrong");
        return false;
    }

    else{
        input.setAttribute("class", "");
        return true;
    }

}

function addVariable() {

    var notInTheList = true;
    var variableToAdd = document.createElement("li");
    var variableToAddText = document.createTextNode(input.value);
    var documentList = document.getElementById("list");
    var body = document.getElementsByTagName("body")[0];

    if(validateVariable()){
        for(var i=0; i<documentList.children.length; i++){
            if(input.value === documentList.children[i].innerText){
                notInTheList = false;
                console.log("already on the list");
            }
        }

        if(notInTheList){
            variableToAdd.appendChild(variableToAddText);
            documentList.appendChild(variableToAdd);
            body.appendChild(documentList);
            console.log("adding to the list")
        }
    }
}