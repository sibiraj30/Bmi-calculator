function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    const bmi = weight / (height * height);
    displayResult(bmi);
}

function displayResult(bmiValue) {
    let bmiCategory;

    if (bmiValue < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
        bmiCategory = 'Normal Weight';
    } else if (bmiValue >= 25 && bmiValue < 30) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `BMI: ${bmiValue.toFixed(2)} - ${bmiCategory}`;
}
