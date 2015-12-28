AstroTrip.Preloader = function (game) {  //declare the Preloader function

	this.background = null;

	this.ready = false;

};

AstroTrip.Preloader.prototype = {

	preload: function () {
		//load all the required assets in the game - sprites, music, fonts,etc
		this.load.image('playbutton', 'assets/playbutton.png');
		this.load.image('creditsbutton', 'assets/creditsbutton.png');
		this.load.image('levelselectorbutton', 'assets/levelselectorbutton.png');
		this.load.image('helpbutton', 'assets/helpbutton.png');
		this.load.image('menubutton', 'assets/menubutton.png');
		this.load.image('retrybutton', 'assets/retrybutton.png');
		this.load.image('button', 'assets/button.png');
		this.load.image('buttonlocked', 'assets/buttonlocked.png');
		this.load.image('soundbutton', 'assets/soundbutton.png');
		this.load.image('logo', 'assets/logo.png');
		
		this.load.image('char', 'assets/player.png');
		this.load.image('explotion', 'assets/explotion.png');
		this.load.image('bg', 'assets/bg.png');
		this.load.image('credits', 'assets/credits.png');
		this.load.image('help', 'assets/help.png');
		

		this.load.tilemap('00', 'maps/00.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('01', 'maps/01.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('02', 'maps/02.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('03', 'maps/03.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('04', 'maps/04.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('05', 'maps/05.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('06', 'maps/06.json', null, Phaser.Tilemap.TILED_JSON);

		this.load.image('tiles', 'assets/tiles.png');


		this.load.audio('menumusic', 'assets/menumusic.mp3');
		
		this.load.audio('boom', 'assets/boom.mp3');
		this.load.audio('collectcoin', 'assets/collectcoin.mp3');
		this.load.audio('newlevel', 'assets/newlevel.mp3');
		this.load.audio('click', 'assets/click.mp3');
		this.load.audio('noclick', 'assets/noclick.mp3');
		
		this.load.text("levels", "levels.json");
		
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