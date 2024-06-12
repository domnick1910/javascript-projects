const inputField = document.getElementById("input-field");

const btnSqrt = document.getElementById("btn-sqrt");
const btnPower = document.getElementById("btn-power");
const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnDivide = document.getElementById("btn-divide");
const btnMultiply = document.getElementById("btn-multiply");

const btnClearAll = document.getElementById("clear-all");
const btnClear = document.getElementById("clear");

const btnNumbers = document.querySelectorAll(".calculator-numbers");

btnNumbers.forEach(button => {
    button.addEventListener('click', ()=>{
        if (checkLength(inputField.innerText)) {
            inputField.innerText += button.innerText;
        }
    })
});

const checkLength = (args) => {
    return args.length < 10 ? true : false;
}