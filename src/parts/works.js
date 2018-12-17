function works(){
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
}

module.exports = works;