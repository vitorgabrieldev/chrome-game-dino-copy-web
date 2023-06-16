// Start Game
var runGame = 0;

document.addEventListener('keypress',(key)=>{if(key.code==='Space'){
    if (runGame == 0) startGame();
}});

$('.btnStart').click(() => {
    startGame();
});

const startGame = () => {
    runGame = 1;
    $(".viewAppStart").addClass('hidden');
    $(".cactoElement-game-large").addClass('animationMoveCacto');
    $(".cactoElement-game-min").addClass('animationMoveCacto');
    loopPoints();
    let tokenRunnerDino = 0;
    setInterval(() => {
        startRunnerDino(tokenRunnerDino);
        if (tokenRunnerDino == 0) {
            tokenRunnerDino = 1;
        } else {
            tokenRunnerDino = 0;
        };
    }, 150);
};


// jumpPlayer => ClassName Jump Player (Css - KeyFrames);

document.addEventListener('keypress',(key)=>{if(key.code==='Space')jumpPlayer()});

var alreadyJump = false;

const jumpPlayer = () => {
    if ($('#player').hasClass("jumpPlayer") != true) {
        $("#player").addClass("jumpPlayer");
        alreadyJump = true;
        setTimeout(() => {
            $("#player").removeClass("jumpPlayer");
            alreadyJump = false;
        }, 700);
    };
};

// ------------ Points ------------

const loopPoints = () => {
    var points = 0;
    var loopPoints = setInterval(() => {
        points ++;
        if (points < 10) {
            $('.point').text(`0000${points}`);
        };
        if (points < 100 && points > 10) {
            $('.point').text(`000${points}`);
        };
        if (points < 1000 && points > 100) {
            $('.point').text(`00${points}`);
        };
        if (points < 10000 && points > 1000) {
            $('.point').text(`0${points}`);
        };
        if (points < 100000 && points > 10000) {
            $('.point').text(`${points}`);
        };
    }, 100);
};

// ------------ Animation Dino ------------
const startRunnerDino = (tokenRunnerDino) => {
    if (tokenRunnerDino == 0) {
        $("#player").attr("src","./gameComponents/player2.png");
    } else {
        $("#player").attr("src","./gameComponents/player.png");
    };
};

// ----------- Colisão com os cactos -----------

// x = 80 -> Player Position


setInterval(() => {
    var cordsCactoLarge =  updatePositionCacto();
    var cordsCactoMin = updatePositionCacto2();
    var cordsPlayer =  updatePositionPlayer();
    if (cordsCactoLarge.x < 150 && cordsCactoLarge.x > 0 && !alreadyJump) {
        alert("Você perdeu!!");
        resetGame(); 
    };
    if (cordsCactoMin.x < 150 && cordsCactoMin.x > 0 && !alreadyJump) {
        alert("Você perdeu!!");
        resetGame(); 
    };
}, 100);

function updatePositionCacto() {
    let cactoLarge = document.querySelector('.cactoElement-game-large');
    let cordsRes = cactoLarge.getBoundingClientRect();
    return cordsRes;
};
function updatePositionCacto2() {
    let cactoLarge = document.querySelector('.cactoElement-game-min');
    let cordsRes = cactoLarge.getBoundingClientRect();
    return cordsRes;
};
function updatePositionPlayer() {
    let player = document.querySelector('#player');
    let cordsRes = player.getBoundingClientRect();
    return cordsRes;
};

function resetGame() {
    window.location.reload();
};