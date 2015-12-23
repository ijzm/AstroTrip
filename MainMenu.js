AstroTrip.MainMenu = function (game) {};

var music;
var playbutton;

AstroTrip.MainMenu.prototype = {

	preload: function () {
	},

	create: function () {	
		this.game.add.sprite(0, 0, 'bg');
		this.camera.y = 0;
		this.camera.x = 0;
		
		playbutton = this.add.button(100,100, "playbutton", this.playTheGame,this);
		playbutton.anchor.x = 0.5;
		playbutton.anchor.y = 0.5;	
		
		music = this.add.audio('menumusic');
		music.loopFull();
		
	},

		update: function () {
	},
		playTheGame: function(){
			console.log("PLAY");
			this.state.start("LoadLevel");
			music.stop();
			console.log("desktop:" + desktop);
			console.log("level:" + level);
	},

};
