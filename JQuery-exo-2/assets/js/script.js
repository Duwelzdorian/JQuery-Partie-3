//Pour que les scripts ne se lancent pas avant que la page ait finit de charger.
$(document).ready(function() {
var howMany = 0;
  $('#more').click(function() {
    howMany += 1;
    $('#result').text(howMany);
  });
  $('#less').click(function() {
    howMany -= 1;
    $('#result').text(howMany);
  });
});
