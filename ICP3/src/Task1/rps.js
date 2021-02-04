var pScore, cScore;
function play(playerChoice) {
    pScore = parseInt(document.getElementById('playerScore').innerHTML);
    cScore = parseInt(document.getElementById('computerScore').innerHTML);
    //computer randomly chooses rock or paper or scissor
    var randomNo = Math.random();
    var computerChoice;
    if(randomNo < 0.3) {
        computerChoice = 'rock';
    } else if (randomNo < 0.6) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    document.getElementById('playerChoice').innerHTML = playerChoice;
    document.getElementById('computerChoice').innerHTML = computerChoice;
    decide(playerChoice, computerChoice);
}

function decide(player, computer) {
    var des;
    if(player === computer) { //It is a tie if the choices of player and computer are same
        des = 'Tie';
    } else {
        if(player === 'rock') {
            if(computer === 'paper') {
               cScore++;
               des = 'Computer Wins'
            } else {
                pScore++;
                des = 'Player Wins';
            }
        } else if(player === 'paper') {
            if(computer === 'scissors') {
                cScore++;
                des = 'Computer Wins'
            } else {
                pScore++;
                des = 'Player Wins';
            }
        } else { 
            if(computer === 'rock') {
                cScore++;
                des = 'Computer Wins'
             } else {
                pScore++;
                des = 'Player Wins';
            }
        }
    }
    // Assigns the scores of player and computer in the html page
    document.getElementById('playerScore').innerHTML = pScore;
    document.getElementById('computerScore').innerHTML = cScore;
    //Displays who wins the game
    document.getElementById('result').innerHTML = des;
}