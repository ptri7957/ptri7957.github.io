var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var startGame = 0;
var level = 0;

// Keyboard input
$(document).keydown(function(){
  if(startGame === 0){
    nextSequence();
    startGame = 1;
    $('#level-title').text("Level 0");
  }
});

// Button press commands
$('.btn').click(function(){
  var userChosenColour = $(this).attr('id');
  playSound(userChosenColour);
  userClickedPattern.push(userChosenColour);
  animatePress(this);
  checkAnswer(userClickedPattern.length-1);
});

// Chooses a random colour square.
function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $('#' + randomChosenColour).fadeOut().fadeIn();
  playSound(randomChosenColour);
  level++;
  $('#level-title').text("Level " + level);
  console.log($('#level-title').text());
}

function playSound(input){
  var sound = null;
  switch (input) {
    case 'red':
      sound = new Audio('sounds/red.mp3');
      sound.play();
      break;
    case 'blue':
      sound = new Audio('sounds/blue.mp3');
      sound.play();
      break;
    case 'yellow':
      sound = new Audio('sounds/yellow.mp3');
      sound.play();
      break;
    case 'green':
      sound = new Audio('sounds/green.mp3');
      sound.play();
      break;
    default:

  }
}

function animatePress(currentColour){
  $(currentColour).addClass('pressed');
  setTimeout(function(){
      $(currentColour).removeClass('pressed')
  }, 100);
}

function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("Success");
    // Check if the user pattern is the same as the game pattern.
    // If the length of the two pattern are the same, this means
    // the user has followed the pattern successfully if they made
    // it up to this point. Move on to the next sequence.
    // For each new level, the user pattern array is reset.
    if(userClickedPattern.length === gamePattern.length){
      console.log("line 2");
      setTimeout(function(){
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }
  }else{
    console.log("Wrong");
    var wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();

    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  startGame = 0;
}
