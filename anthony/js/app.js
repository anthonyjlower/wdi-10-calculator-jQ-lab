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


//Create event listeners for buttons that prints the number buttons' value

$('.num-button').on('click',(e)=>{
	let buttonValue = e.currentTarget
	let $buttonValue = $(buttonValue).text()
	let numValue = parseInt($buttonValue, 10)
	console.log(numValue)
})

//Create event listener for op buttons that prints the buttons' value

$(".ops .button").on('click', (e)=>{
	let buttonValue = e.currentTarget;
	let $buttonValue = $(buttonValue).text()
	console.log($buttonValue)
})


// Create a variable that holds the value to be displayed in the screen and updates when buttons are clicked

let $displayedNum = $('.screen')


function updateScreen() {
	$displayedNum
}


