const numberButtons = document.querySelector("[data-number]");
const operationsButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

class Calculator {
    constructor(previousOperandTextElement, currentoperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentoperandTextElement = currentoperandTextElement;
    }
}
