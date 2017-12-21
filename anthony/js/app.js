console.log('working')

/*	What I need
*	
I need a variable to hold what is being calculated
I need screen to default to 0, show whatever button was clicked last
And then show the calculations
When each .num-button is clicked I need it to understand the number value and show it on the screen
*
*
*
*
*/

const calculator = {
	//What the value after a calculation is
	currentValue: 0,
	//The current expression waiting to be evaluated
	calcOrder: "",
	updateScreen() {
		$('.screen').text(calculator.calcOrder)
	},
	selectNumber(){
		let buttonValue = this;
		// console.log(buttonValue);
		let $buttonValue = $(buttonValue).text();
		console.log($buttonValue);
		calculator.calcOrder = calculator.calcOrder + $buttonValue
		calculator.updateScreen()
	},
	selectOperator(){
		let buttonValue = this;
		let $buttonValue = $(buttonValue).text();
		// console.log($buttonValue);
		calculator.calcOrder = calculator.calcOrder + $buttonValue;
		calculator.updateScreen()
	},
	calculate(){
		// calculator.calculate = 
		calculator.currentValue = eval(calculator.calcOrder)
		console.log(calculator.currentValue)
		$('.screen').text(calculator.currentValue)
	},
	clear() {
		calculator.currentValue = 0
		calculator.calcOrder = ""
		$('.screen').text(calculator.currentValue)
	}
}


//Create event listeners for buttons that prints the number buttons' value
$('.num-button').on('click',calculator.selectNumber)


//Create event listener for op buttons that prints the buttons' value
$(".ops .button").on('click',calculator.selectOperator)

// Event listener for equals button that calls the calculate function
$("#equals").on('click', calculator.calculate)

//Event listener for clear button that resets 
$(".clear").on('click', calculator.clear)



