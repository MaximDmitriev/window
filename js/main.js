'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // popup_engineer popup_modal

    let popupEngineer = document.querySelector(".popup_engineer"),
        btnEngineer = document.querySelector(".popup_engineer_btn"),
        btnRequest = document.querySelectorAll(".phone_link"),
        popupModal = document.querySelector(".popup"),
        closePopupModal = popupModal.querySelector("strong"),
        closeEngineer = popupEngineer.querySelector("strong");

    popupEngineer.classList.add("animated");
    popupModal.classList.add("animated");

    function showModal(tab){
        tab.classList.add("fadeIn");
        tab.style.display = "block";
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }

    function hideModal(tab){
        tab.classList.remove("fadeIn");
        tab.classList.add("fadeOut");
        setTimeout(() =>{
            tab.style.display = "none";
            tab.classList.remove("fadeOut");
            document.getElementsByTagName("html")[0].style.overflow = "";
        }, 1000);
    }
    
    btnEngineer.addEventListener('click', () =>{
        showModal(popupEngineer);
    });

    popupEngineer.addEventListener('click', function(event){
        if(this == event.target || event.target.contains(closeEngineer)){
            hideModal(popupEngineer);
        }
    });

    btnRequest.forEach((item) => {
        item.addEventListener('click', (event) =>{
            event.preventDefault();
            showModal(popupModal);
        });
    
    });

    
    popupModal.addEventListener('click', function(event){
        if(this == event.target || event.target.contains(closePopupModal)){
            hideModal(popupModal);
        }
    });

    setTimeout(() =>{
        showModal(popupModal);
    }, 60000);


    // tabs

    let glazing = document.querySelector(".glazing"),
        glazingTabName = glazing.querySelectorAll(".glazing_block"),
        glazingLink = glazing.querySelectorAll("a"),
        glazingTabContent = glazing.querySelectorAll(".row");

    function hideGlazing(count){
        for(let i = count; i < glazingTabContent.length; i++){
            glazingTabContent[i].style.display = "none";
            glazingLink[i].classList.remove("active");
        }
    }

    function showGlazing(count){
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

        
        function hideDecoration(count){
            for(let i = count; i < decorationTabContent.length; i++){
                decorationTabContent[i].style.display = "none";
                decorationTabName[i].querySelector("div").classList.remove("after_click");
            }
        }
    
        function showDecoration(count){
            decorationTabContent[count].style.display = "block";
            decorationTabName[count].querySelector("div").classList.add("after_click");
        }

        decorationLink.forEach((item, i) =>{
            item.addEventListener('click', () =>{
                hideDecoration(0);
                showDecoration(i);
            });
        });

    //works

    let works = document.querySelector(".works"),
        imgPreview = works.querySelectorAll(".row>div"),
        overlayWorks = document.createElement('div'),
        bigImageWorks = document.createElement('div');

        
    overlayWorks.classList.add("overlayworks");
    overlayWorks.classList.add("animated");
    overlayWorks.classList.add("fadeIn");

    bigImageWorks.classList.add("bigImageWorks");
    

    imgPreview.forEach((item) =>{
        item.querySelector("a").addEventListener('click', (event) =>{
            event.preventDefault();
        });
        item.querySelector("a").lastChild.addEventListener('click', () =>{
            document.body.appendChild(overlayWorks);
            document.getElementsByTagName("html")[0].style.overflow = "hidden";
            
            let url = item.querySelector("a").getAttribute("href");

            overlayWorks.appendChild(bigImageWorks);
            bigImageWorks.style.backgroundImage = `url(${url})`;

            overlayWorks.addEventListener('click', function() {
                overlayWorks.classList.add("fadeOut");
                setTimeout(() => {
                    overlayWorks.classList.remove("fadeOut");

                    document.body.removeChild(document.body.lastChild);
                    document.getElementsByTagName("html")[0].style.overflow = "";
                }, 1000);
            });
        });
    });

    // calc
    let btnCalc = document.querySelectorAll(".glazing_price_btn"),
        calcBtn = document.querySelector(".popup_calc_button"),
        calcProfileBtn = document.querySelector(".popup_calc_profile_button"),
        calc = document.querySelector(".popup_calc"),
        calcProfile = document.querySelector(".popup_calc_profile"),
        calcEnd = document.querySelector(".popup_calc_end"),
        btnCalcClose = [document.querySelector(".popup_calc_end_close"), 
                        document.querySelector(".popup_calc_close"),
                        document.querySelector(".popup_calc_profile_close")],
        typeWindow = calc.querySelectorAll("a"),
        bigImgType = document.querySelectorAll(".big_img>img");
    
    // console.log(bigImgType);


    btnCalc.forEach((item) => {
        item.addEventListener('click', () => {
            calc.classList.add("fadeIn");
            calc.style.display = "block";
        });
    });
    calcBtn.addEventListener('click', () => {
        calc.style.display = "none";
        calcProfile.classList.add("fadeIn");
        calcProfile.style.display = "block";
    });

    calcProfileBtn.addEventListener('click', () => {
        calcProfile.style.display = "none";
        calcEnd.classList.add("fadeIn");
        calcEnd.style.display = "block";
    });

    let calcModal = [calc, calcProfile, calcEnd];

    calcModal.forEach((item) => {
        item.classList.add("animated");
    });

    btnCalcClose.forEach((item) => {
        item.addEventListener('click', () =>{
            calcModal.forEach((item) => {
                if(item.style.display == "block") {
                    item.classList.remove("fadeIn");
                    item.classList.add("fadeOut");
                    setTimeout(() => {
                        item.style.display = "none";
                        item.classList.remove("fadeOut");
                    }, 1000); 
                }
            });
        });
    });
    
    // let typeIcon = typeWindow.querySelectorAll("img");

    typeWindow.forEach((item, i) =>{
        item.addEventListener('click', (event) =>{
            event.preventDefault();
            for(let j = 0; j < 4; j++){
                if(j == i){
                    document.querySelector(`.type${j + 1}_img`).style.transform = "scale(1.1)";
                } else {
                    document.querySelector(`.type${j + 1}_img`).style.transform = "scale(1)";
                }
                console.log(document.querySelector(`.type${j + 1}_img`));
            }


            // typeIcon.forEach((item) =>{
            //     item.style.scale = "1";
            //     typeIcon[i].style.scale = "1.1";
            // });



            bigImgType.forEach((item) => {
                item.style.display = "none";
            });
            bigImgType[i].style.display = "inline-block";


        });
    });



});