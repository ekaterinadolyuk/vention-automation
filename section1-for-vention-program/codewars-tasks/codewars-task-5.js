//Rock Paper Scissors!
/*Rules of the "Rock, Paper, Scissors" game are:
- Rock beats Scissors,
- Scissors beat Paper,
- Paper beats Rock,
- Two identical moves are a draw.
Let's play! You will be given valid moves of two Rock, Paper, Scissors players, and have to return which player won:
 "Player 1 won!" for player 1, and "Player 2 won!" for player 2. In case of a draw return Draw!.*/

 // 1st approach
const rps = (p1, p2) => {
  let result;
  if (p1 === 'rock' && p2 === 'scissors') {
    result = 'Player 1 won!'
  } else if (p1 === 'scissors' && p2 === 'paper') {
    result = 'Player 1 won!'
  } else if (p1 === 'paper' && p2 === 'rock') {
    result = 'Player 1 won!'
  } else if (p1 === 'scissors' && p2 === 'rock') {
    result = 'Player 2 won!'
  } else if (p1 === 'paper' && p2 === 'scissors') {
    result = 'Player 2 won!'
  } else if (p1 === 'rock' && p2 === 'paper') {
    result = 'Player 2 won!'
  } else if (p1 === p2 ) {
    result = 'Draw!'
  } 
  return result
};

let finalResult = rps('rock', 'scissors')
console.log(finalResult)

//2nd approach
const rps2 = (p1, p2) => {
  const beats = { 
    rock: 'scissors', 
    scissors: 'paper', 
    paper: 'rock' 
};
  if (p1 === p2) {
    return 'Draw!'
  }
  return beats[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!';
};

let secondFinalResult = rps2('rock', 'scissors')
console.log(secondFinalResult)