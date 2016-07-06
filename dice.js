var result;

var game = {};

game.timestamp = {
    element: document.getElementById('timestamp'),
    start: new Date()
};

game.timestamp.element.innerHTML = 'Game started on ' + game.timestamp.start;

game.allRounds = [];

game.dice1 = document.getElementById('dice1');
game.dice2 = document.getElementById('dice2');

game.roll = function roll() {
    var dice1 = Math.ceil((Math.random())*6);
    var dice2 = Math.ceil((Math.random())*6);

    game.dice1.innerHTML = dice1;
    game.dice2.innerHTML = dice2;

    var round = {
        start: new Date(),
        rollNum: game.allRounds.length + 1
    };

    game.allRounds.push(round);

    if ( ((dice1 + dice2) === 7) || ((dice1 + dice2) === 11) ) {
        document.getElementById('result').innerHTML = 'Winner!';
        var finish = new Date();
        var time = Math.round((finish.getTime() - game.timestamp.start.getTime())/1000);
        document.getElementById('attempt').innerHTML =
            '(It took you ' + (game.allRounds.length) + ' attempt(s) and ' + time + ' seconds)';
    } else {
        document.getElementById('result').innerHTML = 'Try Again';
    }
    console.log(game.allRounds);
};


document.getElementById('rollDice')
    .addEventListener('click', game.roll);
