// Capturar elementos del DOM
const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const output = document.getElementById("output") as HTMLParagraphElement;

// Función para realizar cálculos
function calculate(operation: string): void {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    output.textContent = "Por favor, ingresa ambos números.";
    return;
  }

  let result: number | string;

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
document.getElementById("add")?.addEventListener("click", () => calculate("+"));
document.getElementById("subtract")?.addEventListener("click", () => calculate("-"));
document.getElementById("multiply")?.addEventListener("click", () => calculate("*"));
document.getElementById("divide")?.addEventListener("click", () => calculate("/"));
