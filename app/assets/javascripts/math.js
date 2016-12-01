function mathGame(){

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.auto, 'math', {
    preload: onPreload,
    create: onCreate,
    // resize:onResize
  });


WebFontConfig = {

    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },
    google: {
      families: ['Fredericka the Great']
    }

};
  var sumsArray = [];
  var questionText;
  var randomSum;
  var timeTween;
  var numberTimer;
  var buttonMask;
  var replay;
  var score=0;
  var scoreText;
     var isGameOver = false;
     var topScore;
     var numbersArray = [-3,-2,-1,1,2,3];
  function buildThrees(initialNummber,currentIndex,limit,currentString){
    for(var i=0;i<numbersArray.length;i++){
      var sum = initialNummber+numbersArray[i];
      var outputString = currentString+(numbersArray[i]<0?"":"+")+numbersArray[i];
      if(sum>0 && sum<4 && currentIndex==limit){
        sumsArray[limit][sum-1].push(outputString);
      }
      if(currentIndex<limit){
        buildThrees(sum,currentIndex+1,limit,outputString);
      }
    }
  }
 
  function onPreload() {
    // responsiveScale();
    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    game.load.image("timebar", "/images/math/timebar.png");
    game.load.image("buttonmask", "/images/math/buttonmask.png");
    game.load.spritesheet("buttons", "/images/math/buttons.png",400,50);
    game.load.spritesheet('myguy', '/images/math/dance.png', 70, 120);
    game.load.image("background", "/images/math/board2.png");
    game.load.image("replay", "images/math/replay.png");
    game.load.image("home", "images/home.png");
  }
  function onCreate() {
    

    topScore = localStorage.getItem("topScore")==null?0:localStorage.getItem("topScore");
    // game.stage.backgroundColor = "#cccccc";
    chalkBoard = game.add.sprite(1100, 850,"background");
    chalkBoard.x = 0;
    chalkBoard.y = 0;
    chalkBoard.height = game.height;
    chalkBoard.width = game.width;
    game.stage.disableVisibilityChange = true;
    gameOverSprite = this.game.add.sprite(600, 300, 'myguy');
    gameOverSprite.visible = false;
    gameOverSprite.frame = 0;
    gameOverSprite.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13], 10, true);
    replay = game.add.button(game.width*.6, game.height*.1,"replay",replay,this);
    replay.visable = false;
    home = game.add.button(game.width*.75, game.height*.1, 'home', function onClick(){window.location.href ="/home"});
    home.scale.setTo(0.2,0.2);
    for(var i=1;i<5;i++){
      sumsArray[i]=[[],[],[]];
      for(var j=1;j<=3;j++){
        buildThrees(j,1,i,j);
      }
    }
    questionText = game.add.text(game.width*.5,game.height*.3,"-");

    questionText.anchor.set(0.5);
    scoreText = game.add.text(game.width*.1,game.height*.10,"-");


      for(var i=0;i<3;i++){

      var numberButton = game.add.button(game.width*.3,game.height*.4+i*75,"buttons",checkAnswer,this).frame=i;
      
    }
    numberTimer = game.add.sprite(game.width*.3,game.height*.4,"timebar");
    nextNumber();
  }

  function createText() {
    questionText.font = 'Fredericka the Great';
    questionText.fontSize = 37;
    questionText.addColor('#edf0f3',0);
    scoreText.font = 'Fredericka the Great';
    scoreText.fontSize = 37;
    scoreText.addColor('#edf0f3',0);
  };

  function gameOver(gameOverString){
    // game.stage.backgroundColor = "#ff0000";
    console.log(gameOverString)
    questionText.text = "Wrong Answer!";
    questionText.addColor('#ff471a',0);
          isGameOver = true;
    localStorage.setItem("topScore",Math.max(score,topScore));
    numberTimer.destroy();
    buttonMask.destroy();
    replay.visible = true;
    // gameOverSprite.visible = true;
    // gameOverSprite.animations.play('left');

  }

  function checkAnswer(button){
    var correctAnswer;
    if(!isGameOver){
               if(button.frame==randomSum){
          score+=Math.floor((buttonMask.x+350)/4);

        nextNumber();
        }
        else{
          if(score>0) {
            timeTween.stop();
          }
          correctAnswer = randomSum;
          gameOver(correctAnswer);
        }
          }
  }
  function replay(){

    $("#math").html("");
     mathGame();
  }
  function nextNumber(){
    scoreText.text = "Score: "+score.toString()+"\nBest Score: "+topScore.toString();
    if(buttonMask){
      buttonMask.destroy();
               game.tweens.removeAll();
    }
    buttonMask = game.add.graphics(game.width*.3,game.height*.4);
    buttonMask.beginFill(0xffffff);
    buttonMask.drawRect(0, 0, 400, 200);
    buttonMask.endFill();
    numberTimer.mask = buttonMask;
    if(score>0){
      timeTween=game.add.tween(buttonMask);
      timeTween.to({
        x: -350
      }, 9000, "Linear",true);
      timeTween.onComplete.addOnce(function(){
                 gameOver("?");
            }, this);
          }
    randomSum = game.rnd.between(0,2);
    questionText.text = sumsArray[Math.min(Math.round((score-100)/400)+1,4)][randomSum][game.rnd.between(0,sumsArray[Math.min(Math.round((score-100)/400)+1,4)][randomSum].length-1)];
  }
  }
// }
