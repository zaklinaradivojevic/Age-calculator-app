// Get form and output elements
const form = document.getElementById('ageCalculatorForm');
const yearsOutput = document.querySelector('.years-output');
const monthsOutput = document.querySelector('.months-output');
const daysOutput = document.querySelector('.days-output');

// Function to calculate age
function calculateAge(event) {
  event.preventDefault();

  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);

  // Check if the entered date is a valid date
  const enteredDate = new Date(year, month - 1, day);
  const isValidDate = enteredDate.getFullYear() === year && enteredDate.getMonth() === month - 1 && enteredDate.getDate() === day;

  if (isValidDate) {
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - enteredDate;

    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    // Display calculated age
    yearsOutput.textContent = years;
    monthsOutput.textContent = months;
    daysOutput.textContent = days;
  } else {
    // If the date is invalid, display placeholders or an error message
    yearsOutput.textContent = '--';
    monthsOutput.textContent = '--';
    daysOutput.textContent = '--';
    alert('Please enter a valid date.');
  }
}

// Event listener for form submission
form.addEventListener('submit', calculateAge);


