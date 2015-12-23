AstroTrip.Game = function (game) {};

var player;
var explotion;

var layer;
var map;

var fuel = 100;



AstroTrip.Game.prototype = {

	preload: function () {
	},

	create: function () {
		this.physics.startSystem(Phaser.Physics.ARCADE);
		player = this.add.sprite(0,0, "char");
		player.anchor.x = 0.5;
		player.anchor.y = 0.5;
		this.physics.arcade.enable(player);
		
		if(level == 0){
			player.x = 4 * 32 - 16;
			player.y = 4 * 32 - 16;
			map = this.add.tilemap('00');
			map.addTilesetImage('tiles', 'tiles');
			layer = map.createLayer('00');
			layer.resizeWorld()
			fuel = 3;
			lastscore = score;
		}
		if(level == 1){
			player.x = 4 * 32 - 16;
			player.y = 4 * 32 - 16;
			map = this.add.tilemap('01');
			map.addTilesetImage('tiles', 'tiles');
			layer = map.createLayer('01');
			layer.resizeWorld()
			fuel = 5;
			lastscore = score;
		}
		
		map.setTileIndexCallback(1, this.looselevel, this);
		//map.setTileIndexCallback(2, this., this);
		//map.setTileIndexCallback(3, this., this);
		map.setTileIndexCallback(4, this.winlevel, this);
		map.setTileIndexCallback(5, this.collectstar, this);

		
		player.bringToTop();
	},

	update: function () {
		//Making the VCAM
		this.camera.follow(player);
		//Adding collitions with map
		this.physics.arcade.collide(player, layer);
		
		/*if (this.input.activePointer.isDown){
			this.move();
		}*/
		
		this.input.onTap.add(this.move, this);
		
		//console.log(this.input.worldX);
	},
	
	move: function() {
		if(fuel >= 1){
			player.rotation = this.physics.arcade.angleToPointer(player)+1.5;		
			player.body.velocity.setTo((this.input.worldX - player.x), (this.input.worldY - player.y));
			fuel--;
			console.log(fuel);
		}
    },
	
	looselevel: function(){		
		explotion = this.add.sprite(0,0, "explotion");
		explotion.anchor.x = 0.5;
		explotion.anchor.y = 0.5;
		explotion.x = player.x;
		explotion.y = player.y;
		
		player.kill();
		
		this.time.events.add(Phaser.Timer.SECOND * 1, function(){this.state.start("GameOver");}, this);
	},
	
	winlevel: function(){
		level++
		this.state.start("LoadLevel");
	},
	
	collectstar: function(sprite, tile){
		tile.index = 2;
		score += 100;
		console.log(score);
	}

};

