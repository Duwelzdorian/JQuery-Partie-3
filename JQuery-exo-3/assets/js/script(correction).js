$(function() {
  $('#again').hide();
  var rightAnswer = 0;
  var index = 0;
  var answer = 0;
  var span = $('span');
  var input = $('input');

  function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  console.log(rightAnswer = getRandomNumber(101));

  $('#again').click(function() {
    location.reload(true);
  });

  $('#answer').click(function() {
    index++;
    answer = parseInt($('#answerField').val());

    if (isNaN(answer)) {
      span.text('Diantre ! Ceci n\'est pas un nombre !');
    } else if (answer < rightAnswer) {
      span.text('C\'est plus !').fadeIn(1000).fadeOut(1000);
      input.val('');
    } else if (answer > rightAnswer) {
      span.text('C\'est moins !').fadeIn(1000).fadeOut(1000);
      input.val('');
    } else {
      $('#answer').hide();
      $('#again').show();
      span.text('Bravo ! Vous avez réussi au bout de ' + index + ' fois.').fadeIn(1000);
    }
  });
});
