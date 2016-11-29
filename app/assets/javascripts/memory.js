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
      var number = 0;
      var matchEvent = function(){
        $('.card').on('click', function(event) {
        $(this).html('<img src=' + $(this).data('cardValue') + ' style="height: 190px; width: 200px;"/>').addClass('selected animated flipInY');
          number++;
        memoryGame.checkMatch();
      });
      };
      matchEvent();
    },
    checkMatch: function() {
      if ($('.selected').length === 2) {
        if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
          $('.selected').each(function() {
            $(this).animate({
              opacity: 0
            }).removeClass('unmatched animated flipInY').addClass('animated flipInX');
          });
          $('.selected').each(function() {
            $(this).removeClass('selected animated flipInY').addClass('animated flipInX');
          });
          memoryGame.checkWin();
        } else {
          setTimeout(function() {
            $('.selected').each(function() {
              $(this).html('').removeClass('selected animated flipInY').addClass('animated flipInX');
            });
          }, 800);
        }
      }
    },
    checkWin: function() {
      if ($('.unmatched').length === 0) {
        $('.card').hide();
        $('#panda-victory').show().addClass('animated bounceInLeft');
        setTimeout(function() {
          window.location.reload();
        }, 3000);
      }
    }
  };
  memoryGame.init();
};