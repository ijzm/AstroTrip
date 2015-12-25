AstroTrip.GameOver = function (game) {};

var music;
var playbutton;

AstroTrip.GameOver.prototype = {

	preload: function () {
	},

	create: function () {	
		this.game.add.sprite(0, 0, 'bg');
		this.camera.y = 0;
		this.camera.x = 0;
		
		this.game.add.sprite(20, 20, 'logo');
		
		playbutton = this.add.button(780,350, "retrybutton", this.playTheGame,this);
		playbutton.anchor.x = 1;
		playbutton.anchor.y = 1;	
		
		playbutton = this.add.button(780,450, "menubutton", this.mainmenu,this);
		playbutton.anchor.x = 1;
		playbutton.anchor.y = 1;	
		
		music = this.add.audio('menumusic');
		//music.loopFull();
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
	
	mainmenu: function(){
		console.log("MainMenu");
		this.state.start("MainMenu");
	}

};
