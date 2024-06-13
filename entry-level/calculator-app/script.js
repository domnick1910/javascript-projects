const inputField = document.getElementById("input-field");

const btnSqrt = document.getElementById("btn-sqrt");
const btnPower = document.getElementById("btn-power");
const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnDivide = document.getElementById("btn-divide");
const btnMultiply = document.getElementById("btn-multiply");
const btnResult = document.getElementById("btn-result");

const btnClearAll = document.getElementById("clear-all");
const btnClear = document.getElementById("clear");

const btnNumbers = document.querySelectorAll(".calculator-numbers");

let oldNumber = 0;
let currentNum = 0; // NIe je potrebne, cislo dostavam z elementu
let operation = '';
let result = 0;

btnNumbers.forEach(button => {
    button.addEventListener('click', ()=>{
        if (checkLength(inputField.innerText)) {
            inputField.innerText += button.innerText;
        }
    })
});

btnPlus.addEventListener("click", ()=>{
    oldNumber = inputField.innerText;
    operation = '+';
    clearInput();
});

btnResult.addEventListener("click", ()=>{
    let resultNumber
    debugger
    if (oldNumber != '' && operation != '' && inputField.innerText != '') {
        switch(operation) {
            case '+' : resultNumber = parseInt(inputField.innerText) + parseInt(oldNumber);
                break;
        }

        inputField.innerText = resultNumber;
    }
});
//vytvorit retazec 

btnClearAll.addEventListener("click", ()=>{
    clearInput();
});

const checkLength = (args) => {
    return args.length < 10 ? true : false;
};

const addNumberToCount = (args) => {
    
};

const clearInput = () => {
    inputField.innerText = '';
};

const resultTotal = () => {
    if (inputField.innerText != '') {
        
    }
};

const pomCount = () => {

};