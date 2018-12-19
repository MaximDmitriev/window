function modals(){
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
        if(popupModal.style.display == "none" || popupEngineer.style.display == "none") {
            showModal(popupModal);
        }    
    }, 60000);
}

module.exports = modals;