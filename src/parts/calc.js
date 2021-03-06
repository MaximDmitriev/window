function calc(){

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

    let  show = true;

    btnCalc.forEach((item) => {
        item.addEventListener('click', () => {
            calc.classList.add("fadeIn");
            calc.style.display = "block";
            show = false;
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

    calcModal.forEach((item) => item.classList.add("animated"));

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
    
    document.querySelector(".type1_img").style.transform = "scale(1.1)";

    let typeFrame = 1,
        frameHeight = document.getElementById("height"),
        frameWidth = document.getElementById("width"),
        viewType = document.getElementById("view_type"),
        warmType = document.getElementById("warm").previousElementSibling,
        coldType = document.getElementById("cold").previousElementSibling,
        btnCalcFin = document.getElementById("btnCalcFin"),
        calcName = document.getElementById("calcName"),
        calcPhone = document.getElementById("calcPhone");




    typeWindow.forEach((item, i) =>{
        
        item.addEventListener('click', (event) =>{
            event.preventDefault();
            for(let j = 0; j < 4; j++){
                if(j == i){
                    document.querySelector(`.type${j + 1}_img`).style.transform = "scale(1.1)";
                    typeFrame = j + 1;
                } else {
                    document.querySelector(`.type${j + 1}_img`).style.transform = "scale(1)";
                }
            }

            bigImgType.forEach((item) => item.style.display = "none");
            bigImgType[i].style.display = "inline-block";
        });
    });

    let frameParams = {
        type: "",
        width: "",
        height: "",
        warmtype: "",
        viewtype: "",
        name: "",
        phone: ""

    }
    function checkNum(input){
        input.addEventListener('keypress', (event) => {
            if(/\D/.test(event.key)) event.preventDefault();
        });
    }

    checkNum(frameWidth);
    checkNum(frameHeight);

    warmType.addEventListener('click', (event) => {
        if(coldType.checked)  event.preventDefault();
        else frameParams.warmtype = "warm";
    });

    coldType.addEventListener('click', (event) => {
        if(warmType.checked) event.preventDefault();
        else  frameParams.warmtype = "cold";       
    });

    btnCalcFin.addEventListener('click', (event) =>{
        event.preventDefault();
        frameParams.type = typeFrame;
        frameParams.width = frameWidth.value;
        frameParams.height = frameHeight.value;
        frameParams.viewtype = viewType.value;
        frameParams.name = calcName.value;
        frameParams.phone = calcPhone.value;

        function reminder(id){
            id.classList.add("animated");
            setTimeout(() => {
                id.style.borderColor = "red";
                id.classList.add("pulse"); 
            }, 1300);
            id.classList.remove("pulse");
            setTimeout(() =>{
                id.style.borderColor = "#ccc";
            }, 2500);
        }
        check:
        if(warmType.checked === false && coldType.checked === false){

            calcEnd.style.display = "none";
            calcProfile.classList.add("fadeIn");
            calcProfile.style.display = "block"; 

            reminder(document.getElementById("cold"));
            reminder(document.getElementById("warm"));
       
        } else {
            for (let item in frameParams){
                if(frameParams[item] == ""){
                    switch (item){
                        case "width":
                            calcEnd.style.display = "none";
                            calc.classList.add("fadeIn");
                            calc.style.display = "block";
                            reminder(frameWidth) ;
                            break check;

                        case "height":
                            calcEnd.style.display = "none";
                            calc.classList.add("fadeIn");
                            calc.style.display = "block";
                            reminder(frameHeight) ;
                            break check;

                        case "name":
                            reminder(calcName) ;
                            break check;

                        case "phone":
                            reminder(calcPhone) ;
                            break check;
                    }
                }
            }
            sendData(frameParams);
        }
    });
    
    function sendData(data){

    data = JSON.stringify(data);
        
    let info = calcEnd.getElementsByTagName("h2"),
        message = {
            std: "Спасибо за обращение! <br>Оставьте свои данные",
            load: "Отправка",
            success: "Данные отправлены! <br>Мы Вам перезвоним!",
            error: "Ошибка сервера <br>Попробуйте еще раз"
        };
        

    let request = new XMLHttpRequest();
    request.open("POST", "../server.php");
    request.send(data);

    request.addEventListener('readystatechange', () =>{
        if(request.status == 200 && request.readyState != 4){
            info[0].innerHTML = message.load;
            info[0].style.color = "yellow";
        }
        else if(request.status == 200 && request.readyState == 4){
            info[0].innerHTML = message.success;
            info[0].style.color = "green";

            for(let item in frameParams){
                frameParams[item] = "";
            }

            for(let item in calcModal){
                let inputs = calcModal[item].querySelectorAll("input");
                inputs.forEach((item) => item.value = "");

                warmType.checked = false;
                coldType.checked = false;
            }
            setTimeout(() => {
                calcEnd.style.display = "none";
                info[0].style.color = "black";
                info[0].innerHTML = message.std;
            }, 3000);


        } else{
            info[0].innerHTML = message.error;
            info[0].style.color = "red";
        }
    });
}

module.exports = show;
}

module.exports = calc;