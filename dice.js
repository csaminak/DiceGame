var result;

var game = {};

game.timestamp = {
    element: document.getElementById('timestamp'),
    now: new Date()
};

game.timestamp.element.innerHTML = 'Game started ' + game.timestamp.now;

game.rounds = [];

game.dice1 = document.getElementById('dice1');
game.dice2 = document.getElementById('dice2');

function roll(event) {
    game.dice1.innerHTML = Math.ceil((Math.random())*6); // TODO create function dry
    game.dice2.innerHTML = Math.ceil((Math.random())*6);
    if ( ((Number(game.dice1.innerHTML) + Number(game.dice2.innerHTML)) === 7) ||
         ((Number(game.dice1.innerHTML) + Number(game.dice2.innerHTML)) === 11) ) {
        document.getElementById('result').innerHTML = 'Winner!';
        // document.getElementById('attempt').innerHTML = '(It took you ' + game.rounds.length + ' and ' + time + ' seconds)';
    } else {
        document.getElementById('result').innerHTML = 'Try Again';
    }
};
 roll(event);
// game.getElementById('RollDice').addEventListener('click', roll(event));
