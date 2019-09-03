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
console.log(targetNum);
console.log(crystalVal1);
console.log(crystalVal2);
console.log(crystalVal3);
console.log(crystalVal4);

// $('#crystals').on('click', function () {
//     $('#crystal-1')[0].innerHTML = parseInt($('#crystal-1')[0].innerHTML) + 1;
// });

crystal1.on('click', function() {
    userScore += crystalVal1;
    $('#score').text(userScore);
})

crystal2.on('click', function() {
    userScore += crystalVal2;
    $('#score').text(userScore);
    console.log(userScore);
})

crystal3.on('click', function() {
    userScore += crystalVal3;
    $('#score').text(userScore);
    console.log(userScore);
})

crystal4.on('click', function() {
    userScore += crystalVal4;
    $('#score').text(userScore);
    console.log(userScore);
})

// document.getElementById("crystals").addEventListener("click", function(){
//     $(this).alert('YOOOOOO');
//   });
console.log(userScore);

$('#target').text(targetNum);
$('#score').text(userScore);
