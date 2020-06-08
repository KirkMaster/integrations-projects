"use strict";


function priceQuantity(targetElmt, targetElmt2){ 
    
    let element1 = document.querySelector(targetElmt); 
    let element2 = document.querySelector(targetElmt2); 

    element1.addEventListener("change", function(){ 
        let quantity = this.value;t

        
        switch(quantity){ 
            case "100":
                element2.innerHTML = "9,00€"
            break;

            case "500":
                element2.innerHTML = "40,00€"
            break;

            case "1000":
                element2.innerHTML = "75,00€"
            break;
        }
    });
}

document.addEventListener("DOMContentLoaded", function(){
    priceQuantity("#quantities", "#price"); 
});