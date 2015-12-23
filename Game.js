AstroTrip.Game = function (game) {};

AstroTrip.Game.prototype = {

	preload: function () {
	},

	create: function () {
		
	},

	update: function () {
		//Making the VCAM
		this.camera.follow(player);
		//Adding collitions with map
		//this.physics.arcade.collide(player, layer);
	},
};

