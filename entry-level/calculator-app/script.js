const inputField = document.getElementById("input-field");

const btnSqrt = document.getElementById("btn-sqrt");
const btnPower = document.getElementById("btn-power");
const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnDivide = document.getElementById("btn-divide");
const btnMultiply = document.getElementById("btn-multiply");

const btnClearAll = document.getElementById("clear-all");
const btnClear = document.getElementById("clear");

const btnNumber9 = document.getElementById("btn-number-9");
const btnNumber8 = document.getElementById("btn-number-8");
const btnNumber7 = document.getElementById("btn-number-7");
const btnNumber6 = document.getElementById("btn-number-6");
const btnNumber5 = document.getElementById("btn-number-5");
const btnNumber4 = document.getElementById("btn-number-4");
const btnNumber3 = document.getElementById("btn-number-3");
const btnNumber2 = document.getElementById("btn-number-2");
const btnNumber1 = document.getElementById("btn-number-1");
const btnNumber0 = document.getElementById("btn-number-0");

btnNumber0.addEventListener("click", ()=>{
    if (checkLength(inputField.innerText)) {
        inputField.innerText += '0'
    }
    
});

btnNumber1.addEventListener("click", ()=>{
    if (checkLength(inputField.innerText)) {
        inputField.innerText += '1'
    }

});

btnNumber2.addEventListener("click", ()=>{
    if (checkLength(inputField.innerText)) {
        inputField.innerText += '2'
    }
});

btnNumber3.addEventListener("click", ()=>{
    if (checkLength(inputField.innerText)) {
        inputField.innerText += '3'
    }
});

btnNumber4.addEventListener("click", ()=>{
    if (checkLength(inputField.innerText)) {
        inputField.innerText += '4'
    }
});

btnNumber5.addEventListener("click", ()=>{
    if (checkLength(inputField.innerText)) {
        inputField.innerText += '5'
    }
});

btnNumber6.addEventListener("click", ()=>{
    if (checkLength(inputField.innerText)) {
        inputField.innerText += '6'
    }
});

btnNumber7.addEventListener("click", ()=>{
    if (checkLength(inputField.innerText)) {
        inputField.innerText += '7'
    }
});

btnNumber8.addEventListener("click", ()=>{
    if (checkLength(inputField.innerText)) {
        inputField.innerText += '8'
    }
});

btnNumber9.addEventListener("click", ()=>{
    if (checkLength(inputField.innerText)) {
        inputField.innerText += '9'
    }
});

btnClear.addEventListener("click", ()=>{
     inputField.innerText = inputField.innerText.subString(1);
});

const checkLength = (args) => {
    return args.length < 10 ? true : false;
}
