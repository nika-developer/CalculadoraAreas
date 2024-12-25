const radioCilindroInput = document.getElementById("radioCilindro");
const heightCilindroInput = document.getElementById("heightCilindro");
const resultDivCilindro = document.getElementById("resultCilindro");
const calculateCilindroButton = document.getElementById("calculateButtonCilindro");

// Agregar evento de clic al botón
calculateCilindroButton.addEventListener("click", function () {
    // Obtener valores
    const radio = parseFloat(radioCilindroInput.value);
    const height = parseFloat(heightCilindroInput.value);

    // Validar los valores
    if (isNaN(radio) || isNaN(height) || radio <= 0 || height <= 0) {
        resultDivCilindro.textContent =
            "Por favor,ingresa valores válidos para el radio y la altura.";
        return;
    }

    // Calcular el área
    const volumen = Math.PI * radio * radio * height;

    // Mostrar el resultado
    resultDivCilindro.textContent = `El volumen del cilindro es: ${volumen.toFixed(1)} unidades³`;
});
