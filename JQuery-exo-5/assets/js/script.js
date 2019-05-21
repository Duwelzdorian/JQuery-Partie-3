
//////////////////DEPLACEMENT CLAVIER//////////////////

$('#deplacement').keydown(function(key) { 
  var touche = key.which;
  switch (touche) {
    case 37: /// 37 represente la fleche gauche du clavier
      if ($('#carre').offset().left <= 0) {
        $('#carre').offset({left: ($(window).width())});
      }
      $('#carre').css('margin-left', '-=50px');

      break;
    case 38: /// 38 represente la fleche haut du clavier
      if ($('#carre').offset().top <= 0) {
        $('#carre').offset({top: ($(window).height())});
      }
      $('#carre').css('margin-top', '-=50px');

      break;
    case 39: /// 39 represente la fleche droite du clavier
      if ($('#carre').offset().left > $(window).width()) {
        $('#carre').offset({left: 0});
      }
      $('#carre').css('margin-left', '+=50px');

      break;
    case 40: /// 40 represente la fleche bas du clavier
      if ($('#carre').offset().top > $(window).height()) {
        $('#carre').offset({top: 0});
      }
      $('#carre').css('margin-top', '+=50px');
      break;
    default:
      Swal.fire('Veuillez utiliser les fléches du clavier');

  }

});





//////////////////DEPLACEMENT BOUTON//////////////////

// On veut que le carré une fois arrivé au bord de l'ecran
// retourne à sa position initiale.

$('#right').click(function() { // On crée une fonction clic au bouton droit
  if ($('#carre').offset().left > $(window).width()) { // on dit au carré que si sa postion est arrivée à la limite de l'écran
    $('#carre').offset({left: 0});                     // Il doit retourner à sa position 0
  }
  $('#carre').css('margin-left', '+=50px'); // incremente de 50px par clic pour déplacer le carré
});

$('#down').click(function() {
  if ($('#carre').offset().top > $(window).height()) {
    $('#carre').offset({top: 0});
  }
  $('#carre').css('margin-top', '+=50px');
});

$('#top').click(function() {
  if ($('#carre').offset().top <= 0) {
    $('#carre').offset({top: ($(window).height())
    });
  }
  $('#carre').css('margin-top', '-=50px');
});

$('#left').click(function() {
  if ($('#carre').offset().left <= 0) {
    $('#carre').offset({left: ($(window).width())
    });
  }
  $('#carre').css('margin-left', '-=50px');
});


// Construisez une page html avec un carré et un champ de saisie de texte dans un formulaire.
// Lorsque l'on appuie sur une touche de direction le carré se déplace de 10 px dans la bonne direction.
// Quand le bloc atteint un bord de la page, il doit réaparaître de l'autre côté.
