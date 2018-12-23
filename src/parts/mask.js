function mask() {
    let mask = document.querySelector("#mask");

    // mask.style.backgroundColor = "red";

    mask.focus();
    mask.selectionStart= mask.value.length;

    let numbers = [];

    function writeToInput(id, arr){
        let output = "+7 (";
        for (let i in arr) {
            if (i == 3) {
                output += ") " + arr[i];
                id.value = output;
                continue;
            }
            if (i == 6 || i == 8) {
                output += " - " + arr[i];
                id.value = output;
                continue;
            }
            output += arr[i];
            id.value = output;
        }
    }

    mask.addEventListener('keydown', (event) => {
        if (event.keyCode == 8 && numbers.length != 0) {
            event.preventDefault();
            numbers.pop();
            writeToInput(mask, numbers);
        } 
    });

    mask.addEventListener('keypress', (event) => {

        if (/\D/g.test(event.key)) event.preventDefault();
        else {
            if (numbers.length == 10) event.preventDefault();
            else {
                event.preventDefault();
                numbers.push(event.key);
                writeToInput(mask, numbers);
            }
        }
    });
}

module.exports = mask;