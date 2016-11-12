
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

	function newNumber () {
		var number = Math.floor((Math.random() * 100) + 1);
		return number;	
	}

	function newGame() {
		console.log("New Game button was pressed");
		number = newNumber();
		count = 0;
		$("#userGuess").val('');
		$("#count").html("0");
		$("#feedback").html("Make your Guess!");
		$("ul#guessList").empty();
	}

	function takeGuess(guess) {

		var absDiff = Math.abs(guess - number);
		var message = "";
		// var numberArray = [];


		if ((guess > 100) || (guess < 0) || (guess % 1 != 0)) {
			alert("Can't be text, and it must be a non-decimal number between 1 and 100");
			return;
		}
		else if (absDiff === 0) { message = "You got it right, brah!"; }
		else if (absDiff >  50) { message = "Ice cold"; }
		else if (absDiff >= 30 && absDiff <= 50) { message = "Cold"; }
		else if (absDiff >= 20 && absDiff <= 30) { message = "Warm"; }
		else if (absDiff >= 10 && absDiff <= 20) { message = "Hot"; }
		else if (absDiff >= 1  && absDiff <= 10) { message = "Super Hot!"; }
		else { message = "Probably didn't enter a number..."; }

			// document.getElementById("feedback").innerHTML = message;
			var output = `<li>${guess}</li>`;
			$("#feedback").html(message);
			$("#count").html(count + 1);
			$("ul#guessList").append(output);
			// numberArray.push(guess);

			console.log("random number = " + number + "        " + 
				"Your guess = " + $("#userGuess").val() + "        " + 
				"COUNT = " + (++count));
		}

		var number = newNumber();
		var count = parseInt($("#count").text());
		// var numberArray = [];

		$("#guessButton").click(function() {

			event.preventDefault();
			takeGuess($("#userGuess").val());
		});

		$(".new").click(function() {
			newGame();
			// console.log(numberArray);
		});
	});


