var secretNumber = parseInt(Math.random() * 11);
var attempt = 3;
function Guess() {
  var resultElement = document.getElementById("result");
  var attemptElement = document.getElementById("attempt");
  var guessedNumber = parseInt(document.getElementById("value").value);
  // console.log(guessedNumber);
  if (guessedNumber == secretNumber) {
    resultElement.innerHTML = "You got it! Go play lotto now!";
    attempt = 0;
    document.getElementById("button").disabled = true;
    attemptElement.innerHTML = "Remaining attemps " + attempt;
  } else if (guessedNumber > 10 || guessedNumber < 0) {
    resultElement.innerHTML = "You must type a number between 0 & 10";
  } else {
    if (guessedNumber > secretNumber) {
      resultElement.innerHTML =
        "You missed!! Try a lower Nº! Better luck next time!";
    } else {
      resultElement.innerHTML =
        "You missed!! Try a Higher Nº! Better luck next time!";
    }
    attempt--;
    attemptElement.innerHTML = "Remaining attempts " + attempt;

    if (attempt == 0) {
      document.getElementById("button").disabled = true;
      attemptElement.innerHTML =
        "Remaining attempts: " +
        attempt +
        "The secret number was: " +
        secretNumber;
    }
  }
}

//add limiter number of chances
//add hint "you missed, the number is > or <
