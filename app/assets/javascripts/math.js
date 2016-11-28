function mathGame(){

var game = new Phaser.Game("100%","100%", Phaser.auto, 'math', {
    preload: onPreload,
    create: onCreate,
    // resize:onResize
  });
  var sumsArray = [];
  var questionText;
  var randomSum;
  var timeTween;
  var numberTimer;
  var buttonMask;
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
  // sets full screen
  function goFullScreen(){
    // setting a background color
    game.stage.backgroundColor = "#555555";
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    // using RESIZE scale mode
    game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    game.scale.setScreenSize(true);
  }
  function onPreload() {
    game.load.image("timebar", "/images/math/timebar.png");
    game.load.image("buttonmask", "/images/math/buttonmask.png");
    game.load.spritesheet("buttons", "/images/math/buttons.png",400,50);
    game.load.spritesheet('myguy', '/images/math/dance.png', 70, 120);
    game.load.image("background", "/images/math/chalkboard.png");
  }
  function onCreate() {
    topScore = localStorage.getItem("topScore")==null?0:localStorage.getItem("topScore");
    game.stage.backgroundColor = "#cccccc";
    chalkBoard = game.add.sprite(1100,850,"background");
    chalkBoard.x = 0;
    chalkBoard.y = 0;
    chalkBoard.height = game.height;
    chalkBoard.width = game.width;
    game.stage.disableVisibilityChange = true;
    gameOverSprite = this.game.add.sprite(600, 300, 'myguy');
    gameOverSprite.frame = 0;
    gameOverSprite.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13], 10, true);
    for(var i=1;i<5;i++){
      sumsArray[i]=[[],[],[]];
      for(var j=1;j<=3;j++){
        buildThrees(j,1,i,j);
      }
    }
    questionText = game.add.text(250,160,"-",{
      font:"bold 72px Arial"
    });
    questionText.anchor.set(0.5);
    scoreText = game.add.text(10,10,"-",{
      font:"bold 24px Arial"
    });
    for(var i=0;i<3;i++){
      var numberButton = game.add.button(100,250+i*75,"buttons",checkAnswer,this).frame=i;
    }
    numberTimer =  game.add.sprite(100,250,"timebar");
    nextNumber();
  }
  function gameOver(gameOverString){
    game.stage.backgroundColor = "#ff0000";
    questionText.text = questionText.text+" = "+gameOverString;
          isGameOver = true;
    localStorage.setItem("topScore",Math.max(score,topScore));

    // gameOverSprite
   gameOverSprite.animations.play('left');

    // RESTARTS GAME MOVE INTO STAND ALONE FUNCTION TO BE TRIGGERED BY BUTTON DISPLAYED ON GAMEOVER
    // game.world.removeAll();
    // $(".mathgame").html("");
    //  mathGame();

  }
  function checkAnswer(button){
    if(!isGameOver){
               if(button.frame==randomSum){
          score+=Math.floor((buttonMask.x+350)/4);
        nextNumber();
        }
        else{
          if(score>0) {
            timeTween.stop();
          }
          gameOver(button.frame+1);
        }
          }
  }
  function nextNumber(){
    scoreText.text = "Score: "+score.toString()+"\nBest Score: "+topScore.toString();
    if(buttonMask){
      buttonMask.destroy();
               game.tweens.removeAll();
    }
    buttonMask = game.add.graphics(50, 250);
    buttonMask.beginFill(0xffffff);
    buttonMask.drawRect(0, 0, 400, 200);
    buttonMask.endFill();
    numberTimer.mask = buttonMask;
    if(score>0){
      timeTween=game.add.tween(buttonMask);
      timeTween.to({
        x: -350
      }, 3000, "Linear",true);
      timeTween.onComplete.addOnce(function(){
                 gameOver("?");
            }, this);
          }
    randomSum = game.rnd.between(0,2);
    questionText.text = sumsArray[Math.min(Math.round((score-100)/400)+1,4)][randomSum][game.rnd.between(0,sumsArray[Math.min(Math.round((score-100)/400)+1,4)][randomSum].length-1)];
  }
  }
// }
