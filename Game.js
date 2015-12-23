AstroTrip.Game = function (game) {};

var player;

AstroTrip.Game.prototype = {

	preload: function () {
	},

	create: function () {
		this.physics.startSystem(Phaser.Physics.ARCADE);
		player = this.add.sprite(0,0, "char");
		player.anchor.x = 0.5;

		
		player.x = 100;
		player.y = 100;
		
		this.physics.arcade.enable(player);
		
	},

	update: function () {
		//Making the VCAM
		this.camera.follow(player);
		//Adding collitions with map
		//this.physics.arcade.collide(player, layer);
		
		if (this.input.activePointer.isDown){
			this.fire();
		}
	},
	
	fire: function() {
		this.physics.arcade.moveToPointer(player, 100);
		//player.rotation = this.physics.arcade.angleToPointer(player)+1.5;
		
		player.body.velocity.setTo((this.input.x - player.x), (this.input.y - player.y));
    },

};

