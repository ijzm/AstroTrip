AstroTrip.MainMenu = function (game) {};

var music;
var playbutton;

AstroTrip.MainMenu.prototype = {

	preload: function () {
	},

	create: function () {	
		//this.game.add.sprite(0, 0, 'bgmenu');
		playbutton = this.add.button(this.world.centerX,this.world.centerY, "playbutton", this.playTheGame,this);
		playbutton.anchor.x = 0.5;
		playbutton.anchor.y = 0.5;	
		
		music = this.add.audio('menumusic');
		music.loopFull();
	},

		update: function () {
	},
		playTheGame: function(){
			console.log("PLAY");
			this.state.start("Game");
			music.stop();
			console.log("desktop:" + desktop);
			console.log("level:" + level);
	},

};
