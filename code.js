var playerOneName = prompt('Player 1, please enter your name.');
while (isNaN(playerOneName) == false) {
	playerOneName = prompt('Player 1, please enter your name, no numbers!');
}
var playerTwoName = prompt('Player 2, please enter your name.');
while (isNaN(playerTwoName) == false) {
	playerTwoName = prompt('Player 2, please enter your name, no numbers!');
}
var playerOnePoints = 501;
var playerTwoPoints = 501;
var roundNum = 0;
var playerInputNum;

function Test() {

  while (roundNum < 20) {

    if (playerOnePoints > 1) {
      playerInputNum = prompt(playerOneName + ', please input a value between 0 and 180');
	  while(isNaN(playerInputNum) == true) {
		alert(playerOneName + ' has entered a value other than a number.');
		playerInputNum = prompt(playerOneName + ', please input a value between 0 and 180');
		}
		
      while (playerInputNum > 180 || playerInputNum < 0) {
        alert(playerOneName + ' has entered an invalid value! Enter a number between 0 and 180');
        playerInputNum = prompt(playerOneName + ', please input a value between 0 and 180');
      }
	  

	  
	  while ((playerOnePoints-playerInputNum) === 0 && (playerInputNum % 2) != 0) {
        alert('To reach zero, you must enter a multiple of 2');
		playerInputNum = prompt(playerOneName + ', please input a value between 0 and 180');
      }
	 playerOnePoints -= playerInputNum;
    } 
	else if(playerOnePoints == 1) {
      alert(playerOneName + ', you now have 1 point. Please wait for the other player to finish.');
    }

	
    if (playerTwoPoints > 1) {
      playerInputNum = prompt(playerTwoName + ', please input a value between 0 and 180');
	  while(isNaN(playerInputNum) == true) {
		alert(playerTwoName + ' has entered a value other than a number.');
		playerInputNum = prompt(playerTwoName + ', please input a value between 0 and 180');
	  }
      while (playerInputNum > 180 || playerInputNum < 0) {
        alert(playerTwoName + ' has entered an invalid value! Enter a number between 0 and 180');
        playerInputNum = prompt(playerTwoName + ' please input a value between 0 and 180');
      }
       while ((playerTwoPoints-playerInputNum) === 0 && (playerInputNum % 2) != 0) {
        alert('To reach zero, you must enter a multiple of 2');
		playerInputNum = prompt(playerTwoName + ' please input a value between 0 and 180');
      }
	  playerTwoPoints -= playerInputNum;
	  
    } 
	else if(playerTwoPoints == 1) {
      alert(playerTwoName + ', you now have 1 point. Please wait for the other player to finish.');
    }


    if (playerOnePoints === 1 && playerTwoPoints === 1) {
      break;
    }
	if (playerOnePoints == 0 || playerTwoPoints == 0){
		break;
	}
	
    roundNum++;
    alert('End of round: ' + roundNum + '. '
      + playerOneName + ' has ' + playerOnePoints + '. '
      + playerTwoName + ' has ' + playerTwoPoints + '. ');
  }
  var winner = Math.min(playerOnePoints, playerTwoPoints);
  if (playerOnePoints === playerTwoPoints) {
    alert('It is  a tie!');
  } else if (winner === playerOnePoints) {
    alert(playerOneName + ' is the winner! with ' + playerOnePoints + ' points!');
  } else {
    alert(playerTwoName + ' is the winner! with ' + playerTwoPoints + ' points!');
  }

}	
