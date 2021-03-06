// CONSTANTS
var GAME_HEIGHT = 640;
var GAME_WIDTH = 1024
var COLOR_BLOOD = "#8A0707";
var COLOR_VOMIT = "#A3C00F";
var BACKGROUND_ANCHOR_Y = 0;
var BACKGROUND_POSITION_Y = 0;
var BACKGROUND_SCALE = 4;

(function () {
    /* globals Phaser:false, BasicGame:false */
    //  Create your Phaser game and inject it into the game div.
    //  We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
    //  We're using a game size of 640 x 480 here, but you can use whatever you feel makes sense for your game of course.
    var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'game');

    //  Add the States your game has.
    //  You don't have to do this in the html, it could be done in your Game state too, but for simplicity I'll keep it here.    
    game.state.add('Game', BasicGame.Game);
    game.state.add('Title', BasicGame.Title);
    game.state.add('Intro', BasicGame.Intro);
    game.state.add('YouLose', BasicGame.YouLose);
    game.state.add('YouWin', BasicGame.YouWin);

    //  Now start the Game state.
    game.state.start('Title');

})();


Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};