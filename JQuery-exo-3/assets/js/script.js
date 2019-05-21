// Le variable du nombre recherchéS
function nbAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

var nb = nbAleatoire(1, 100);
var nbEssais = 0;
$('#go').click(function() {
nbEssais++;

  if ($('#test').val() == nb) {
    alert('bingo ! Vous avez trouvé en ' + nbEssais + 'essais.');
  }

  if ($('#test').val() < nb) {
    alert('le nombre est trop petit');
  }

  if ($('#test').val() > nb) {
    alert('le nombre est trop grand');
  }

});


// function PromptMessage() {
//     var saisie = prompt("Saisissez votre texte :", "Texte par défaut")
//     console.log(saisie);
// }
