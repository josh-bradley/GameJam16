var Character = (function(){
    function Character(game, x, y, sprite){
        //BasicGame.Prefab.call(this, game, 'Player', {x:x, y:y}, properties);
        Phaser.Sprite.call(this, game, x, y, sprite);

        this.speed = 2;
        this.game = game;

        this.game.physics.enable(this);
        this.anchor.set(0.5);

        // animation name, frames, FPS, true? (maybe swap)
        this.framesPerSecond = 10;        
        this.body.collideWorldBounds = true;

        this.setAnimation();
    };

    Character.prototype = Object.create(Phaser.Sprite.prototype);
    Character.prototype.constructor = Character;

    Character.prototype.setAnimation = function() {
        this.animations.add('down', [0, 1, 2], this.framesPerSecond, true);
        this.animations.add('right', [3, 4, 5], this.framesPerSecond, true);
        this.animations.add('up', [6, 7, 8], this.framesPerSecond, true);
        this.animations.add('left', [9, 10, 11], this.framesPerSecond, true);
    };

    Character.prototype.moveUp = function(){
        this.y -= this.speed;
        this.animations.play('up');
    };
    Character.prototype.moveDown = function(){
        this.y += this.speed;
        this.animations.play('down');
    };
    Character.prototype.moveLeft = function(){
        this.x -= this.speed;
        this.animations.play('left');
    };
    Character.prototype.moveRight = function(){
        this.x += this.speed;
        this.animations.play('right');
    };

    return Character;
})();