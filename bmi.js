document.getElementById('bmiForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(height) || isNaN(weight)) {
    document.getElementById('result').textContent = "Please enter valid numbers.";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);
  let status = "";

  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 25) status = "Healthy";
  else if (bmi < 30) status = "Overweight";
  else status = "Obese";

  document.getElementById('result').textContent = `Your BMI is ${bmi} (${status})`;
});









