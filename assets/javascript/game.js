var targetNum = Math.floor(Math.random() * 102) + 19;
var userScore = 0;
var wins = 0;
var losses = 0;
var crystal1 = $('#crystal-1');
var crystal2 = $('#crystal-2');
var crystal3 = $('#crystal-3');
var crystal4 = $('#crystal-4');
var crystalsAll = $('.crystal');
var crystalVal1 = Math.floor(Math.random() * 12) + 1;
var crystalVal2 = Math.floor(Math.random() * 12) + 1;
var crystalVal3 = Math.floor(Math.random() * 12) + 1;
var crystalVal4 = Math.floor(Math.random() * 12) + 1;
console.log(crystalVal1);
console.log(crystalVal2);
console.log(crystalVal3);
console.log(crystalVal4);
function reset() {
    userScore = 0;
    targetNum = Math.floor(Math.random() * 102) + 19;
    $('#score').text(userScore);
    $('#target').text(targetNum);
}

crystal1.on('click', function () {
    userScore += crystalVal1;
});

crystal2.on('click', function () {
    userScore += crystalVal2;
});

crystal3.on('click', function () {
    userScore += crystalVal3;
});

crystal4.on('click', function () {
    userScore += crystalVal4;
});

crystalsAll.on('click', function () {
    $('#score').text(userScore);
    if (userScore === targetNum) {
        console.log('win');
        $('#result').text('WINNER!!!');
        $('#result').append('<button id="reset"> Try Again? </button>');
        $('#reset').on('click', function () {
            userScore = 0;
            targetNum = Math.floor(Math.random() * 102) + 19;
            crystalVal1 = Math.floor(Math.random() * 12) + 1;
            crystalVal2 = Math.floor(Math.random() * 12) + 1;
            crystalVal3 = Math.floor(Math.random() * 12) + 1;
            crystalVal4 = Math.floor(Math.random() * 12) + 1;
            wins =+ 1;
            $('wins').text(wins)
            $('#score').text(userScore);
            $('#target').text(targetNum);
            $('#result').empty();
            console.log(crystalVal1);
            console.log(crystalVal2);
            console.log(crystalVal3);
            console.log(crystalVal4);
            

        });
    };

    if (userScore > targetNum) {
        console.log('lose')
        $('#result').text('YOU LOSE!!!');
        $('#result').append('<button id="reset"> Try Again? </button>')
        $('#reset').on('click', function () {
            userScore = 0;
            targetNum = Math.floor(Math.random() * 102) + 19;
            crystalVal1 = Math.floor(Math.random() * 12) + 1;
            crystalVal2 = Math.floor(Math.random() * 12) + 1;
            crystalVal3 = Math.floor(Math.random() * 12) + 1;
            crystalVal4 = Math.floor(Math.random() * 12) + 1;
            losses =+ 1;
            $('losses').text(losses)
            $('#score').text(userScore);
            $('#target').text(targetNum);
            $('#result').empty();
            console.log(crystalVal1);
            console.log(crystalVal2);
            console.log(crystalVal3);
            console.log(crystalVal4);
        });
    };
});
$('#target').text(targetNum);
$('#score').text(userScore);


