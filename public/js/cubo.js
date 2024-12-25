const sideCuboInput = document.getElementById("sideCubo");
const resultCuboDiv = document.getElementById("resultCubo");
const calculateCuboButton = document.getElementById("calculateButtonCubo");

// Agregar evento de clic al botón
calculateCuboButton.addEventListener("click", function () {
    // Obtener valor
    const side = parseFloat(sideCuboInput.value);

    // Validar el valor
    if (isNaN(side) || side <= 0) {
        resultCuboDiv.textContent =
            "Por favor, ingresa un valor válido para el lado del cubo.";
        return;
    }

    // Calcular el área
    const volumen = side * side * side;


    // Mostrar el resultado
    resultCuboDiv.textContent = `El volumen del cubo es: ${volumen} unidades³`;
});
