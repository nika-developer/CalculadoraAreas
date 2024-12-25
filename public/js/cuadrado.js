
const sideInput = document.getElementById("sideCuadrado");
const resultDiv = document.getElementById("resultCuadrado");
const calculateButton = document.getElementById("calculateButtonCuadrado");

// Agregar evento de clic al botón
calculateButton.addEventListener("click", function () {
    // Obtener valor
    const side = parseFloat(sideInput.value);

    // Validar el valor
    if (isNaN(side) || side <= 0) {
        resultDiv.textContent =
            "Por favor, ingresa un valor válido para el lado del cuadrado.";
        return;
    }

    // Calcular el área
    const area = side * side;

    // Calcular el área
    const perimetro = side * 4;

    // Mostrar el resultado
    resultDiv.textContent = `El área del cuadrado es: ${area} unidades² y el périmetro es: ${perimetro} unidades²`;
});
