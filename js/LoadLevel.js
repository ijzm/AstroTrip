AstroTrip.LoadLevel = function (game) {};


AstroTrip.LoadLevel.prototype = {

	preload: function () {
	},

	create: function () {
		console.log("level:" + level);
		this.state.start("Game");
		this.game.add.sprite(0, 0, 'bg');
	},

		update: function () {
	},
};
