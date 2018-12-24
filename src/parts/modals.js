function modals(){

    let popupEngineer = document.querySelector(".popup_engineer"),
        btnEngineer = document.querySelector(".popup_engineer_btn"),
        btnRequest = document.querySelectorAll(".phone_link"),
        popupModal = document.querySelector(".popup"),
        closePopupModal = popupModal.querySelector("strong"),
        closeEngineer = popupEngineer.querySelector("strong"),
        forms = document.querySelectorAll(".form"),
        show = true;



    let mask = require('./mask');

    forms.forEach((item) => {
        let name = item.querySelector("input[name=user_phone]");
        mask(name);
    });

    popupEngineer.classList.add("animated");
    popupModal.classList.add("animated");

    function showModal(tab){
        show = false;
        tab.classList.add("fadeIn");
        tab.style.display = "block";
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }

    function hideModal(tab){
        tab.classList.remove("fadeIn");
        tab.classList.add("fadeOut");
        setTimeout(() => {
            tab.style.display = "none";
            tab.classList.remove("fadeOut");
            document.getElementsByTagName("html")[0].style.overflow = "";
        }, 1000);
    }

    btnEngineer.addEventListener('click', () => {
        showModal(popupEngineer);
    });

    popupEngineer.addEventListener('click', function(event){
        if(this == event.target || event.target.contains(closeEngineer)){
            hideModal(popupEngineer);
        }
    });

    btnRequest.forEach((item) => {
        item.addEventListener('click', (event) => {
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
        if(show)  showModal(popupModal);
    }, 60000);

    function sendModal(form){

        let info = form.querySelector("h2");

        let message = {
            std: "Запишитесь сегодня на <br><span>бесплатный замер</span>",
            load: "Отправка",
            success: "Данные отправлены! <br>Мы Вам перезвоним!",
            error: "Ошибка сервера <br>Попробуйте еще раз"
        }

        let data = new FormData(form);

        let request = new XMLHttpRequest();

        request.open("POST", "./server.php");
        request.send(data);


        request.addEventListener('readystatechange', () => {
            if(request.status == 200 && request.readyState != 4){
                info.innerHTML = message.load;
                info.style.color = "yellow";
            }
            else if(request.status == 200 && request.readyState == 4){
                info.innerHTML = message.success;
                info.style.color = "green";
    
                let inputs = form.querySelectorAll("input");
                inputs.forEach((item) => item.value = "");
                mask(inputs[1]);                //для очистки массива
                
                setTimeout(() => {
                    hideModal(popupModal);
                    hideModal(popupEngineer);
                    info.style.color = "black";
                    info.innerHTML = message.std;
                }, 3000);

            } else{
                info.innerHTML = message.error;
                info.style.color = "red";
            }
        });
    }

    forms.forEach((item) => {
        item.addEventListener('submit', (event) => {
            console.log("clicked");
            show = false;
            event.preventDefault();
            sendModal(item);
        });
    });
}

module.exports = modals;