var memoryPanda = function(){
  var memoryGame = {
    cards: ['images/memory-game/animals-deck/cat-card.png', 'images/memory-game/animals-deck/cat-card.png',
     'images/memory-game/animals-deck/cow-card.png', 'images/memory-game/animals-deck/cow-card.png',
      'images/memory-game/animals-deck/dog-card.png', 'images/memory-game/animals-deck/dog-card.png',
       'images/memory-game/animals-deck/duck-card.png', 'images/memory-game/animals-deck/duck-card.png',
        'images/memory-game/animals-deck/pig-card.png', 'images/memory-game/animals-deck/pig-card.png',
         'images/memory-game/animals-deck/horse-card.png', 'images/memory-game/animals-deck/horse-card.png'],
    init: function() {
      memoryGame.shuffle();
    },
    shuffle: function() {
      var random = 0;
      var temp = 0;
      for (i = 1; i < memoryGame.cards.length; i++) {
        random = Math.round(Math.random() * i);
        temp = memoryGame.cards[i];
        memoryGame.cards[i] = memoryGame.cards[random];
        memoryGame.cards[random] = temp;
      }
      memoryGame.assignCards();
      console.log('Shuffled Card Array: ' + memoryGame.cards);
    },
    assignCards: function() {
      $('.card').each(function(index) {
        $(this).attr('data-card-value', memoryGame.cards[index]);
      });
      memoryGame.clickHandlers();
    },
    clickHandlers: function() {
      $('.card').on('click', function() {
        $(this).html('<img src=' + $(this).data('cardValue') + ' style="height: 170px; width: 180px;"/>').addClass('selected');
        memoryGame.checkMatch();
      });
    },
    checkMatch: function() {
      if ($('.selected').length === 2) {
        if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
          $('.selected').each(function() {
            $(this).animate({
              opacity: 0
            }).removeClass('unmatched');
          });
          $('.selected').each(function() {
            $(this).removeClass('selected');
          });
          memoryGame.checkWin();
        } else {
          setTimeout(function() {
            $('.selected').each(function() {
              $(this).html('').removeClass('selected');
            });
          }, 1000);
        }
      }
    },
    checkWin: function() {
      if ($('.unmatched').length === 0) {
        $('#panda-container').html('<h1>You Did It!</h1>');
      }
    }
  };
  memoryGame.init();
};