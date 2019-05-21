//Pour que les scripts ne se lancent pas avant que la page ait finit de charger.
$(document).ready(function() {
  // Raccourci :
  // $(function() {
  // });

  var howMany = 0;

  $('#clickMe').click(function() {
    howMany++;

    console.log(howMany);
    $('#result').text(howMany);
  })
});
