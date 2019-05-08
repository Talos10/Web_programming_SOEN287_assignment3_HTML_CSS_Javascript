var dom;

function getElementAmpersandPipe() {
    dom = document.getElementById("field");
    dom.addEventListener("blur", convertAmpersandPipe, false);
}

function convertAmpersandPipe(){
   var modifiedUserInput;
   var result = document.getElementById("result");

   modifiedUserInput = dom.value.replace(/[&]/g, " and ");
   modifiedUserInput = modifiedUserInput.replace(/[|]/g, " or ");

   result.value = modifiedUserInput;
}

window.addEventListener("load", getElementAmpersandPipe, false);