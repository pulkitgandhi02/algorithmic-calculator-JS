const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const toggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    handleInput(value);
  });
});

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  themeLabel.textContent = document.body.classList.contains('dark') ? 'Dark Mode' : 'Light Mode';
});

function handleInput(value) {
  if (value === 'AC') {
    currentInput = '';
    displayInput = '';
    updateDisplay('0');
    updateLivePreview(currentInput);
    return;
}


  if (value === 'C') {
    currentInput = '';
    updateDisplay('0');
    livePreview.textContent = '';
    return;
  }

  if (value === 'back') {
    currentInput = currentInput.slice(0, -1); // remove last character
    updateDisplay(currentInput || '0');       // show 0 if empty
    return;
  }
  
  
  if (value === '=') {
    try {
      const evaluated = eval(currentInput);
      currentInput = evaluated.toString();
      updateDisplay(currentInput);
      resultDisplayed = true;
    } catch {
      updateDisplay('Error');
      currentInput = '';
    }
    return;
  }

  if (value === '√') {
    try {
      const evaluated = Math.sqrt(eval(currentInput || '0'));
      currentInput = evaluated.toString();
      updateDisplay(currentInput);
      resultDisplayed = true;
    } catch {
      updateDisplay('Error');
      currentInput = '';
    }
    return;
  }
  
  if (resultDisplayed && '0123456789.'.includes(value)) {
    currentInput = value;
    resultDisplayed = false;
  } else {
    currentInput += value;
  }
  updateDisplay(currentInput);
}

function updateDisplay(text) {
  display.textContent = text;
}
