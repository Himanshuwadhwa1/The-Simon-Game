var level = 0;
var pressed;
const colorNum = ['green','red','yellow','blue'];
var RandomSeq= [];
var clickedButtonSeq = [];
var gameOn = false;
$(document).on('keydown', function() {
    if (!gameOn) {
        $("h1").text("level " + level);   
        createSequence();
        gameOn = true;
    }
})

$(".btn").on("click",function(){
    var clicked = this.id;
    
    clickBtn(clicked);
    clickedButtonSeq.push(clicked)
    checkAnswer(clickedButtonSeq.length-1);

})




function createSequence() {
    clickedButtonSeq = [];

    level++;
    $("h1").text("level " + level);
    var randomNumber = Math.floor( Math.random() * 4 );
    var randomColoring = colorNum[randomNumber];
    RandomSeq.push(randomColoring);

    $("."+randomColoring).addClass("new");
    var levelAudio = new Audio("sounds/"+randomColoring+".mp3");
    levelAudio.play();
    setTimeout(function() {
        $("." + randomColoring).removeClass("new");
    },100);
}

function checkAnswer(level){
    console.log(clickedButtonSeq)
    console.log(RandomSeq)
    if (RandomSeq[level] === clickedButtonSeq[level]){
        if(clickedButtonSeq.length === RandomSeq.length){
        setTimeout(function (){
            createSequence();
        },1000)
        }
    }
    else{
        $('body').addClass("game-over");
        var overAudio =new Audio("sounds/wrong.mp3");
        overAudio.play();
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(() => {
            $('body').removeClass('game-over')
        }, 100);
        startOver()
        
    }
}


function clickBtn(key){
    switch (key) {
        case 'red':
            $("#red").on('click', function (){
                $("#red").addClass("pressed");
                setTimeout(function () {
                    $("#red").removeClass("pressed")
                },100);
            });
            var redaudio = new Audio("sounds/red.mp3");
            redaudio.play();
            break;
        case 'green':
            $("#green").on('click', function (){
                $("#green").addClass("pressed");
                setTimeout(function () {
                    $("#green").removeClass("pressed");
                },100);
            });
            var greenaudio = new Audio("sounds/green.mp3");
            greenaudio.play();       
            break;
        case 'yellow':
            $("#yellow").on('click', function (){
                $("#yellow").addClass("pressed");
                setTimeout(function () {
                    $("#yellow").removeClass("pressed");
                },100);
            });
            var yellowaudio = new Audio("sounds/yellow.mp3");
            yellowaudio.play();
            break;
        case 'blue':
            $("#blue").on('click', function (){
                $("#blue").addClass("pressed");
                setTimeout(function () {
                    $("#blue").removeClass("pressed");
                },100);
            });
            var blueaudio = new Audio("sounds/blue.mp3");
            blueaudio.play();
            break;    
        default:
            break;
    }
}

function startOver() {
    level = 0;
    RandomSeq = [];
    gameOn = false;
  }