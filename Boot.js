var AstroTrip = {}; //declare the object that will hold all game states
var clicks = 0;     // basic global variables
var playmusic = true;  //global toggle to control music play across states
var desktop;
var level = 0;
var score = 0;
var lastscore = 0;
var canclick = false;

AstroTrip.Boot = function (game) {  //declare the boot state
	
};

AstroTrip.Boot.prototype = {

	preload: function () {
		//load assets for the loading screen
		//this.load.image('preloaderBackground', 'assets/preloadbck.png');
		//this.load.image('preloaderBar', 'assets/preloadbar.png');

	},

	create: function () {
		this.state.start('Preloader');   //start the Preloader state
		if(this.game.device.desktop) {
			desktop = 1;
		} else {
			desktop = 0;
			// aspect ratio with letterboxing if needed
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.scale.pageAlignHorizontally = true;
			this.game.scale.pageAlignVertically = true;
		}

	}
};
