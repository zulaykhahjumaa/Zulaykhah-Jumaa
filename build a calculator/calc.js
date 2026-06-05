const display = document.getElementById("display");

let firstNumber = null;
let currentOperator = null;


// PURE FUNCTIONS


const add = (a,b) => a + b;


const subtract = (a,b) => a - b;


const multiply = (a,b) => a * b;


const divide = (a,b) => {
    if (b === 0){
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};


const squareRoot = (n) => {
    if (n < 0){
        throw new Error(
            "Cannot find square root of a negative number"
        );
    }
    return Math.sqrt(n);
};


const power = (a,b) => Math.pow(a,b);


const factorial = (n) => {

    if(n < 0){
        throw new Error(
            "Factorial not defined for negative numbers"
        );
    }

    let result = 1;

    for(let i = 2; i <= n; i++){
        result *= i;
    }

    return result;
};


// HIGHER-ORDER FUNCTION


const calculator = (operation) => {
    return (...args) => operation(...args);
};


// UI FUNCTIONS


function appendValue(value){
    display.value += value;
}


function clearDisplay(){
    display.value = "";
    firstNumber = null;
    currentOperator = null;
}


function setOperator(operator){

    firstNumber = parseFloat(display.value);

    currentOperator = operator;

    display.value = "";
}


function calculate(){

    try{

        const secondNumber =
            parseFloat(display.value);

        let result;

        switch(currentOperator){

            case "+":
                result = calculator(add)(
                    firstNumber,
                    secondNumber
                );
                break;

            case "-":
                result = calculator(subtract)(
                    firstNumber,
                    secondNumber
                );
                break;

            case "*":
                result = calculator(multiply)(
                    firstNumber,
                    secondNumber
                );
                break;

            case "/":
                result = calculator(divide)(
                    firstNumber,
                    secondNumber
                );
                break;
        }

        display.value = result;

    }catch(error){
        display.value = error.message;
    }
}


function calculateSqrt(){

    try{

        const number =
            parseFloat(display.value);

        display.value =
            calculator(squareRoot)(number);

    }catch(error){

        display.value =
            error.message;
    }
}


function calculatePower(){

    const base =
        parseFloat(display.value);

    const exponent =
        Number(prompt("Enter exponent"));

    display.value =
        calculator(power)(
            base,
            exponent
        );
}


function calculateFactorial(){

    try{

        const number =
            parseInt(display.value);

        display.value =
            calculator(factorial)(number);

    }catch(error){

        display.value =
            error.message;
    }
}