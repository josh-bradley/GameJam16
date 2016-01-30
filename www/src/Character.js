var Character = (function() {
    function Character(game_state, x, y, sprite) {
        //BasicGame.Prefab.call(this, game, 'Player', {x:x, y:y}, properties);
        this.game_state = game_state;

        Phaser.Sprite.call(this, game_state.game, x, y, sprite);        
        game_state.game.physics.arcade.enable(this);
        this.anchor.set(0.5);
        
        this.framesPerSecond = 10;
        this.body.collideWorldBounds = true;

        this.speed = 200;
        this.turboBoostSpeed = 20;
        
        this.followers = []
        this.setAnimation();

        this.performRitual = function(character, offeringStone) {            
            offeringStone.body.velocity.x = 0;
            offeringStone.body.velocity.y = 0;
            
            this.followers.forEach(function(follower) {
                follower.kill();
            }, this);;
            this.followers = [];
            this.speed = 200;
        }
    };

    Character.prototype = Object.create(Phaser.Sprite.prototype);
    Character.prototype.constructor = Character;

    Character.prototype.addFollower = function(follower) {
        // This order is important
        follower.follow(this);
        this.followers.push(follower);        
        this.speed *= 0.8;
    };

    Character.prototype.turboBoost = function() {
        // Sacrifice your last follower for brief boost
        console.log("88888ooooo--- TUUUUUUURRRRRBOOOOOOOOOOO))))>")
        this.speed += this.turboBoostSpeed;
        // TODO: Lose turbo speed
    }

    Character.prototype.setAnimation = function() {
        this.animations.add('down', [0, 1, 2], this.framesPerSecond, true);
        this.animations.add('right', [3, 4, 5], this.framesPerSecond, true);
        this.animations.add('up', [6, 7, 8], this.framesPerSecond, true);
        this.animations.add('left', [9, 10, 11], this.framesPerSecond, true);
    };

    Character.prototype.setVelocity = function(x, y) {
            this.body.velocity.x = x;
            this.body.velocity.y = y;
        },

        Character.prototype.moveUp = function() {
            this.setVelocity(0, -this.speed);
            this.animations.play('up');
        };
    Character.prototype.moveDown = function() {
        this.setVelocity(0, this.speed);
        this.animations.play('down');
    };
    Character.prototype.moveLeft = function() {
        this.setVelocity(-this.speed, 0);
        this.animations.play('left');
    };
    Character.prototype.moveRight = function() {
        this.setVelocity(this.speed, 0);
        this.animations.play('right');
    };
    Character.prototype.kill = function() {
        this.destroy();
    };

    Character.prototype.stop = function() {
        this.setVelocity(0, 0);
        this.animations.stop();
    };

    Character.prototype.update = function() {
        this.game_state.game.physics.arcade.collide(this, this.game_state.offeringStone, this.performRitual, null, this);
    };

    return Character;
})();