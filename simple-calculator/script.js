let currentNumber = "";
let previousNumber = "";
let operator = "";

const display = document.getElementById("display");

function addNumber(number) {
    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    currentNumber += number;

    if (operator !== "") {
        display.value = previousNumber + " " + operatorSymbol(operator) + " " + currentNumber;
    } else {
        display.value = currentNumber || "0";
    }
}

function chooseOperator(op) {
    if (currentNumber === "") {
        return;
    }

    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;

    display.value = previousNumber + " " + operatorSymbol(operator);
}

function operatorSymbol(op) {
    if (op === "*") return "×";
    if (op === "/") return "÷";
    if (op === "-") return "−";
    return "+";
}

function calculate() {
    if (previousNumber === "" || currentNumber === "" || operator === "") {
        return;
    }

    const first = parseFloat(previousNumber);
    const second = parseFloat(currentNumber);
    let result;

    if (operator === "+") {
        result = first + second;
    } else if (operator === "-") {
        result = first - second;
    } else if (operator === "*") {
        result = first * second;
    } else if (operator === "/") {
        if (second === 0) {
            display.value = "Error";
            clearValues();
            return;
        }
        result = first / second;
    }

    result = Number(result.toFixed(10));

    display.value = result;

    currentNumber = String(result);
    previousNumber = "";
    operator = "";
}

function clearDisplay() {
    clearValues();
    display.value = "0";
}

function clearValues() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
}

function deleteNumber() {
    currentNumber = currentNumber.slice(0, -1);

    if (operator !== "") {
        display.value =
            previousNumber + " " +
            operatorSymbol(operator) + " " +
            currentNumber;
    } else {
        display.value = currentNumber || "0";
    }
}

function percentage() {
    if (currentNumber !== "") {
        currentNumber = String(parseFloat(currentNumber) / 100);

        if (operator !== "") {
            display.value =
                previousNumber + " " +
                operatorSymbol(operator) + " " +
                currentNumber;
        } else {
            display.value = currentNumber;
        }
    }
}