// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '0';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (button.id === 'clear') {
                currentInput = '0';
                operator = '';
                previousInput = '';
                updateDisplay();
                return;
            }

            if (button.id === 'equal') {
                if (previousInput !== '' && operator !== '' && currentInput !== '') {
                    currentInput = operate(previousInput, currentInput, operator).toString();
                    operator = '';
                    previousInput = '';
                    updateDisplay();
                }
                return;
            }

            if (button.classList.contains('operator')) {
                if (operator !== '' && currentInput !== '') {
                    previousInput = operate(previousInput, currentInput, operator).toString();
                    currentInput = '0';
                } else {
                    previousInput = currentInput;
                }
                operator = value;
                currentInput = '0';
                return;
            }

            if (currentInput === '0') {
                currentInput = value;
            } else {
                currentInput += value;
            }

            updateDisplay();
        });
    });

    function updateDisplay() {
        display.innerText = currentInput;
    }

    function operate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return b;
        }
    }
});
