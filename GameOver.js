AstroTrip.GameOver = function (game) {};

var music;
var playbutton;

AstroTrip.GameOver.prototype = {

	preload: function () {
	},

	create: function () {	
		
		this.camera.y = 0;
		this.camera.x = 0;
		//this.game.add.sprite(0, 0, 'bgmenu');
		playbutton = this.add.button(150,100, "playbutton", this.playTheGame,this);
		playbutton.anchor.x = 0.5;
		playbutton.anchor.y = 0.5;	
		
		music = this.add.audio('menumusic');
		music.loopFull();
		score = lastscore;
	},

		update: function () {
	},
		playTheGame: function(){
			console.log("PLAY");
			this.state.start("Game");
			music.stop();
			console.log("level:" + level);
	},

};
