AstroTrip.MainMenu = function(game) {};

var music;
var playbutton;
var levelselectorbutton;
var helpbutton;
var creditsbutton;
var menubutton;
var credits;
var help;

AstroTrip.MainMenu.prototype = {

	preload: function() {},

	create: function() {

		level = localStorage.getItem('myItemKey');
		this.game.add.sprite(0, 0, 'bg');

		this.game.add.sprite(20, 20, 'logo');

		this.camera.y = 0;
		this.camera.x = 0;

		playbutton = this.add.button(780, 350, "playbutton", this.playTheGame, this);
		playbutton.anchor.x = 1;
		playbutton.anchor.y = 1;

		levelselectorbutton = this.add.button(620, 350, "levelselectorbutton", this.levelselect, this);
		levelselectorbutton.anchor.x = 1;
		levelselectorbutton.anchor.y = 1;

		helpbutton = this.add.button(780, 450, "helpbutton", this.help, this);
		helpbutton.anchor.x = 1;
		helpbutton.anchor.y = 1;

		creditsbutton = this.add.button(780, 550, "creditsbutton", this.credits, this);
		creditsbutton.anchor.x = 1;
		creditsbutton.anchor.y = 1;

		credits = this.game.add.sprite(0, 0, 'credits');
		credits.alpha = 0

		help = this.game.add.sprite(0, 0, 'help');
		help.alpha = 0

		menubutton = this.add.button(20, 520, "menubutton", this.mainmenu, this);
		menubutton.alpha = 0;

		music = this.add.audio('menumusic');
		music.loopFull();


	},

	update: function() {},
	playTheGame: function() {
		console.log("PLAY");
		this.state.start("LoadLevel");
		//TODO: REMOVE
		//level = 10;
		music.stop();
		console.log("desktop:" + desktop);
		console.log("level:" + level);
	},

	levelselect: function() {
		music.stop();
		console.log("levelselect");
		this.state.start("LevelSelect");
	},
	help: function() {
		music.stop();
		console.log("help");
		help.alpha = 1;
		menubutton.alpha = 1;
	},
	credits: function() {
		music.stop();
		console.log("credits");
		menubutton.alpha = 1;
		credits.alpha = 1;
	},
	mainmenu: function() {
		music.loopFull();
		menubutton.alpha = 0;
		credits.alpha = 0;
		help.alpha = 0;
	},

};
