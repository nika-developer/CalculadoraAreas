const baseTrianguloInput = document.getElementById("baseTriangulo");
const heightTrianguloInput = document.getElementById("heightTriangulo");
const resultDivTriangulo = document.getElementById("resultTriangulo");
const calculateTrianguloButton = document.getElementById("calculateButtonTriangulo");

// Agregar evento de clic al botón
calculateTrianguloButton.addEventListener("click", function () {
    // Obtener valores
    const base = parseFloat(baseTrianguloInput.value);
    const height = parseFloat(heightTrianguloInput.value);

    // Validar los valores
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        resultDivTriangulo.textContent =
            "Por favor,ingresa valores válidos para la base y la altura.";
        return;
    }

    // Calcular el área
    const area = (base * height) / 2;

    // Mostrar el resultado
    resultDivTriangulo.textContent = `El área del triángulo es: ${area} unidades²`;
});
