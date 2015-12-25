AstroTrip.MainMenu = function (game) {};

var music;
var playbutton;
var levelselectorbutton;
var helpbutton;
var creditsbutton;


AstroTrip.MainMenu.prototype = {

	preload: function () {
	},

	create: function () {	
		this.game.add.sprite(0, 0, 'bg');
		
		this.game.add.sprite(20, 20, 'logo');
		
		this.camera.y = 0;
		this.camera.x = 0;
		
		playbutton = this.add.button(780,350, "playbutton", this.playTheGame,this);
		playbutton.anchor.x = 1;
		playbutton.anchor.y = 1;	
		
		playbutton = this.add.button(620,350, "levelselectorbutton", this.levelselect,this);
		playbutton.anchor.x = 1;
		playbutton.anchor.y = 1;	
		
		playbutton = this.add.button(780,450, "helpbutton", this.help,this);
		playbutton.anchor.x = 1;
		playbutton.anchor.y = 1;	
		
		playbutton = this.add.button(780,550, "creditsbutton", this.credits,this);
		playbutton.anchor.x = 1;
		playbutton.anchor.y = 1;	
		
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
	
	levelselect: function(){
		music.stop();
		console.log("levelselect");
		//this.state.start("LevelSelect");
	},
	help: function(){
		music.stop();
		console.log("help");
		//this.state.start("help");
	},
	credits: function(){
		music.stop();
		console.log("credits");
		//this.state.start("credits");
	},

};
