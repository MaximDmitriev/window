'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // popup_engineer popup_modal

    let popupEngineer = document.querySelector(".popup_engineer"),
        btnEngineer = document.querySelector(".popup_engineer_btn"),
        btnRequest = document.querySelectorAll(".phone_link"),
        popupModal = document.querySelector(".popup"),
        closePopupModal = popupModal.querySelector("strong"),
        closeEngineer = popupEngineer.querySelector("strong");

    btnEngineer.addEventListener('click', () =>{
        popupEngineer.style.display = "block";
    });

    popupEngineer.addEventListener('click', function(event){
        if(this == event.target || event.target.contains(closeEngineer)){
            popupEngineer.style.display = "none"; 
        }
    });

    btnRequest.forEach((item) => {
        item.addEventListener('click', (event) =>{
            event.preventDefault();
            popupModal.style.display = "block";
        });
    
    });

    
    popupModal.addEventListener('click', function(event){
        if(this == event.target || event.target.contains(closePopupModal)){
            popupModal.style.display = "none"; 
        }
    });


    // tabs

    let glazing = document.querySelector(".glazing"),
        glazingTabName = glazing.querySelectorAll(".glazing_block"),
        glazingLink = glazing.querySelectorAll("a"),
        glazingTabContent = glazing.querySelectorAll(".row");

    function hideGlazing(count){
        for(let i = count; i < glazingTabContent.length; i++){
            // glazingTabContent[count].classList.remove("fadeIn");
            // glazingTabContent[count].classList.add("fadeOut");
            glazingTabContent[i].style.display = "none";
            glazingLink[i].classList.remove("active");
        }
    }

    function showGlazing(count){
        // glazingTabContent[count].classList.remove("fadeOut");
        // glazingTabContent[count].classList.add("fadeIn");
        glazingTabContent[count].style.display = "block";
        glazingLink[count].classList.add("active");
    }

    hideGlazing(1);

    glazingTabName.forEach((item, i) =>{
        item.addEventListener('click', () =>{
            hideGlazing(0);
            showGlazing(i);

        });
    });


    let decoration = document.querySelector(".decoration"),
        decorationTabContent = decoration.querySelectorAll(".decoration_content>.row>div"),
        decorationTabName = decoration.querySelectorAll(".decoration_item"),
        decorationLink = decoration.querySelectorAll("a");

        console.log(decorationTabContent);
        console.log(decorationTabName);
        console.log(decorationLink);
        
        function hideDecoration(count){
            for(let i = count; i < decorationTabContent.length; i++){
                decorationTabContent[i].style.display = "none";
                // decorationLink[i].classList.remove(":focus");
                decorationTabName[i].querySelector("div").classList.remove("after_click");
            }
        }
    
        function showDecoration(count){
            decorationTabContent[count].style.display = "block";
            // decorationLink[count].classList.add(":focus");
            decorationTabName[count].querySelector("div").classList.add("after_click");
        }


        decorationLink.forEach((item, i) =>{
            item.addEventListener('click', () =>{
                hideDecoration(0);
                showDecoration(i);
    
            });
        });

});