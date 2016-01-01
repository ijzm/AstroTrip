AstroTrip.LevelSelect = function (game) {};

var music;
var ylevel = 300;
var xlevel = 0;
var button;

var buttonlabel;
AstroTrip.LevelSelect.prototype = {

	preload: function () {
	},

	create: function () {	
		this.game.add.sprite(0, 0, 'bg');
		this.camera.y = 0;
		this.camera.x = 0;
		
		ylevel = 300
		xlevel = 0;
		test = 0;
		
		this.game.add.sprite(20, 20, 'logo');
		
		for(var i = 0; i <= 12*3-1; i++){
			if(i%12 == 0 && !(i === 0)){
				ylevel += 64;
				xlevel += (64*12);
			}
			
			if(i > localStorage.getItem('myItemKey')){
				button = this.game.add.sprite(i*64+20 - xlevel,ylevel, "buttonlocked");
				button.inputEnabled = true;
				button.events.onInputDown.add(function(){this.selectlevel(this.input.x,this.input.y)}, this);
			} else {
				button = this.game.add.button(i*64+20 - xlevel,ylevel, "button", null, this, 1,0);
				button.inputEnabled = true;
				button.events.onInputDown.add(function(){this.selectlevel(this.input.x,this.input.y)}, this);
				buttonlabel = this.add.text(i*64+52 - xlevel,ylevel, i+1, {
					fill: "#FFFFFF",
					stroke: '#000000',
					strokeThickness: 3,
					//font: 'Press Start 2P',
					fontSize: 300,
					});
			buttonlabel.anchor.x = 0.5;
			}
			

		}


		
		this.add.button(20,520, "menubutton", this.mainmenu,this);
	
		
		music = this.add.audio('menumusic');
		//music.loopFull();
		
	},

		update: function () {
	},
		selectlevel: function(x,y){
			var final; 			
			x -= 20;
			x -= (x%64);
			x /= 64;
			y -= 300;
			y -= (y%64);
			y /= 64;			
			final = (x+1)+(y)*12;
			final -= 1;
			
			if(final > localStorage.getItem('myItemKey')){
				//put sound, nothing hapens
				console.log(final)
			} else {
				level = final;
				console.log(final)
				this.state.start('LoadLevel')
				lastscore = 0;
				score = 0;
			}
	},
	
	mainmenu: function(){
		console.log("MainMenu");
		this.state.start("MainMenu");
	}

};
