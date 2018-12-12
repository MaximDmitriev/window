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

});