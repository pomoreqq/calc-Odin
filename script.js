const numButtons = document.querySelectorAll('.num')
const clearButton = document.querySelector('.clear')
const display = document.querySelector('.display')
const operatorButton = document.querySelectorAll('.op')
const equalButton = document.querySelector('.equals')
const backSpaceButton = document.querySelector('.backspace')

let firstNumber = '';
let operator  = '';
let secondNumber = '';
let result  = ''
let isNewOperation = false

numButtons.forEach(button => {
    button.addEventListener('click', e => {
        const value = e.target.textContent
        if (isNewOperation) {
            firstNumber = ''
            secondNumber = ''
            operator = ''
            isNewOperation = false
        }

        if(operator === '') {
            if ( value === '.' && firstNumber.includes('')) return 
            firstNumber += e.target.textContent
            display.textContent = firstNumber
            
        } else {
            if ( value === '.' && firstNumber.includes('')) return
            secondNumber += e.target.textContent
            display.textContent = secondNumber 
        }
    })
})


operatorButton.forEach(op => {
    op.addEventListener('click', e => {
       if (firstNumber && secondNumber && operator) {
        performCalculation()
       }

       if(result) {
        firstNumber = result
        result = ''
       }
       operator = e.target.textContent
    })
        
})

backSpaceButton.addEventListener('click', () => {
    if (operator === '' && firstNumber) {
        firstNumber = firstNumber.slice(0, -1);
        display.textContent = firstNumber || '0';
    } else if (secondNumber) {
        secondNumber = secondNumber.slice(0, -1);
        display.textContent = secondNumber || '0';
    }
})

clearButton.addEventListener('click', () => {
    firstNumber='';
    display.textContent = ''
    operator =''
    secondNumber = ''
    result = ''
   
})
equalButton.addEventListener('click', () => {
   if(firstNumber && secondNumber && operator) {
    performCalculation()
   } else {
    alert('uzupelnij dwie liczby oraz wybierz operator')
   }
    
})


function performCalculation() {
    const resultOperation = operate(operator,firstNumber,secondNumber)
    result = parseFloat(resultOperation.toFixed(10).toString())
    display.textContent = result;

    firstNumber = result;
    secondNumber = '';
    operator = '';
    isNewOperation = true;
}

function add (a,b) {
   
    return parseFloat(a) + parseFloat(b);
}

function substract (a,b) {
    return parseFloat(a) - parseFloat(b)
}


function multiply (a,b) {
    return parseFloat(a)*parseFloat(b)
}

function divide (a,b) {
    if (b ==0) {
        return 'u cant divie by 0'
    } else {
        return parseFloat(a)/ parseFloat(b)
    }
}


function operate(operator,firstNumber,secondNumber) {
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

