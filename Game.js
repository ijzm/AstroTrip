AstroTrip.Game = function(game) {};

var player;
var explotion;

var layer;
var map;

var fuel = 100;

var boom;
var newlevel;
var collectcoin;
var click;
var noclick;

var fueltext;
var scoretext;

var lastX;
var lastY;



var soundbutton;

AstroTrip.Game.prototype = {

	preload: function() {},

	create: function() {
		this.physics.startSystem(Phaser.Physics.ARCADE);
		player = this.add.sprite(0, 0, "char");
		player.anchor.x = 0.5;
		player.anchor.y = 0.5;
		this.physics.arcade.enable(player);

		boom = this.add.audio('boom');
		newlevel = this.add.audio('newlevel');
		collectcoin = this.add.audio('collectcoin');
		click = this.add.audio("click");
		noclick = this.add.audio("noclick");

		//parsing JSON :D
		this.levels = JSON.parse(this.game.cache.getText("levels"));
		player.x = this.levels.data[level].x * 32 - 16;
		player.y = this.levels.data[level].y * 32 - 16;
		map = this.add.tilemap(level);
		map.addTilesetImage('tiles', 'tiles');
		layer = map.createLayer("layer");
		layer.resizeWorld()
		fuel = this.levels.data[level].fuel;

		fueltext = this.add.text(0, 600, "Fuel: " + fuel, {
			font: "60px Arial",
			//font: '24px Press Start 2P',
			fill: "#FFFFFF",
			stroke: '#000000',
			strokeThickness: 3,
		});
		fueltext.fixedToCamera = true;
		fueltext.anchor.y = 1;

		scoretext = this.add.text(800, 600, "Score: " + score, {
			font: "60px Arial",
			fill: "#FFFFFF",
			stroke: '#000000',
			strokeThickness: 3,
		});
		scoretext.anchor.x = 1;
		scoretext.anchor.y = 1;
		scoretext.fixedToCamera = true;


		soundbutton = this.add.button(800, 0, "soundbutton", this.togglesound, this)
		soundbutton.anchor.x = 1;
		soundbutton.anchor.y = 0;
		soundbutton.fixedToCamera = true;
		soundbutton.bringToTop();

		//walls
		map.setTileIndexCallback(1, this.looselevel, this);
		map.setTileIndexCallback(11, this.looselevel, this);
		map.setTileIndexCallback(12, this.looselevel, this);
		map.setTileIndexCallback(13, this.looselevel, this);
		map.setTileIndexCallback(14, this.looselevel, this);
		map.setTileIndexCallback(15, this.looselevel, this);
		map.setTileIndexCallback(16, this.looselevel, this);

		map.setTileIndexCallback(9, this.looselevel, this);
		//map.setTileIndexCallback(2, this., this);
		//map.setTileIndexCallback(3, this., this);
		map.setTileIndexCallback(4, this.winlevel, this);
		map.setTileIndexCallback(5, this.collectstar, this);
		map.setTileIndexCallback(6, this.collecfuel, this);
		map.setTileIndexCallback(7, this.presbutton, this);
		//
		map.setTileIndexCallback(21, this.bounceX, this);
		map.setTileIndexCallback(22, this.bounceY, this);
		map.setTileIndexCallback(23, this.bounceX, this);
		map.setTileIndexCallback(24, this.bounceY, this);
		//


		player.bringToTop();

		canclick = true;
	},

	update: function() {
		//Making the VCAM
		this.camera.follow(player);
		//Adding collitions with map
		this.physics.arcade.collide(player, layer);

		/*if (this.input.activePointer.isDown){
			this.move();
		}*/

		this.input.onTap.add(this.move, this);

		//console.log(this.input.worldX);
		var keys = {
			r: this.input.keyboard.addKey(Phaser.Keyboard.R),
		}

		if (keys.r.isDown && canclick) {
			this.looselevel();
		}
	},

	render: function() {},

	move: function() {
		if (fuel >= 1 && canclick) {
			if (this.input.y > 16) {
				player.rotation = this.physics.arcade.angleToPointer(player) + 1.5;
				player.body.velocity.setTo((this.input.worldX - player.x), (this.input.worldY - player.y));
				fuel--;
				this.updatetext();
				if (playsound) {
					click.play();
				}
			}


			lastX = player.body.velocity.x;
			lastY = player.body.velocity.y;
		} else {
			if (playsound) {
				noclick.play();
			}
		}
	},

	looselevel: function() {
		canclick = false;
		explotion = this.add.sprite(0, 0, "explotion");
		explotion.anchor.x = 0.5;
		explotion.anchor.y = 0.5;
		explotion.x = player.x;
		explotion.y = player.y;

		explotion.width = 0;
		explotion.height = 0;

		this.add.tween(explotion).to({
			width: 150,
			height: 150,
		}, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
		if (playsound) {
			boom.play();
		}

		player.kill();

		this.time.events.add(Phaser.Timer.SECOND * 1, function() {
			this.state.start("GameOver");
		}, this);
	},


	winlevel: function() {
		canclick = false;
		level++
		newlevel.play();
		if (localStorage.getItem('myItemKey') >= level) {

		} else {
			localStorage.setItem('myItemKey', level.toString());
		}

		player.kill();
		for (var i = fuel; i >= 1; --i) {

			this.time.events.add(Phaser.Timer.SECOND * i / 2, function() {
				collectcoin.play();
				score += 1000;
				fuel--;
				this.updatetext();
			}, this);

		}
		this.time.events.add(Phaser.Timer.SECOND * (fuel + 1) / 2, function() {
			this.state.start("LoadLevel");
		}, this);
	},

	collectstar: function(sprite, tile) {
		tile.index = 2;
		score += 100;
		this.updatetext();
		layer.dirty = true;
		if (playsound) {
			collectcoin.play();
		}
	},

	collecfuel: function(sprite, tile) {
		tile.index = 2;
		fuel++;
		this.updatetext();
		layer.dirty = true;
		if (playsound) {
			collectcoin.play();
		}
	},

	updatetext: function() {
		fueltext.setText("Fuel: " + fuel);
		scoretext.setText("Score: " + score)
	},

	presbutton: function(sprite, tile) {
		tile.index = 8;
		map.replace(9, 10);
		layer.dirty = true;
	},

	bounceY: function() {
		player.body.velocity.setTo(-lastX, lastY);
		//player.rotation *= 2;
		//player.angle += player.angle/2;

		this.time.events.add(Phaser.Timer.SECOND * .1, function() {
			lastX = player.body.velocity.x;
			lastY = player.body.velocity.y;
		}, this);

	},

	bounceX: function() {
		player.body.velocity.setTo(lastX, -lastY);
		this.time.events.add(Phaser.Timer.SECOND * .1, function() {
			lastX = player.body.velocity.x;
			lastY = player.body.velocity.y;
		}, this);
	},
	togglesound: function() {
		if (playsound) {
			playsound = false;
		} else if (playsound === false) {
			playsound = true;
		}
	},

};
