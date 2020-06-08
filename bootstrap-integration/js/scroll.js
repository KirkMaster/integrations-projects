"use strict";


function scrollFixed(targerElmt, addClass, scrollValue, axeY=true){
    let targetElement = document.querySelector(targerElmt); 
    let body = document.querySelector("body"); 
    let targetElementHeight = targetElement.clientHeight; 
    let targetElementWidth = targetElement.clientWidth; 

    //on écoute l'événement scroll
    document.addEventListener("scroll", function(){
        if(axeY === true){ 
            if(window.scrollY >= scrollValue){ 
                body.style.marginTop = targetElementHeight+"px"; 
                targetElement.classList.add(addClass) 
            }
            else if (window.scrollY < scrollValue){ 
                body.removeAttribute("style"); 
                targetElement.classList.remove(addClass); 
            }
        }
        else{ 
            if(window.scrollX >= scrollValue){
                body.style.marginLeft = targetElementWidth+"px";
                targetElement.classList.add(addClass)
            }
            else if (window.scrollX < scrollValue){
                body.removeAttribute("style");
                targetElement.classList.remove(addClass);
            }
        }
    });
}

/*Fonction qui permet d'appliquer un déplacement fluide lorsqu'on clique sur une ancre dans un lien*/
function scrollAnchor(){
	//initialisation des variables
	var id = $(this).attr("href"); 
    var offset = $(id).offset().top; 
	
	//animation du scroll
    $('html').animate({scrollTop: offset}, 'slow'); 
}

//On attend que la page soit totalement chargée
document.addEventListener("DOMContentLoaded", function(){
    
    scrollFixed("#header", "header-fixed", 1);
	
	
    $('a[href^="#"]').on('click',scrollAnchor);
});
