var hiddenPhrase;
var letterByLetter;
var hiddenWord;
var underscore;
var wordLeng;
var correctGuess = 0;
var wrongGuess = 0;
var spaces = 0;
var phraseLength = 0;
var warned = false;


function welcomeScreen(){
  $("#canvas").hide();
  $(".single-buttons").hide();
  $(".multi-input").hide();
  $(".subject").hide();
  $(".reset").hide();
  $(".win-gif").hide();
  $(".loss-gif").hide();
  $("lives").hide();
  $(".letter-row").hide();
  $("p").hide();
}

var singlePlayer = function () {
  $(".single").click(function () {
    $(".welcome").hide();
    $(".multi").hide();
    $(".single").hide();
    $(".reset").hide();
    $("h3").hide();
    $(".letter-row").show();
    $(".category").show();
    $("#canvas").show();
    $("p").show();

    var categories = [
       { cities : ["New York", "Miami","Buenos Aires", "Mexico City","Calcutta","Rio de Janeiro", "Saint Petersburg","Pyongyang"]},
       { movieQuotes : ["Frankly my dear I dont give a damn", "There is no place like home", "Im the king of the world", "Take your stinking paws off me you damned dirty ape", "Rosebud", "Reach for the sky"]},
       { random : ["buzz", "box", "jazz", "butterfly", "square", "vision", "population", "siesta", "czar"]},
       { famousPeople : ["Clint Eastwood", "John Wayne", "Paul Newman", "Billy the Kid", "Annie Oakley", "Butch Cassidy", "Jesse James", "Wyatt Earp"]}
    ];
      var category = [Math.floor(Math.random()* categories.length)];


    var wordIndex;
    if (category == 0){
      wordIndex = [Math.floor(Math.random()* categories[category].cities.length)];
       hiddenWord = categories[category].cities[wordIndex];
       $(".categories").append("Category: City");
    }else if (category == 1){
      wordIndex = [Math.floor(Math.random()* categories[category].movieQuotes.length)];
       hiddenWord = categories[category].movieQuotes[wordIndex];
      $(".categories").append("Category: Movie Quotes");
    }else if (category == 2){
      wordIndex = [Math.floor(Math.random()* categories[category].random.length)];
       hiddenWord = categories[category].random[wordIndex];
        $(".categories").append("Category: Tough Words");
    }else if (category == 3){
      wordIndex = [Math.floor(Math.random()* categories[category].famousPeople.length)];
       hiddenWord = categories[category].famousPeople[wordIndex];
        $(".categories").append("Category: Famous Cowboys");
    }
    if (hiddenWord) {
      wordLeng = hiddenWord.length;
    }else if (letterByLetter) {
      wordLeng = letterByLetter.length;
    }
    letterByLetter = hiddenWord.toUpperCase().split("");
    console.log(wordLeng);
    var cont = 0;
    while (cont < wordLeng) {
        if (hiddenWord.charAt(cont) == " ") {
          spaces++;
          $(".hiddenWordGoesHere").append("<span id='"+cont+"'> </span>");
        } else {
            $(".hiddenWordGoesHere").append("<span id='"+cont+"'>_</span>");
        }
        cont++;
    }
    phraseLength = letterByLetter.length - spaces;
    console.log(phraseLength);
  });
};

// Multiplayer//
var multiPlayer = function () {
  $(".multi").click(function () {
    $(".welcome").hide();
    $(".multi").hide();
    $(".single").hide();
    $(".reset").hide();
    $(".multi-input").show();
    $(".letter-row").hide();
    $("h3").hide();
    $(".lives").show();
    $("p").hide();
});
};

//multi input//

var multiPlayerInput = function () {
  $(".new-word").click(function () {
    if ($("#input").val()== 0) {
      alert("Please type something!");
      return;

    }
    hiddenPhrase = $("#input").val();
    letterByLetter = hiddenPhrase.toUpperCase().split("");
    if (hiddenWord) {
      wordLeng = hiddenPhrase.length;
    }else if (letterByLetter) {
      wordLeng = letterByLetter.length;
    }
           var cont = 0;
           while (cont < wordLeng) {
               if (hiddenPhrase.charAt(cont) == " ") {
                 spaces++;
                 $(".hiddenWordGoesHere").append("<span id='"+cont+"'> </span>");
               } else {
                   $(".hiddenWordGoesHere").append("<span id='"+cont+"'>_</span>");
               }
               cont++;
           }
          phraseLength = letterByLetter.length - spaces;
          console.log(phraseLength);
});
};



var multiplayerPage = function () {
  $(".new-word").click(function (){
  $(".welcome").hide();
  $(".multi").hide();
  $(".single").hide();
  $(".reset").hide();
  $(".multi-input").hide();
  $("#canvas").show();
  $(".letter-row").show();
  $("p").show();
  $(".lives").show();

});
};

$(document).ready(function () {

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');

  var gallow = function () {
    context.beginPath();
    context.moveTo(430,385);
    context.lineTo(430,175);
    context.lineTo(600,175);
    context.lineTo(600,385);
    context.lineWidth=10;
    context.stroke();
  };
  var rope1 = function () {
    context.beginPath();
    context.moveTo(460,175);
    context.lineTo(500,280);
    context.lineWidth=2;
    context.stroke();
  };



// BODY //
if (wrongGuess==0) {
//head//
  context.beginPath();
  context.arc(500,250,20,0,2*Math.PI);
  context.lineWidth = 2;
  context.fillStyle = "#eac086";
  context.fill();
  context.stroke();
  //body//
  context.beginPath();
  context.moveTo(500, 270);
  context.lineTo(500, 340);
  context.stroke();
//leg1//
  context.beginPath();
  context.moveTo(500,340);
  context.lineTo(485,380);
  context.stroke();
//leg2//
  context.beginPath();
  context.moveTo(500,340);
  context.lineTo(515,380);
  context.stroke();
//arm1//
  context.beginPath();
  context.moveTo(500,295);
  context.lineTo(470,325);
  context.stroke();
//arm2//
  context.beginPath();
  context.moveTo(500,295);
  context.lineTo(530,325);
  context.stroke();
//eye1//
  context.beginPath();
  context.arc(493,248,3,0,2*Math.PI);
  context.stroke();
//eye2//
  context.beginPath();
  context.arc(507,248,3,0,2*Math.PI);
  context.stroke();
//mouth//
  context.beginPath();
  context.arc(500,255,5,0,Math.PI);
  context.stroke();
  //horse//
  var img = new Image();
  img.src = 'images/horse1.png';
  img.onload = function(){
  context.drawImage(img, 250, 300, 150, 100);
  };

  context.beginPath();
  context.moveTo(460,175);
  context.lineTo(300,336);
  context.lineWidth=2;
  context.stroke();
}
function hang() {
  context.clearRect(0,0,700, 400);
  //Gallow//
  context.beginPath();
  context.moveTo(430,385);
  context.lineTo(430,175);
  context.lineTo(600,175);
  context.lineTo(600,385);
  context.lineWidth=10;
  context.stroke();
  //start//
  if (wrongGuess==0) {
    $(".lives").text('5');
  //head//
    context.beginPath();
    context.arc(500,250,20,0,2*Math.PI);
    context.lineWidth = 2;
    context.fillStyle = "#eac086";
    context.fill();
    context.stroke();
    //body//
    context.beginPath();
    context.moveTo(500, 270);
    context.lineTo(500, 340);
    context.stroke();
  //leg1//
    context.beginPath();
    context.moveTo(500,340);
    context.lineTo(485,380);
    context.stroke();
  //leg2//
    context.beginPath();
    context.moveTo(500,340);
    context.lineTo(515,380);
    context.stroke();
  //arm1//
    context.beginPath();
    context.moveTo(500,295);
    context.lineTo(470,325);
    context.stroke();
  //arm2//
    context.beginPath();
    context.moveTo(500,295);
    context.lineTo(530,325);
    context.stroke();
  //eye1//
    context.beginPath();
    context.arc(493,248,3,0,2*Math.PI);
    context.stroke();
  //eye2//
    context.beginPath();
    context.arc(507,248,3,0,2*Math.PI);
    context.stroke();
  //mouth//
    context.beginPath();
    context.arc(500,255,5,0,Math.PI);
    context.stroke();
    //NOOSE//
    context.beginPath();
    context.moveTo(460,175);
    context.lineTo(500,280);
    context.lineWidth=2;
    context.stroke();

    // context.beginPath();
    // context.arc(500,260,5,0,Math.PI,true);
    // context.stroke();
    //horse//
    var img = new Image();
    img.src = 'images/horse1.png';
    img.onload = function(){
    context.drawImage(img, 250, 300, 150, 100);
    };

    context.beginPath();
    context.moveTo(460,175);
    context.lineTo(300,336);
    context.lineWidth=2;
    context.stroke();
  }
  //oneWrong//
if (wrongGuess == 1) {
  $(".lives").text('4');
  context.beginPath();
  context.arc(500,230,20,0,2*Math.PI);
  context.lineWidth = 2;
  context.fillStyle = "#eac086";
  context.fill();
  context.stroke();
  //body//
  context.beginPath();
  context.moveTo(500, 250);
  context.lineTo(500, 320);
  context.stroke();
//leg1//
  context.beginPath();
  context.moveTo(500,320);
  context.lineTo(485,360);
  context.stroke();
//leg2//
  context.beginPath();
  context.moveTo(500,320);
  context.lineTo(515,360);
  context.stroke();
//arm1//
  context.beginPath();
  context.moveTo(500,275);
  context.lineTo(470,305);
  context.stroke();
//arm2//
  context.beginPath();
  context.moveTo(500,275);
  context.lineTo(530,305);
  context.stroke();
//eye1//
  context.beginPath();
  context.arc(493,228,3,0,2*Math.PI);
  context.stroke();
//eye2//
  context.beginPath();
  context.arc(507,228,3,0,2*Math.PI);
  context.stroke();
//mouth//
  context.beginPath();
  context.arc(500,235,5,0,Math.PI);
  context.stroke();
  //NOOSE//
  context.beginPath();
  context.moveTo(460,175);
  context.lineTo(500,260);
  context.lineWidth=2;
  context.stroke();
  //horse//
  var img = new Image();
  img.src = 'images/horse1.png';
  img.onload = function(){
  context.drawImage(img, 225, 300, 150, 100);
  };
  //ROPE//
  context.beginPath();
  context.moveTo(460,175);
  context.lineTo(275,336);
  context.lineWidth=2;
  context.stroke();
}

if (wrongGuess == 2) {
  $(".lives").text('3');
  context.beginPath();
  context.arc(500,210,20,0,2*Math.PI);
  context.lineWidth = 2;
  context.fillStyle = "#eac086";
  context.fill();
  context.stroke();
  //body//
  context.beginPath();
  context.moveTo(500, 230);
  context.lineTo(500, 300);
  context.stroke();
//leg1//
  context.beginPath();
  context.moveTo(500,300);
  context.lineTo(485,340);
  context.stroke();
//leg2//
  context.beginPath();
  context.moveTo(500,300);
  context.lineTo(515,340);
  context.stroke();
//arm1//
  context.beginPath();
  context.moveTo(500,255);
  context.lineTo(470,285);
  context.stroke();
//arm2//
  context.beginPath();
  context.moveTo(500,255);
  context.lineTo(530,285);
  context.stroke();
//eye1//
  context.beginPath();
  context.arc(493,208,3,0,2*Math.PI);
  context.stroke();
//eye2//
  context.beginPath();
  context.arc(507,208,3,0,2*Math.PI);
  context.stroke();
//mouth//
  context.beginPath();
  context.arc(500,215,5,0,Math.PI);
  context.stroke();
  //NOOSE//
  context.beginPath();
  context.moveTo(460,175);
  context.lineTo(500,240);
  context.lineWidth=2;
  context.stroke();

  var img = new Image();
  img.src = 'images/horse1.png';
  img.onload = function(){
  context.drawImage(img, 200, 300, 150, 100);
  };
  context.beginPath();
  context.moveTo(460,175);
  context.lineTo(250,336);
  context.lineWidth=2;
  context.stroke();
}

if (wrongGuess == 3) {
  $(".lives").text('2');
  context.beginPath();
  context.arc(500,200,20,0,2*Math.PI);
  context.lineWidth = 2;
  context.fillStyle = "#eac086";
  context.fill();
  context.stroke();
  //body//
  context.beginPath();
  context.moveTo(500, 220);
  context.lineTo(500, 290);
  context.stroke();
//leg1//
  context.beginPath();
  context.moveTo(500,290);
  context.lineTo(485,330);
  context.stroke();
//leg2//
  context.beginPath();
  context.moveTo(500,290);
  context.lineTo(515,330);
  context.stroke();
//arm1//
  context.beginPath();
  context.moveTo(500,245);
  context.lineTo(470,275);
  context.stroke();
//arm2//
  context.beginPath();
  context.moveTo(500,245);
  context.lineTo(530,275);
  context.stroke();
//eye1//
  context.beginPath();
  context.arc(493,198,3,0,2*Math.PI);
  context.stroke();
//eye2//
  context.beginPath();
  context.arc(507,198,3,0,2*Math.PI);
  context.stroke();
//mouth//
  context.beginPath();
  context.arc(500,205,5,0,Math.PI);
  context.stroke();
  //NOOSE//
  context.beginPath();
  context.moveTo(460,175);
  context.lineTo(500,240);
  context.lineWidth=2;
  context.stroke();
  //horse//
  var img = new Image();
  img.src = 'images/horse1.png';
  img.onload = function(){
  context.drawImage(img, 150, 300, 150, 100);
  };
  context.beginPath();
  context.moveTo(460,175);
  context.lineTo(200,336);
  context.lineWidth=2;
  context.stroke();
}

if (wrongGuess == 4) {
  $(".lives").text('1');
  context.beginPath();
  context.arc(500,200,20,0,2*Math.PI);
  context.lineWidth = 2;
  context.fillStyle = "#eac086";
  context.fill();
  context.stroke();
  //body//
  context.beginPath();
  context.moveTo(500, 220);
  context.lineTo(500, 290);
  context.stroke();
//leg1//
  context.beginPath();
  context.moveTo(500,290);
  context.lineTo(485,330);
  context.stroke();
//leg2//
  context.beginPath();
  context.moveTo(500,290);
  context.lineTo(515,330);
  context.stroke();
//arm1//
  context.beginPath();
  context.moveTo(500,245);
  context.lineTo(470,275);
  context.stroke();
//arm2//
  context.beginPath();
  context.moveTo(500,245);
  context.lineTo(530,275);
  context.stroke();
//eye1//
  context.beginPath();
  context.arc(493,198,3,0,2*Math.PI);
  context.stroke();
//eye2//
  context.beginPath();
  context.arc(507,198,3,0,2*Math.PI);
  context.stroke();
//mouth//
  context.beginPath();
  context.arc(500,210,5,0,Math.PI, true);
  context.stroke();
  //NOOSE//
  context.beginPath();
  context.moveTo(460,175);
  context.lineTo(500,250);
  context.lineWidth=2;
  context.stroke();

  var img = new Image();
  img.src = 'images/horse1.png';
  img.onload = function(){
  context.drawImage(img, 100, 300, 150, 100);
  };
  context.beginPath();
  context.moveTo(460,175);
  context.lineTo(150,336);
  context.lineWidth=2;
  context.stroke();
}

if (wrongGuess == 5 && !warned) {
alert("You're not dead yet?? I guess we will give you one more guess!");
warned = true;
} if (wrongGuess == 5) {


  context.beginPath();
  context.arc(500,200,20,0,2*Math.PI);
  context.lineWidth = 2;
  context.fillStyle = "#eac086";
  context.fill();
  context.stroke();
  //body//
  context.beginPath();
  context.moveTo(500, 220);
  context.lineTo(500, 290);
  context.stroke();
//leg1//
  context.beginPath();
  context.moveTo(500,290);
  context.lineTo(485,330);
  context.stroke();
//leg2//
  context.beginPath();
  context.moveTo(500,290);
  context.lineTo(515,330);
  context.stroke();
//arm1//
  context.beginPath();
  context.moveTo(500,245);
  context.lineTo(470,275);
  context.stroke();
//arm2//
  context.beginPath();
  context.moveTo(500,245);
  context.lineTo(530,275);
  context.stroke();
//eye1//
context.beginPath();
context.moveTo(488,195);
context.lineTo(498,200);
context.moveTo(490,200);
context.lineTo(500,195);
context.stroke();
//eye2//
  context.beginPath();
  context.moveTo(504,195);
  context.lineTo(514,200);
  context.moveTo(504,200);
  context.lineTo(514,195);
  context.stroke();
//mouth//
  context.beginPath();
  context.arc(500,210,5,0,Math.PI, true);
  context.stroke();
  //NOOSE//
  context.beginPath();
  context.moveTo(460,175);
  context.lineTo(500,250);
  context.lineWidth=2;
  context.stroke();
  var img = new Image();
  img.src = 'images/horse1.png';
  img.onload = function(){
  context.drawImage(img, 50, 300, 150, 100);
  };
  context.beginPath();
  context.moveTo(460,175);
  context.lineTo(100,336);
  context.lineWidth=2;
  context.stroke();
}
}



welcomeScreen();
singlePlayer();
multiPlayer();
multiplayerPage();
multiPlayerInput();
gallow();
rope1(); 
// mouth2();
// var noSpaces = $.grep(letterByLetter, function (spaces, index) {
//   return " ";
// });

$(".letter-buttons").on("click", function () {
  var correct = 0;

  console.log(letterByLetter);
  $(this).prop("disabled", true).addClass("disable");
 var letterGuessed = $(this).text();
 var letterCheck = letterByLetter.indexOf(letterGuessed.toUpperCase());
 for (var i = 0; i < letterByLetter.length; i++) {
   if (letterByLetter[i] == letterGuessed.toUpperCase()) {
   correct++;
   correctGuess++;
   $("span#"+i).text(letterByLetter[i]);
  }
 }
if (correct === 0) {
  wrongGuess++;
  console.log(wrongGuess);
}
if (wrongGuess==1) {
  $("lives").replaceWith("4");
}

hang();

  if ( phraseLength == correctGuess) {
    setTimeout(function () {
    $(".win-gif").show();
    $("#canvas").hide();
    $(".hiddenWordGoesHere").hide();
    $(".letter-row").hide();
    $("h3").hide();
    $(".categories").hide();
    $(".reset").show();
    $("p").hide();
    $(".lives").hide();

  },600);
}
if ( wrongGuess == 6) {
  setTimeout(function () {
  $(".win-gif").hide();
  $(".loss-gif").show();
  $("#canvas").hide();
  $(".hiddenWordGoesHere").hide();
  $(".letter-row").hide();
  $("h3").hide();
  $(".reset").show();
  $(".categories").hide();
  $("p").hide();
  $(".lives").hide();



},150);
setTimeout(function () {
  alert("The word was "+ hiddenPhrase3+ "!");

},300);
}

});
$(".reset, .multi-go-back").on("click",function () {
  location.reload();
});
});
