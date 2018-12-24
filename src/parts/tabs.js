function tabs() {
    let glazing = document.querySelector(".glazing"),
        glazingTabName = glazing.querySelectorAll(".glazing_block"),
        glazingLink = glazing.querySelectorAll("a"),
        glazingTabContent = glazing.querySelectorAll(".row");

    function addClasses(selector) {
        selector.forEach((item) => {
            item.classList.add("animated");
            item.classList.add("fadeIn");
        });
    }



    function hideGlazing(count) {
        for (let i = count; i < glazingTabContent.length; i++) {
            glazingTabContent[i].style.display = "none";
            glazingLink[i].classList.remove("active");
        }
    }

    function showGlazing(count) {
        glazingTabContent[count].style.display = "block";
        glazingLink[count].classList.add("active");
    }

    hideGlazing(1);

    glazingTabName.forEach((item, i) => {
        item.addEventListener('click', () => {
            hideGlazing(0);
            showGlazing(i);

        });
    });


    let decoration = document.querySelector(".decoration"),
        decorationTabContent = decoration.querySelectorAll(".decoration_content>.row>div"),
        decorationTabName = decoration.querySelectorAll(".decoration_item"),
        decorationLink = decoration.querySelectorAll("a");

    
    function hideDecoration(count) {
        for (let i = count; i < decorationTabContent.length; i++) {
            decorationTabContent[i].style.display = "none";
            decorationTabName[i].querySelector("div").classList.remove("after_click");
        }
    }

    function showDecoration(count) {
        decorationTabContent[count].style.display = "block";
        decorationTabName[count].querySelector("div").classList.add("after_click");
    }

    decorationLink.forEach((item, i) => {
        item.addEventListener('click', () => {
            hideDecoration(0);
            showDecoration(i);
        });
    });

    addClasses(glazingTabContent);
    addClasses(decorationTabContent);
}

module.exports = tabs;