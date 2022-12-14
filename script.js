/*
 
TODO:

1/ Build basic math operator functions (add, subtract, multiply, divide)
2/ Create new function (operate) that takes an operator function and 2 numbers.
3/ Basic html build for the calculator. Button for each digit, each of the basic math operators and an "Equals" key. Include a current value display and a "Clear" button.
4/ Create function to populate display when number buttons are clicked. Store "display value" in a variable.
5. Create function that makes the calculator work!

EXTRA: Style calculator once completed to use stock images to look like an actual calculator. Refer to images within /reference-img folder 
*/

const display = document.getElementById('display'),
	digitButtons = document.querySelectorAll('.digit'),
	operatorButtons = document.querySelectorAll('.operator');

let curDisplay = '',
	storedDisplay = '',
	curOperator = '';

// Math operators
function opPlus(x, y) {
	return x + y;
}
function opMinus(x, y) {
	return x - y;
}
function opMultiply(x, y) {
	return x * y;
}
function opDivide(x, y) {
	return x / y;
}

// Operate
function operate(x, y, op) {
	x = +x;
	y = +y;
	console.log(`Stored value: ${x}, Current value: ${y}, Operator: ${op}`);
	switch (op) {
		case '+':
			return opPlus(x, y);
		case '-':
			return opMinus(x, y);
		case '*':
			return opMultiply(x, y);
		case '/':
			return opDivide(x, y);
		default:
			return null;
	}
}

// Operator conversion
function operatorConversion(operator) {
	if (operator === 'plus') return '+';
	if (operator === 'minus') return '-';
	if (operator === 'multiply') return '*';
	if (operator === 'divide') return '/';
}

// Append number to display
function appendNumber(num) {
	if (display.textContent === '0') display.textContent = '';
	curDisplay += num;
	display.textContent += num;
}
// Clear display
function clearDisplay() {
	curDisplay = '';
	display.textContent = '0';
}
// Reset memory
function resetMemory() {
	curDisplay = '';
	storedDisplay = '';
}

// When an operator is selected, set it as active, store current display and reset for next entry
function setOperator(operator) {
	if (curOperator !== null) evaluateResult();
	// curDisplay = display.textContent;
	storedDisplay = curDisplay;
	curOperator = operatorConversion(operator);
	console.log(curOperator);
	clearDisplay();
}

// Evaluate and output result
function evaluateResult() {
	if (curOperator == '/' && curDisplay.textContent == '0') {
		return alert(`I'm sorry, you can't divide by 0!`);
	}
	display.textContent = operate(storedDisplay, curDisplay, curOperator);
	storedDisplay = display.textContent;
	// curOperator = '';
	console.log(`New stored value: ${storedDisplay}`);
}

// Event listeners
digitButtons.forEach((button) => {
	button.addEventListener('click', () => {
		appendNumber(button.textContent);
		console.log(`Current display value: ${curDisplay}`);
	});
});
operatorButtons.forEach((button) => {
	button.addEventListener('click', () => {
		if (button.id == 'clear') {
			clearDisplay();
			console.log('Display cleared!');
			return;
		}
		if (button.id == 'reset') {
			clearDisplay();
			display.textContent = '0';
			resetMemory();
			console.log('Memory cleared!');
			return;
		}
		if (button.id == 'equals') {
			evaluateResult();
			return;
		}
		setOperator(button.id);
	});
});
