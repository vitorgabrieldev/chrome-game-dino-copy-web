// Start Game
var runGame = 0;

document.addEventListener('keypress',(key)=>{if(key.code==='Space'){
    if (runGame == 0) startGame();
}});

$('.btnStart').click(() => {
    startGame();
});

const startGame = () => {
    $(".viewAppStart").addClass('hidden');
    $(".cactoElement-game-large").addClass('animationMoveCacto');
    $(".cactoElement-game-min").addClass('animationMoveCacto');
    loopPoints();
};


// jumpPlayer => ClassName Jump Player (Css - KeyFrames);

document.addEventListener('keypress',(key)=>{if(key.code==='Space')jumpPlayer()});

const jumpPlayer = () => {
    if ($('#player').hasClass("jumpPlayer") != true) {
        $("#player").addClass("jumpPlayer");
    
        setTimeout(() => {
            $("#player").removeClass("jumpPlayer");
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
    }, .1);
};
