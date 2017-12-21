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
	buttonValue = e.currentTarget
	$buttonValue = ($(buttonValue).text())
	numValue = parseInt($buttonValue, 10)
	console.log(numValue)
})




