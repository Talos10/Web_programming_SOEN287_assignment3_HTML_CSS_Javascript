function calculateTotal() {
    var rose = document.getElementById("rose").value;
    var lily = document.getElementById("lily").value;
    var calla = document.getElementById("calla").value;
    var orchid = document.getElementById("orchid").value;
    var daisy = document.getElementById("daisy").value;
    var standardChecked = document.getElementsByName("delivery")[0].checked;
    var premiumChecked = document.getElementsByName("delivery")[1].checked;
    var totalPrice;
    var pattern =/^[0]$|^[1-9]{1}[0-9]*?$/;
    var pRose = document.getElementById("pRose");
    var pLily = document.getElementById("pLily");
    var pCalla = document.getElementById("pCalla");
    var pOrchid = document.getElementById("pOrchid");
    var pDaisy = document.getElementById("pDaisy");
    var pDelivery = document.getElementById("pDelivery");
    var pTotalPrice = document.getElementById("pTotalPrice");

    if((!(pattern.test(rose) && pattern.test(lily) && pattern.test(calla) && pattern.test(orchid) && pattern.test(daisy))))
        alert("Error! The units entered for at least one of the items is either not a number or contains spaces (which need to be removed). Integers only please!");
    else if(!(standardChecked || premiumChecked))
        alert("Error! No delivery method was chosen. Please choose either standard or premium delivery.");
    else{
        totalPrice = rose*5.5 + lily*7.5 + calla*4 + orchid*8 + daisy*7;

        if(standardChecked){
            totalPrice += 2;
            pDelivery.innerText = "Delivery: $2";
            pTotalPrice.innerText = "Final Total: $" + totalPrice;
        }

        else{
            totalPrice += 6;
            pDelivery.innerText = "Delivery: $6";
            pTotalPrice.innerText = "Final Total: $" + totalPrice;
        }

        pRose.innerText = "Red Roses (units = " + rose + "): $" + (rose*5.5);
        pLily.innerText = "Yellow Lily (units = " + lily + "): $" + (lily*7.5);
        pCalla.innerText = "White Mini Calla (units = " + calla + "): $" + ( calla*4);
        pOrchid.innerText = "Pink Orchid (units = " + orchid + "): $" + (orchid*8);
        pDaisy.innerText = "Orange Daisy (units = " + daisy + "): $" + (daisy*7);
    }
}