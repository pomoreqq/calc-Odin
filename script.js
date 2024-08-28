const numButtons = document.querySelectorAll('.num')
const clearButton = document.querySelector('.clear')
const display = document.querySelector('.display')
const operatorButton = document.querySelectorAll('.op')
const equalButton = document.querySelector('.equals')


let firstNumber = '';
let operator  = '';
let secondNumber = '';



numButtons.forEach(button => {
    button.addEventListener('click', e => {
        if(operator === '') {
            firstNumber += e.target.textContent
            console.log(firstNumber)
        } else {
            secondNumber += e.target.textContent
            console.log(secondNumber)
        }
    })
})


operatorButton.forEach(op => {
    op.addEventListener('click', e => {
        operator = e.target.textContent
        console.log(operator)
    })
})
function add (a,b) {
    return a + b
}

function substract (a,b) {
    return a - b
}


function multiply (a,b) {
    return a*b
}

function divide (a,b) {
    if (b ==0) {
        return 'u cant divie by 0'
    } else {
        return a / b
    }
}


function operate(operator) {
    let result;
    switch (operator) {
        case '+': {
           result = add(firstNumber,secondNumber);
            break;
        }
        case '-': {
           result = substract(firstNumber,secondNumber)
            break;
        }
        case '*': {
           result = multiply(firstNumber,secondNumber)
            break;
        }
        case '/':
           result = divide(firstNumber,secondNumber)
            break;
    }
    return result
}

