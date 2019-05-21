const heightRectangle = 10;

$('#heightUp').click(function() {
  $('#rectangle').height(function(i, currentHeight) {
    return currentHeight + 10;
  });                                               // $('.rectangle').css('Height', '+=10px');
  if ($('#rectangle').height() == 100) {
    $('#rectangle').height(heightRectangle);
  }
});

$('#greenColor').click(function() {
  $('#rectangle').css({'background-color': 'green'});
});

$('#resetColor').click(function() {
  $('#rectangle').css({'background-color': 'red'});
});

$('#hiddenRectangle').click(function() {
  $('#rectangle').fadeOut(1000);                // ou $('.rectangle').hide();
});

$('#showRectangle').click(function() {
  $('#rectangle').fadeIn(1000);                 // ou $('.rectangle').show();
});
