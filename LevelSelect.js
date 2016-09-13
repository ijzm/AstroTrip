AstroTrip.LevelSelect = function(game) {};

var music;


var buttonlabel;
AstroTrip.LevelSelect.prototype = {

	preload: function() {},

	create: function() {
		game = this;
		this.game.add.sprite(0, 0, 'levelscreen1');
		this.camera.y = 0;
		this.camera.x = 0;


		this.add.button(20, 520, "menubutton", this.mainmenu, this);


		music = this.add.audio('menumusic');
		//music.loopFull();

		this.levels = JSON.parse(this.game.cache.getText("levels"));

		this.levels.map1.forEach(function(element, index, array) {
			var button = game.add.button(element.x, element.y, 'button', function() {
				level = element.level;
				game.state.start("Game");
			});

			buttonlabel = game.add.text(element.x, element.y, element.level, {
				font: "50px Arial",
				fill: "#FFFFFF",
				stroke: '#000000',
				strokeThickness: 3,
			});
			buttonlabel.anchor.x = 0.5;
			buttonlabel.anchor.y = 0.5;
			button.anchor.x = 0.5;
			button.anchor.y = 0.5;

		})
	},

	update: function() {},

	mainmenu: function() {
		console.log("MainMenu");
		this.state.start("MainMenu");
	},

};
