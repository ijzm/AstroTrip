AstroTrip.Preloader = function (game) {  //declare the Preloader function

	this.background = null;

	this.ready = false;

};

AstroTrip.Preloader.prototype = {

	preload: function () {
		//load all the required assets in the game - sprites, music, fonts,etc
		this.load.image('playbutton', 'assets/playbutton.png');

//		this.load.tilemap('spawn', 'maps/spawn.json', null, Phaser.Tilemap.TILED_JSON);

		this.load.image('tiles', 'assets/tiles.png');


		this.load.audio('menumusic', 'assets/menumusic.mp3');
		
		this.time.advancedTiming = true;


	},

		create: function () {
	},

		update: function () {

		//checking whether the music is ready to be played before proceeding to the Main Menu.
		if (this.cache.isSoundDecoded('menumusic') && this.ready == false){
			this.ready = true;
			this.state.start('MainMenu');
		}

	}

};