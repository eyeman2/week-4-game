$(document).ready(function() {

  var targetNumber = 0; //number that needs to be matched
  var consoles = $("#consoles");
  var randomNumbers = [];
  var consoleImgSrc = ["assets/images/scary-terry-back.png", "assets/images/meeseeks.jpg", "assets/images/banana.png", "assets/images/sad.png"];

  var score = 0;
  var wins = 0; 
  var losses = 0;
 

var startGame = function () {
  targetNumber = Math.floor(Math.random() * 102) +19;
  $("#target").text(targetNumber);

  score = 0;
  

  $("#userScore").text(score);
};

startGame();



$("#wins-losses").html("<p>Wins:    " + wins + "</p>" + "<p>Losses:    " + losses + "</p>");

var createConsoleScores = function(array) {
  array.length = 0;
  for (i = 0; i < 4; i++) {
    array.push(Math.floor(Math.random() * 12) +1);   
    // console.log(consoleScores) 
  }
};

var setConsoleValues = function(array) {
  
  $(".console-img").each(function (i) {
  

  });
};

createConsoleScores(randomNumbers); 

for (let i = 0; i < randomNumbers.length; i++) {
  
  var createConsoleImgs = $("<img>");
  
  createConsoleImgs.addClass("console-img");
  
  createConsoleImgs.attr("src", consoleImgSrc[i]);
  
  createConsoleImgs.attr("data-console-value", randomNumbers[i]);
  
  consoles.append(createConsoleImgs);
  
}

consoles.on("click", ".console-img", function() {
  
  var consoleTotals = $(this).attr("data-console-value");
  
  consoleTotals = parseInt(consoleTotals);
  
  score += consoleTotals;
console.log(consoleTotals);

createConsoleScores(randomNumbers);
setConsoleValues(randomNumbers);

$("#gif").empty();

  $("#userScore").text(score)

 

  if(score === targetNumber) {
    alert("Let's Get Schwifty");
    
    wins ++;
    startGame();
    createConsoleScores(randomNumbers);
    setConsoleValues(randomNumbers);
    $("#gif").html("<img src='./assets/images/giphy.gif 'width='500' height='430'' />");
    $("#wins-losses").html('<p>Wins: ' + wins + '</p>' +       '<p>Losses: ' + losses + '</p>');
    
    
  }
  
  else if(score > targetNumber) {
    alert("You're Such a Jerry");
        
    losses += 1;
    
    startGame();
    createConsoleScores(randomNumbers);
    setConsoleValues(randomNumbers);
    $("#gif").html("<img src='./assets/images/meeseeks.gif' width='500' height='430' '/>");
   ;
    $("#wins-losses").html('<p>Wins: ' + wins + '</p>' +       '<p>Losses: ' + losses + '</p>');  

    
  }

  else if ((wins === 3) || (losses === 3)) {

    wins = 0;
    losses = 0;
    startGame();
 
    $("#wins-losses").html('<p>Wins: ' + wins + '</p>' +       '<p>Losses: ' + losses + '</p>');
  }

  createConsoleScores(randomNumbers);
  setConsoleValues(randomNumbers);


})
})