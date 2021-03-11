function darkBright(event) {
    if (event.target.classList.contains("btn-aspect-bright")) {
        /* Pasar todo a oscuro */
        document.getElementsByClassName("color-button-container-bright")[0].classList.replace("color-button-container-bright","color-button-container-dark");
        document.getElementsByClassName("color-comb1-bright")[0].classList.replace("color-comb1-bright","color-comb1-dark");
        document.getElementsByClassName("color-calculator-bright")[0].classList.replace("color-calculator-bright","color-calculator-dark");
        document.getElementsByClassName("btn-aspect-container-bright")[0].classList.replace("btn-aspect-container-bright","btn-aspect-container-dark");
        document.getElementsByClassName("btn-aspect-bright")[0].classList.replace("btn-aspect-bright","btn-aspect-dark");

    } else {
        /* pasar todo a claro */
        document.getElementsByClassName("color-button-container-dark")[0].classList.replace("color-button-container-dark","color-button-container-bright");

        document.getElementsByClassName("color-comb1-dark")[0].classList.replace("color-comb1-dark","color-comb1-bright"); 
        document.getElementsByClassName("color-calculator-dark")[0].classList.replace("color-calculator-dark","color-calculator-bright");
        document.getElementsByClassName("btn-aspect-container-dark")[0].classList.replace("btn-aspect-container-dark","btn-aspect-container-bright");
        document.getElementsByClassName("btn-aspect-dark")[0].classList.replace("btn-aspect-dark","btn-aspect-bright");
    }
}
const getFontSize = (textLength) => {
    const baseSize = 72;
    if (textLength >= baseSize) {
      textLength = baseSize + 0.5 ;
    }
    const fontSize = baseSize - textLength*2.8;
    return `${fontSize}px`;
  }
var stringScreen = "";
function numButtonFunction(event) {
    stringScreen += event.target.innerHTML;
    document.querySelector(".screen").innerHTML = stringScreen;
    document.getElementsByClassName("screen")[0].style.fontSize = getFontSize(document.getElementsByClassName("screen")[0].textContent.length);
}
var numbers = [];
var operations = [];
var row = 0;
function buttonOperation(event){
    if (stringScreen == ""){
        switch (event.target.innerHTML) {
            case "+":
                operations[row-1] = "+";
            break;
            case "-":
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
        switch (event.target.innerHTML) {
            case "+":
                numbers[row] = parseInt(stringScreen);
                operations[row] = "+";
            break;
            case "-":
                numbers[row] = parseInt(stringScreen);
                operations[row] = "-";
            break;
            case "x":
                numbers[row] = parseInt(stringScreen);
                operations[row] = "x";
            break;
            case "÷":
                numbers[row] = parseInt(stringScreen);
                operations[row] = "÷";
            break;
        }
        row += 1;
        stringScreen = "";
        document.querySelector(".screen").innerHTML = stringScreen;
    }
}
function buttonPlusMinus() {
    stringScreen = "-" + stringScreen;
    document.querySelector(".screen").innerHTML = stringScreen;
}
function buttonC(){
    numbers = [];
    operations = [];
    row = 0;
    stringScreen = "";
    document.querySelector(".screen").innerHTML = stringScreen;
}
function buttonPercentage(){
    let numberPercentage = parseInt(stringScreen);
    let Percentage = numberPercentage / 100;
    stringScreen = Percentage.toString();
    document.querySelector(".screen").innerHTML = stringScreen;
}
function buttonEqual () {
    /* TODO */
}

/* TODO punto no puede duplicarse */
