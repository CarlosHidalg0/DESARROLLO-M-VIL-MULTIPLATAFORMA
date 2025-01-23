"use strict";
var _a, _b, _c, _d;
// Capturar elementos del DOM
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const output = document.getElementById("output");
// Función para realizar cálculos
function calculate(operation) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (isNaN(num1) || isNaN(num2)) {
        output.textContent = "Por favor, ingresa ambos números.";
        return;
    }
    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "No se puede dividir entre 0.";
                output.textContent = result;
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Operación no válida";
    }
    output.textContent = result.toString();
}
// Asignar eventos a los botones
(_a = document.getElementById("add")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => calculate("+"));
(_b = document.getElementById("subtract")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => calculate("-"));
(_c = document.getElementById("multiply")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => calculate("*"));
(_d = document.getElementById("divide")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => calculate("/"));
