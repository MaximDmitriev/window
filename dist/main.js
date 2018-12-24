/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    \r\n    'use strict';\r\n    \r\n    let calc = __webpack_require__(/*! ./parts/calc */ \"./src/parts/calc.js\"),\r\n        works = __webpack_require__(/*! ./parts/works */ \"./src/parts/works.js\"),\r\n        tabs = __webpack_require__(/*! ./parts/tabs */ \"./src/parts/tabs.js\"),\r\n        modals = __webpack_require__(/*! ./parts/modals */ \"./src/parts/modals.js\"),\r\n        timer = __webpack_require__(/*! ./parts/timer */ \"./src/parts/timer.js\");\r\n \r\n\r\n \r\n\r\n    calc();\r\n    works();\r\n    tabs();\r\n    modals();\r\n    timer();\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function calc(){\r\n\r\n    let btnCalc = document.querySelectorAll(\".glazing_price_btn\"),\r\n        calcBtn = document.querySelector(\".popup_calc_button\"),\r\n        calcProfileBtn = document.querySelector(\".popup_calc_profile_button\"),\r\n        calc = document.querySelector(\".popup_calc\"),\r\n        calcProfile = document.querySelector(\".popup_calc_profile\"),\r\n        calcEnd = document.querySelector(\".popup_calc_end\"),\r\n        btnCalcClose = [document.querySelector(\".popup_calc_end_close\"), \r\n                        document.querySelector(\".popup_calc_close\"),\r\n                        document.querySelector(\".popup_calc_profile_close\")],\r\n        typeWindow = calc.querySelectorAll(\"a\"),\r\n        bigImgType = document.querySelectorAll(\".big_img>img\");\r\n\r\n\r\n    btnCalc.forEach((item) => {\r\n        item.addEventListener('click', () => {\r\n            calc.classList.add(\"fadeIn\");\r\n            calc.style.display = \"block\";\r\n        });\r\n    });\r\n    calcBtn.addEventListener('click', () => {\r\n        calc.style.display = \"none\";\r\n        calcProfile.classList.add(\"fadeIn\");\r\n        calcProfile.style.display = \"block\";\r\n    });\r\n\r\n    calcProfileBtn.addEventListener('click', () => {\r\n        calcProfile.style.display = \"none\";\r\n        calcEnd.classList.add(\"fadeIn\");\r\n        calcEnd.style.display = \"block\";\r\n    });\r\n\r\n    let calcModal = [calc, calcProfile, calcEnd];\r\n\r\n    calcModal.forEach((item) => item.classList.add(\"animated\"));\r\n\r\n    btnCalcClose.forEach((item) => {\r\n        item.addEventListener('click', () =>{\r\n            calcModal.forEach((item) => {\r\n                if(item.style.display == \"block\") {\r\n                    item.classList.remove(\"fadeIn\");\r\n                    item.classList.add(\"fadeOut\");\r\n                    setTimeout(() => {\r\n                        item.style.display = \"none\";\r\n                        item.classList.remove(\"fadeOut\");\r\n                    }, 1000); \r\n                }\r\n            });\r\n        });\r\n    });\r\n    \r\n    document.querySelector(\".type1_img\").style.transform = \"scale(1.1)\";\r\n\r\n    let typeFrame = 1,\r\n        frameHeight = document.getElementById(\"height\"),\r\n        frameWidth = document.getElementById(\"width\"),\r\n        viewType = document.getElementById(\"view_type\"),\r\n        warmType = document.getElementById(\"warm\").previousElementSibling,\r\n        coldType = document.getElementById(\"cold\").previousElementSibling,\r\n        btnCalcFin = document.getElementById(\"btnCalcFin\"),\r\n        calcName = document.getElementById(\"calcName\"),\r\n        calcPhone = document.getElementById(\"calcPhone\");\r\n\r\n\r\n    typeWindow.forEach((item, i) =>{\r\n        \r\n        item.addEventListener('click', (event) =>{\r\n            event.preventDefault();\r\n            for(let j = 0; j < 4; j++){\r\n                if(j == i){\r\n                    document.querySelector(`.type${j + 1}_img`).style.transform = \"scale(1.1)\";\r\n                    typeFrame = j + 1;\r\n                } else {\r\n                    document.querySelector(`.type${j + 1}_img`).style.transform = \"scale(1)\";\r\n                }\r\n            }\r\n\r\n            bigImgType.forEach((item) => item.style.display = \"none\");\r\n            bigImgType[i].style.display = \"inline-block\";\r\n        });\r\n    });\r\n\r\n    let frameParams = {\r\n        type: \"\",\r\n        width: \"\",\r\n        height: \"\",\r\n        warmtype: \"\",\r\n        viewtype: \"\",\r\n        name: \"\",\r\n        phone: \"\"\r\n\r\n    }\r\n    function checkNum(input){\r\n        input.addEventListener('keypress', (event) => {\r\n            if(/\\D/.test(event.key)) event.preventDefault();\r\n        });\r\n    }\r\n\r\n    checkNum(frameWidth);\r\n    checkNum(frameHeight);\r\n\r\n    warmType.addEventListener('click', (event) => {\r\n        if(coldType.checked)  event.preventDefault();\r\n        else frameParams.warmtype = \"warm\";\r\n    });\r\n\r\n    coldType.addEventListener('click', (event) => {\r\n        // if(warmType.checked) {\r\n        //     event.preventDefault();\r\n        if(warmType.checked) event.preventDefault();\r\n        else  frameParams.warmtype = \"cold\"; \r\n        \r\n    });\r\n\r\n    btnCalcFin.addEventListener('click', (event) =>{\r\n        event.preventDefault();\r\n        frameParams.type = typeFrame;\r\n        frameParams.width = frameWidth.value;\r\n        frameParams.height = frameHeight.value;\r\n        frameParams.viewtype = viewType.value;\r\n        frameParams.name = calcName.value;\r\n        frameParams.phone = calcPhone.value;\r\n\r\n        function reminder(id){\r\n            id.classList.add(\"animated\");\r\n            setTimeout(() => {\r\n                id.style.borderColor = \"red\";\r\n                id.classList.add(\"pulse\"); \r\n            }, 1300);\r\n            id.classList.remove(\"pulse\");\r\n            setTimeout(() =>{\r\n                id.style.borderColor = \"#ccc\";\r\n            }, 2500);\r\n        }\r\n        check:\r\n        if(warmType.checked === false && coldType.checked === false){\r\n\r\n            calcEnd.style.display = \"none\";\r\n            calcProfile.classList.add(\"fadeIn\");\r\n            calcProfile.style.display = \"block\"; \r\n\r\n            reminder(document.getElementById(\"cold\"));\r\n            reminder(document.getElementById(\"warm\"));\r\n       \r\n        } else {\r\n            for (let item in frameParams){\r\n                if(frameParams[item] == \"\"){\r\n                    switch (item){\r\n                        case \"width\":\r\n                            calcEnd.style.display = \"none\";\r\n                            calc.classList.add(\"fadeIn\");\r\n                            calc.style.display = \"block\";\r\n                            reminder(frameWidth) ;\r\n                            break check;\r\n\r\n                        case \"height\":\r\n                            calcEnd.style.display = \"none\";\r\n                            calc.classList.add(\"fadeIn\");\r\n                            calc.style.display = \"block\";\r\n                            reminder(frameHeight) ;\r\n                            break check;\r\n\r\n                        case \"name\":\r\n                            reminder(calcName) ;\r\n                            break check;\r\n\r\n                        case \"phone\":\r\n                            reminder(calcPhone) ;\r\n                            break check;\r\n                    }\r\n                }\r\n            }\r\n            sendData(frameParams);\r\n        }\r\n    });\r\n    \r\n    function sendData(data){\r\n\r\n    data = JSON.stringify(data);\r\n        \r\n    let info = calcEnd.getElementsByTagName(\"h2\"),\r\n        message = {\r\n            std: \"Спасибо за обращение! <br>Оставьте свои данные\",\r\n            load: \"Отправка\",\r\n            success: \"Данные отправлены! <br>Мы Вам перезвоним!\",\r\n            error: \"Ошибка сервера <br>Попробуйте еще раз\"\r\n        };\r\n        \r\n\r\n    let request = new XMLHttpRequest();\r\n    request.open(\"POST\", \"../server.php\");\r\n    request.send(data);\r\n\r\n    request.addEventListener('readystatechange', () =>{\r\n        if(request.status == 200 && request.readyState != 4){\r\n            info[0].innerHTML = message.load;\r\n            info[0].style.color = \"yellow\";\r\n        }\r\n        else if(request.status == 200 && request.readyState == 4){\r\n            info[0].innerHTML = message.success;\r\n            info[0].style.color = \"green\";\r\n\r\n            for(let item in frameParams){\r\n                frameParams[item] = \"\";\r\n            }\r\n\r\n            for(let item in calcModal){\r\n                let inputs = calcModal[item].querySelectorAll(\"input\");\r\n                inputs.forEach((item) => item.value = \"\");\r\n\r\n                warmType.checked = false;\r\n                coldType.checked = false;\r\n            }\r\n            setTimeout(() => {\r\n                calcEnd.style.display = \"none\";\r\n                info[0].style.color = \"black\";\r\n                info[0].innerHTML = message.std;\r\n            }, 3000);\r\n\r\n\r\n        } else{\r\n            info[0].innerHTML = message.error;\r\n            info[0].style.color = \"red\";\r\n        }\r\n    });\r\n}\r\n\r\n\r\n}\r\n\r\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./src/parts/calc.js?");

/***/ }),

/***/ "./src/parts/mask.js":
/*!***************************!*\
  !*** ./src/parts/mask.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function mask(input) {\r\n\r\n    input.focus();\r\n    input.selectionStart = input.value.length;\r\n\r\n    let numbers = [];\r\n\r\n    function writeToInput(id, arr){\r\n        let output = \"+7 (\";\r\n        for (let i in arr) {\r\n            if (i == 3) {\r\n                output += \") \" + arr[i];\r\n                id.value = output;\r\n                continue;\r\n            }\r\n            if (i == 6 || i == 8) {\r\n                output += \" - \" + arr[i];\r\n                id.value = output;\r\n                continue;\r\n            }\r\n            output += arr[i];\r\n            id.value = output;\r\n        }\r\n    }\r\n\r\n    input.addEventListener('keydown', (event) => {\r\n        if (event.keyCode == 8 && numbers.length != 0) {\r\n            event.preventDefault();\r\n            numbers.pop();\r\n            writeToInput(input, numbers);\r\n        } \r\n    });\r\n\r\n    input.addEventListener('keypress', (event) => {\r\n\r\n        if (/\\D/g.test(event.key)) event.preventDefault();\r\n        else {\r\n            if (numbers.length == 10) event.preventDefault();\r\n            else {\r\n                event.preventDefault();\r\n                numbers.push(event.key);\r\n                writeToInput(input, numbers);\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\nmodule.exports = mask;\n\n//# sourceURL=webpack:///./src/parts/mask.js?");

/***/ }),

/***/ "./src/parts/modals.js":
/*!*****************************!*\
  !*** ./src/parts/modals.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function modals(){\r\n\r\n    let popupEngineer = document.querySelector(\".popup_engineer\"),\r\n        btnEngineer = document.querySelector(\".popup_engineer_btn\"),\r\n        btnRequest = document.querySelectorAll(\".phone_link\"),\r\n        popupModal = document.querySelector(\".popup\"),\r\n        closePopupModal = popupModal.querySelector(\"strong\"),\r\n        closeEngineer = popupEngineer.querySelector(\"strong\"),\r\n        forms = document.querySelectorAll(\".form\"),\r\n        show = true;\r\n\r\n\r\n\r\n    let mask = __webpack_require__(/*! ./mask */ \"./src/parts/mask.js\");\r\n\r\n    forms.forEach((item) => {\r\n        let name = item.querySelector(\"input[name=user_phone]\");\r\n        mask(name);\r\n    });\r\n\r\n    popupEngineer.classList.add(\"animated\");\r\n    popupModal.classList.add(\"animated\");\r\n\r\n    function showModal(tab){\r\n        show = false;\r\n        tab.classList.add(\"fadeIn\");\r\n        tab.style.display = \"block\";\r\n        document.getElementsByTagName(\"html\")[0].style.overflow = \"hidden\";\r\n    }\r\n\r\n    function hideModal(tab){\r\n        tab.classList.remove(\"fadeIn\");\r\n        tab.classList.add(\"fadeOut\");\r\n        setTimeout(() => {\r\n            tab.style.display = \"none\";\r\n            tab.classList.remove(\"fadeOut\");\r\n            document.getElementsByTagName(\"html\")[0].style.overflow = \"\";\r\n        }, 1000);\r\n    }\r\n\r\n    btnEngineer.addEventListener('click', () => {\r\n        showModal(popupEngineer);\r\n    });\r\n\r\n    popupEngineer.addEventListener('click', function(event){\r\n        if(this == event.target || event.target.contains(closeEngineer)){\r\n            hideModal(popupEngineer);\r\n        }\r\n    });\r\n\r\n    btnRequest.forEach((item) => {\r\n        item.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            showModal(popupModal);\r\n        });\r\n    });\r\n\r\n    popupModal.addEventListener('click', function(event){\r\n        if(this == event.target || event.target.contains(closePopupModal)){\r\n            hideModal(popupModal);\r\n        }\r\n    });\r\n\r\n    setTimeout(() =>{   \r\n        if(show)  showModal(popupModal);\r\n    }, 60000);\r\n\r\n    function sendModal(form){\r\n\r\n        let info = form.querySelector(\"h2\");\r\n\r\n        let message = {\r\n            std: \"Запишитесь сегодня на <br><span>бесплатный замер</span>\",\r\n            load: \"Отправка\",\r\n            success: \"Данные отправлены! <br>Мы Вам перезвоним!\",\r\n            error: \"Ошибка сервера <br>Попробуйте еще раз\"\r\n        }\r\n\r\n        let data = new FormData(form);\r\n\r\n        let request = new XMLHttpRequest();\r\n\r\n        request.open(\"POST\", \"./server.php\");\r\n        request.send(data);\r\n\r\n\r\n        request.addEventListener('readystatechange', () => {\r\n            if(request.status == 200 && request.readyState != 4){\r\n                info.innerHTML = message.load;\r\n                info.style.color = \"yellow\";\r\n            }\r\n            else if(request.status == 200 && request.readyState == 4){\r\n                info.innerHTML = message.success;\r\n                info.style.color = \"green\";\r\n    \r\n                let inputs = form.querySelectorAll(\"input\");\r\n                inputs.forEach((item) => item.value = \"\");\r\n                mask(inputs[1]);                //для очистки массива\r\n                \r\n                setTimeout(() => {\r\n                    hideModal(popupModal);\r\n                    hideModal(popupEngineer);\r\n                    info.style.color = \"black\";\r\n                    info.innerHTML = message.std;\r\n                }, 3000);\r\n\r\n            } else{\r\n                info.innerHTML = message.error;\r\n                info.style.color = \"red\";\r\n            }\r\n        });\r\n    }\r\n\r\n    forms.forEach((item) => {\r\n        item.addEventListener('submit', (event) => {\r\n            console.log(\"clicked\");\r\n            show = false;\r\n            event.preventDefault();\r\n            sendModal(item);\r\n        });\r\n    });\r\n}\r\n\r\nmodule.exports = modals;\n\n//# sourceURL=webpack:///./src/parts/modals.js?");

/***/ }),

/***/ "./src/parts/tabs.js":
/*!***************************!*\
  !*** ./src/parts/tabs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tabs() {\r\n    let glazing = document.querySelector(\".glazing\"),\r\n        glazingTabName = glazing.querySelectorAll(\".glazing_block\"),\r\n        glazingLink = glazing.querySelectorAll(\"a\"),\r\n        glazingTabContent = glazing.querySelectorAll(\".row\");\r\n\r\n    function addClasses(selector) {\r\n        selector.forEach((item) => {\r\n            item.classList.add(\"animated\");\r\n            item.classList.add(\"fadeIn\");\r\n        });\r\n    }\r\n\r\n\r\n\r\n    function hideGlazing(count) {\r\n        for (let i = count; i < glazingTabContent.length; i++) {\r\n            glazingTabContent[i].style.display = \"none\";\r\n            glazingLink[i].classList.remove(\"active\");\r\n        }\r\n    }\r\n\r\n    function showGlazing(count) {\r\n        glazingTabContent[count].style.display = \"block\";\r\n        glazingLink[count].classList.add(\"active\");\r\n    }\r\n\r\n    hideGlazing(1);\r\n\r\n    glazingTabName.forEach((item, i) => {\r\n        item.addEventListener('click', () => {\r\n            hideGlazing(0);\r\n            showGlazing(i);\r\n\r\n        });\r\n    });\r\n\r\n\r\n    let decoration = document.querySelector(\".decoration\"),\r\n        decorationTabContent = decoration.querySelectorAll(\".decoration_content>.row>div\"),\r\n        decorationTabName = decoration.querySelectorAll(\".decoration_item\"),\r\n        decorationLink = decoration.querySelectorAll(\"a\");\r\n\r\n    \r\n    function hideDecoration(count) {\r\n        for (let i = count; i < decorationTabContent.length; i++) {\r\n            decorationTabContent[i].style.display = \"none\";\r\n            decorationTabName[i].querySelector(\"div\").classList.remove(\"after_click\");\r\n        }\r\n    }\r\n\r\n    function showDecoration(count) {\r\n        decorationTabContent[count].style.display = \"block\";\r\n        decorationTabName[count].querySelector(\"div\").classList.add(\"after_click\");\r\n    }\r\n\r\n    decorationLink.forEach((item, i) => {\r\n        item.addEventListener('click', () => {\r\n            hideDecoration(0);\r\n            showDecoration(i);\r\n        });\r\n    });\r\n\r\n    addClasses(glazingTabContent);\r\n    addClasses(decorationTabContent);\r\n}\r\n\r\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./src/parts/tabs.js?");

/***/ }),

/***/ "./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function timer() {\r\n    let days = document.querySelector(\"#days\"),\r\n        hours = document.querySelector(\"#hours\"),\r\n        minutes = document.querySelector(\"#minutes\"),\r\n        seconds = document.querySelector(\"#seconds\"),\r\n        deadLine = \"2018-12-31\";\r\n\r\n    let timer = setInterval(() => countdown(deadLine), 1000);\r\n\r\n    function countdown(time){\r\n        let timeNow = (new Date()).getTime() - (new Date()).getTimezoneOffset()*60*1000;\r\n\r\n        let diff = Math.floor((Date.parse(time) - timeNow)/1000);\r\n\r\n        let sec = diff % 60,\r\n            min = Math.floor((diff % 3600) / 60),\r\n            h = Math.floor((diff % (60 * 60 * 24)) / 3600),\r\n            d = Math.floor((diff % (60 * 60 * 24 * 365)) / (3600 * 24));\r\n    \r\n        seconds.textContent = (\"0\" + sec).slice(-2);\r\n        minutes.textContent = (\"0\" + min).slice(-2);\r\n        hours.textContent = (\"0\" + h).slice(-2);\r\n        days.textContent = (\"0\" + d).slice(-2);\r\n\r\n        if(diff <= 0){\r\n            clearInterval(timer);\r\n            seconds.textContent = \"00\";\r\n            minutes.textContent = \"00\";\r\n            hours.textContent = \"00\";\r\n            days.textContent = \"00\";\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./src/parts/timer.js?");

/***/ }),

/***/ "./src/parts/works.js":
/*!****************************!*\
  !*** ./src/parts/works.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function works(){\r\n    let works = document.querySelector(\".works\"),\r\n        imgPreview = works.querySelectorAll(\".row>div\"),\r\n        overlayWorks = document.createElement('div'),\r\n        bigImageWorks = document.createElement('div');\r\n\r\n        \r\n    overlayWorks.classList.add(\"overlayworks\");\r\n    overlayWorks.classList.add(\"animated\");\r\n    overlayWorks.classList.add(\"fadeIn\");\r\n\r\n    bigImageWorks.classList.add(\"bigImageWorks\");\r\n\r\n\r\n    imgPreview.forEach((item) =>{\r\n        item.querySelector(\"a\").addEventListener('click', (event) =>{\r\n            event.preventDefault();\r\n        });\r\n        item.querySelector(\"a\").lastChild.addEventListener('click', () =>{\r\n            document.body.appendChild(overlayWorks);\r\n            document.getElementsByTagName(\"html\")[0].style.overflow = \"hidden\";\r\n            \r\n            let url = item.querySelector(\"a\").getAttribute(\"href\");\r\n\r\n            overlayWorks.appendChild(bigImageWorks);\r\n            bigImageWorks.style.backgroundImage = `url(${url})`;\r\n\r\n            overlayWorks.addEventListener('click', function() {\r\n                overlayWorks.classList.add(\"fadeOut\");\r\n                setTimeout(() => {\r\n                    overlayWorks.classList.remove(\"fadeOut\");\r\n\r\n                    document.body.removeChild(document.body.lastChild);\r\n                    document.getElementsByTagName(\"html\")[0].style.overflow = \"\";\r\n                }, 1000);\r\n            });\r\n        });\r\n    });\r\n}\r\n\r\nmodule.exports = works;\n\n//# sourceURL=webpack:///./src/parts/works.js?");

/***/ })

/******/ });