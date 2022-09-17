/*
 
TODO:

1/ Build basic math operator functions (add, subtract, multiply, divide)
2. Create new function (operate) that takes an operator function and 2 numbers.
3. Basic html build for the calculator. Button for each digit, each of the basic math operators and an "Equals" key. Include a current value display and a "Clear" button.
4. Create function to populate display when number buttons are clicked. Store "display value" in a variable.
5. Create function that makes the calculator work!

EXTRA: Style calculator once completed to use stock images to look like an actual calculator. Refer to images within /reference-img folder 
*/

// Math operators
function opPlus(x, y) {
	return x + y;
}
function opSubtract(x, y) {
	return x - y;
}
function opMultiply(x, y) {
	return x * y;
}
function opDivide(x, y) {
	return x / y;
}

// Our operate function
function operate(x, y, op) {
	return op(x, y);
}
