var targetNum = Math.floor(Math.random() * 102) + 19;
var userScore = 0;
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


crystal1.on('click', function() {
    userScore += crystalVal1;
    $('#score').text(userScore);
    if (userScore === targetNum) {
        console.log('win')
        $('#crystals').text('WINNER!!!')
    };

    if (userScore > targetNum) {
        console.log('lose')
        $('#crystals').text('YOU LOSE!!!')
     };
});

crystal2.on('click', function() {
    userScore += crystalVal2;
    $('#score').text(userScore);
    if (userScore === targetNum) {
        console.log('win')
        $('#crystals').text('WINNER!!!')
    };

    if (userScore > targetNum) {
        console.log('lose')
        $('#crystals').text('YOU LOSE!!!')
     };
});

crystal3.on('click', function() {
    userScore += crystalVal3;
    $('#score').text(userScore);
    if (userScore === targetNum) {
        console.log('win')
        $('#crystals').text('WINNER!!!')
    };

    if (userScore > targetNum) {
        console.log('lose')
        $('#crystals').text('YOU LOSE!!!')
     };
});

crystal4.on('click', function() {
    userScore += crystalVal4;
    $('#score').text(userScore);
    if (userScore === targetNum) {
        console.log('win')
        $('#crystals').text('WINNER!!!')
    };

    if (userScore > targetNum) {
        console.log('lose')
        $('#crystals').text('YOU LOSE!!!')
     };
});

 if (userScore === targetNum) {
     console.log('win')
     $('#crystals').text('WINNER!!!')
 };

 if (userScore > targetNum) {
    console.log('lose')
    $('#crystals').text('YOU LOSE!!!')
 };

$('#target').text(targetNum);
$('#score').text(userScore);
