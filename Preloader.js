AstroTrip.Preloader = function(game) { //declare the Preloader function

	this.background = null;

	this.ready = false;


	WebFontConfig = {

		//  'active' means all requested fonts have finished loading
		//  We set a 1 second delay before calling 'createText'.
		//  For some reason if we don't the browser cannot render the text the first time it's created.
		active: function() {
			game.time.events.add(Phaser.Timer.SECOND, createText, this);
		},

		//  The Google Fonts we want to load (specify as many as you like in the array)
		google: {
			families: ['Press Start 2P']
		}

	};

};

AstroTrip.Preloader.prototype = {

	preload: function() {
		//load all the required assets in the game - sprites, music, fonts,etc
		this.load.image('playbutton', 'assets/playbutton.png');
		this.load.image('creditsbutton', 'assets/creditsbutton.png');
		this.load.image('levelselectorbutton', 'assets/levelselectorbutton.png');
		this.load.image('helpbutton', 'assets/helpbutton.png');
		this.load.image('menubutton', 'assets/menubutton.png');
		this.load.image('retrybutton', 'assets/retrybutton.png');
		this.load.spritesheet('button', 'assets/button.png', 64, 64);
		this.load.image('buttonlocked', 'assets/buttonlocked.png');
		this.load.image('soundbutton', 'assets/soundbutton.png');
		this.load.image('logo', 'assets/logo.png');

		this.load.image('char', 'assets/player.png');
		this.load.image('explotion', 'assets/explotion.png');
		this.load.image('bg', 'assets/bg.png');
		this.load.image('credits', 'assets/credits.png');
		this.load.image('help', 'assets/help.png');

		this.load.image('oxygen', 'assets/oxygen.png');


		this.load.tilemap('0', 'maps/0.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('1', 'maps/1.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('2', 'maps/2.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('3', 'maps/3.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('4', 'maps/4.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('5', 'maps/5.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('6', 'maps/6.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('7', 'maps/7.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('8', 'maps/8.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('9', 'maps/9.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('10', 'maps/10.json', null, Phaser.Tilemap.TILED_JSON);

		this.load.image('tiles', 'assets/tiles.png');


		this.load.audio('menumusic', 'assets/menumusic.mp3');

		this.load.audio('boom', 'assets/boom.mp3');
		this.load.audio('collectcoin', 'assets/collectcoin.mp3');
		this.load.audio('newlevel', 'assets/newlevel.mp3');
		this.load.audio('click', 'assets/click.mp3');
		this.load.audio('noclick', 'assets/noclick.mp3');


		this.time.advancedTiming = true;


	},

	create: function() {},

	update: function() {

		//checking whether the music is ready to be played before proceeding to the Main Menu.
		if (this.cache.isSoundDecoded('menumusic') && this.ready == false) {
			this.ready = true;
			this.state.start('MainMenu');
		}

	}

};
