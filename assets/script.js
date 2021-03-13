/* FUNCTION TO CHANGE DARK AND BRIGHT MODE */
function darkBright(event) {
    if (event.target.classList.contains("btn-aspect-bright")) {
        /* TO BRIGHT */
        document.getElementsByClassName("color-button-container-bright")[0].classList.replace("color-button-container-bright","color-button-container-dark");
        document.getElementsByClassName("color-comb1-bright")[0].classList.replace("color-comb1-bright","color-comb1-dark");
        document.getElementsByClassName("color-calculator-bright")[0].classList.replace("color-calculator-bright","color-calculator-dark");
        document.getElementsByClassName("btn-aspect-container-bright")[0].classList.replace("btn-aspect-container-bright","btn-aspect-container-dark");
        document.getElementsByClassName("btn-aspect-bright")[0].classList.replace("btn-aspect-bright","btn-aspect-dark");
    } else {
        /* TO DARK */
        document.getElementsByClassName("color-button-container-dark")[0].classList.replace("color-button-container-dark","color-button-container-bright");
        document.getElementsByClassName("color-comb1-dark")[0].classList.replace("color-comb1-dark","color-comb1-bright");
        document.getElementsByClassName("color-calculator-dark")[0].classList.replace("color-calculator-dark","color-calculator-bright");
        document.getElementsByClassName("btn-aspect-container-dark")[0].classList.replace("btn-aspect-container-dark","btn-aspect-container-bright");
        document.getElementsByClassName("btn-aspect-dark")[0].classList.replace("btn-aspect-dark","btn-aspect-bright");
    }
}
/* FUNCTION FOR DYNAMIC SCREEN FONT SIZE */
const getFontSize = (textLength) => {
    const baseSize = 72;
    if (textLength >= baseSize) {
    textLength = baseSize + 0.5 ;
    }
    const fontSize = baseSize - textLength*2.8;
    return `${fontSize}px`;
}
/* Initialize variables */
var numbers = [];
var operations = [];
var row = 0;
var stringScreen = "";
var isTotal = false;
/* Function of number keys */
function numButtonFunction(event) {
    if (event.target.innerHTML == ".") {
        if (stringScreen.includes(".")) { /* Verify if point already exists */
            return;
        }
    }
    if (isTotal == true) { /* Was the equal pressed before? */
        stringScreen = "";
        document.querySelector(".screen").innerHTML = stringScreen;
        isTotal = false;
    }
    if (event.target.innerHTML == "." && stringScreen == "") {
        stringScreen = "0."; /* To avoid NaN when operating with . */
    } else {
        stringScreen += event.target.innerHTML;
    }
    document.querySelector(".screen").innerHTML = stringScreen;
    document.getElementsByClassName("screen")[0].style.fontSize = getFontSize(document.getElementsByClassName("screen")[0].textContent.length);/* Screen font size */
}
/* Function of operation keys */
function buttonOperation(event){
    if (stringScreen == ""||stringScreen == "-"){ /* Change operation when no number is pressed */
        if (row > 0){
            switch (event.target.innerHTML) {
                case "+":
                    operations[row-1] = "+";
                break;
                case "−":
                    operations[row-1] = "-";
                break;
                case "x":
                    operations[row-1] = "x";
                break;
                case "÷":
                    operations[row-1] = "÷";
                break;
            }
        }else{
            if(event.target.innerHTML == "−") {
                buttonPlusMinus();
            }
            return;
        }
    }else{
        switch (event.target.innerHTML) {
            case "+":
                operations[row] = "+";
            break;
            case "−": /* It isn't a mid bar, it is a minus symbol */
                operations[row] = "-"; /* This one is the normal symbol */
            break;
            case "x":
                operations[row] = "x";
            break;
            case "÷":
                operations[row] = "÷";
            break;
        }
        numbers[row] = parseFloat(stringScreen);
        console.log(numbers[row] +" "+ operations[row]);
        row += 1;
        stringScreen = "";
        document.querySelector(".screen").innerHTML = "0";
    }
}
/* Function for other buttons */
function buttonPlusMinus() {
    if (stringScreen.includes("-")) {
        stringScreen = stringScreen.slice(1);
        document.querySelector(".screen").innerHTML = stringScreen;
    } else {
        stringScreen = "-" + stringScreen;
        document.querySelector(".screen").innerHTML = stringScreen;
    }
}
function buttonC(){
    numbers = [];
    operations = [];
    row = 0;
    stringScreen = "";
    document.querySelector(".screen").innerHTML = "0";
    isTotal = false;
    document.getElementsByClassName("screen")[0].style.fontSize = "72px";
}
function buttonPercentage(){
    let numberPercentage = parseFloat(stringScreen);
    let Percentage = numberPercentage / 100;
    stringScreen = Percentage.toString();
    document.querySelector(".screen").innerHTML = stringScreen;
}
/* Button for equal-result */
function buttonEqual () {
    if (Number.isNaN(parseFloat(stringScreen))) {
        operations = operations.slice(0,operations.length-1);
        console.log(numbers[row-1]);
    } else {
        numbers[row] = parseFloat(stringScreen);
        console.log(numbers[row]);
    }
    let subtotal = numbers[0];
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case "+":
                subtotal = subtotal + numbers[i+1];
                break;
            case "-":
                subtotal = subtotal - numbers[i+1];
                break;
            case "÷":
                if (numbers[i + 1] == 0){
                    stringScreen = "";
                    document.querySelector(".screen").innerHTML = "ERROR";
                    numbers = [];
                    operations = [];
                    row = 0;
                    console.log('ERROR, unable to divide by 0');
                    return buttonEqual;
                } else {
                    subtotal = subtotal / numbers[i+1];
                }
                break;
            case "x":
                subtotal = subtotal * numbers[i+1];
                break;
        }
    }
    console.log('Result is: ' + subtotal);
    stringScreen = subtotal.toString();
    document.querySelector(".screen").innerHTML = stringScreen;
    document.getElementsByClassName("screen")[0].style.fontSize = getFontSize(document.getElementsByClassName("screen")[0].textContent.length);/* Screen font size */
    numbers = [];
    operations = [];
    row = 0;
    isTotal = true;
}
/* WINDOW FUNCTION BUTTONS */
function closeWindow () {
    window.close();
}