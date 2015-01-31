var warriorTextures = [
    "assets/lill mongol.png",
    "assets/lill mongol.png",
    "assets/lill mongol.png",
    "assets/lill mongol.png"
];



var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Class
var StrategyScene = (function (_super) {
    __extends(StrategyScene, _super);
    function StrategyScene(object) {
        _super.call(this);
	this.currentInfo=object["currentInfo"];	    // Object with current info details: ex. {'khan':'Ghengis Khan', 'date':'Summer 1236'}
        this.battleInfo=object["battleInfo"];	    // Object with battle details: ex. {'name':'Battle of Badger Mouth', 'description':'Enemy has strong...', 'map':'assets/map_bm.png'}
	this.wariorsAvaliable=object["wariorsAvaliable"];   // Array of warrior ids: ex. [1, 2, 4]
        this.nextScene=object["nextScene"];
        this.setBackgroundColor(0xf5f36f);
	
	// load those pictures we're gonna display
	var textureCurrentKhan = PIXI.Texture.fromImage(this.currentInfo.khanPic);
	var textureBattleMap = PIXI.Texture.fromImage(this.battleInfo.map);
	
        // when you interact with something, does it
        this._registerEvents();
	
	// create some new graphics objects
	var graphics_back = new PIXI.Graphics();
	var graphics_front = new PIXI.Graphics();
	
	/* TOP SECTION has...
	 * Current Khan,
	 * Khan Picture,
	 * Current Time,
	 * Current Battle,
	 * Separation Line,
	 * */
	// TOP SECTION - Current Khan
	this.currentKhan = new PIXI.Text(("Current Khan:  " + this.currentInfo.khan), {'font':"bold italic 20px Arial", 'fill':"black", 'align':"left", 'wordWrap':true, 'wordWrapWidth':300 });
        this.currentKhan.anchor.x = 0;
        this.currentKhan.anchor.y = 0;
	this.currentKhan.position.x = 5;
	this.currentKhan.position.y = 5;
	
	// TOP SECTION - Khan Picture
	this.lilMongol = new PIXI.Sprite(textureCurrentKhan);
	this.lilMongol.anchor.x = this.lilMongol.anchor.y = 0;
	this.lilMongol.scale.x = this.lilMongol.scale.y = 0.20;
	this.lilMongol.position.x = 320;
	this.lilMongol.position.y = 5;
	
	// TOP SECTION - Current Time
	this.currentTime = new PIXI.Text(("Current Time:  " + this.currentInfo.date), {'font':"bold italic 20px Arial", 'fill':"black", 'align':"left", 'wordWrap':true, 'wordWrapWidth':200 });
        this.currentTime.anchor.x = 0;
        this.currentTime.anchor.y = 0;
	this.currentTime.position.x = 370;
	this.currentTime.position.y = 5;
	
	// TOP SECTION - Current Battle
	this.currentBattle = new PIXI.Text((this.battleInfo.name), {'font':"bold italic 20px Arial", 'fill':"black", 'align':"left", 'wordWrap':true, 'wordWrapWidth':280 });
        this.currentBattle.anchor.x = 0;
        this.currentBattle.anchor.y = 0;
	this.currentBattle.position.x = 610;
	this.currentBattle.position.y = 5;
	
	// TOP SECTION - Separation Line
	// set the style
	graphics_back.beginFill(0x000000, 1);
	graphics_back.lineStyle(3, 0x000000);
	
	// draw using a single line
	graphics_back.moveTo(5, 70);
	graphics_back.lineTo(895, 70);
	graphics_back.endFill();
	
	
	/* MIDDLE SECTION has...
	 * Box for description,
	 * Batle Description,
	 * Box for map,
	 * Map,
	 * */
	// MIDDLE SECTION - Box for description
	// set the style
	graphics_back.beginFill(0xdddddd);
	graphics_back.lineStyle(2, 0x1a1a1a);
	
	// draw using a rounded rectangle
	graphics_back.drawRoundedRect(10, 90, 500, 200, 10);
	graphics_back.endFill();
	
	// MIDDLE SECTION - Battle Description
	this.battleDescription = new PIXI.Text(this.battleInfo.description, {'font':"15px Arial", 'fill':"black", 'align':"left", 'wordWrap':true, 'wordWrapWidth':500 });
        this.battleDescription.anchor.x = 0;
        this.battleDescription.anchor.y = 0;
	this.battleDescription.position.x = 20;
	this.battleDescription.position.y = 100;
	
	// MIDDLE SECTION - Box for map
	// set the style
	graphics_back.beginFill(0xbbbbbb, 0.7);
	graphics_back.lineStyle(5, 0x888888);
	graphics_front.beginFill(0xbbbbbb, 0);
	graphics_front.lineStyle(5, 0x888888);
	
	// draw using a front and back rounded rectangle
	graphics_back.drawRoundedRect(550, 90, 300, 200, 10);
	graphics_back.endFill();
	graphics_front.drawRoundedRect(550, 90, 300, 200, 10);
	graphics_front.endFill();
	
	// MIDDLE SECTION - Map
	this.battleMap = new PIXI.Sprite(textureBattleMap);
	this.battleMap.anchor.x = this.battleMap.anchor.y = 0;
	this.battleMap.scale.x = this.battleMap.scale.y = 0.33;
	this.battleMap.position.x = 552;
	this.battleMap.position.y = 92;
	
	
	/* BOTTOM SECTION has...
	 * Battle Decision
         * Battle Time
	 * 4 Warrior sections
	 * Total Warrior Count
         * Battle Button
	 * */
	// BOTTOM SECTION - Battle Decision
	this.battleDecision = new PIXI.Text("Battle Decision", {'font':"15px Arial", 'fill':"black", 'align':"left", 'wordWrap':true, 'wordWrapWidth':500 });
        this.battleDecision.anchor.x = 0;
        this.battleDecision.anchor.y = 0;
	this.battleDecision.position.x = 20;
	this.battleDecision.position.y = 310;
        
	var textureBattleDecision_NWar = PIXI.Texture.fromImage("assets/unchecked_war.png");
	var textureBattleDecision_YWar = PIXI.Texture.fromImage("assets/checked_war.png");
	var textureBattleDecision_NNegotiate = PIXI.Texture.fromImage("assets/unchecked_negotiate.png");
	var textureBattleDecision_YNegotiate = PIXI.Texture.fromImage("assets/checked_negotiate.png");
        
        this.battleDecision_WarButton = new PIXI.Sprite(textureBattleDecision_NWar);
	this.battleDecision_WarButton.position.x = 20;
	this.battleDecision_WarButton.position.y = 330;
	this.battleDecision_WarButton.scale.y = this.battleDecision_WarButton.scale.x = 0.90;
        this.battleDecision_NegotiateButton = new PIXI.Sprite(textureBattleDecision_NNegotiate);
	this.battleDecision_NegotiateButton.position.x = 20;
	this.battleDecision_NegotiateButton.position.y = 370;
	this.battleDecision_NegotiateButton.scale.y = this.battleDecision_NegotiateButton.scale.x = this.battleDecision_WarButton.scale.x;
        
        
        // BOTTOM SECTION - Battle Time
	this.battleTime = new PIXI.Text("Battle Time", {'font':"15px Arial", 'fill':"black", 'align':"left", 'wordWrap':true, 'wordWrapWidth':500 });
        this.battleTime.anchor.x = 0;
        this.battleTime.anchor.y = 0;
	this.battleTime.position.x = 20;
	this.battleTime.position.y = 420;
        
	var textureBattleTime_Dawn = PIXI.Texture.fromImage("assets/button_time_dawn.png");
	var textureBattleTime_Noon = PIXI.Texture.fromImage("assets/button_time_noon.png");
	var textureBattleTime_Night = PIXI.Texture.fromImage("assets/button_time_night.png");
        
        this.battleTime_DawnButton = new PIXI.Sprite(textureBattleTime_Dawn);
	this.battleTime_DawnButton.position.x = 20;
	this.battleTime_DawnButton.position.y = 440;
	this.battleTime_DawnButton.scale.y = this.battleTime_DawnButton.scale.x = 0.90;
        
        this.battleTime_NoonButton = new PIXI.Sprite(textureBattleTime_Noon);
	this.battleTime_NoonButton.position.x = 20;
	this.battleTime_NoonButton.position.y = 490;
	this.battleTime_NoonButton.scale.y = this.battleTime_NoonButton.scale.x = 0.90;
        
        this.battleTime_NightButton = new PIXI.Sprite(textureBattleTime_Night);
	this.battleTime_NightButton.position.x = 20;
	this.battleTime_NightButton.position.y = 540;
	this.battleTime_NightButton.scale.y = this.battleTime_NightButton.scale.x = 0.90;
        
        
        
        
	/* BOTTOM SECTION - Battle Time
	this.battleDecision = new PIXI.Text("Battle Time", {'font':"15px Arial", 'fill':"black", 'align':"left", 'wordWrap':true, 'wordWrapWidth':500 });
        this.battleDecision.anchor.x = 0;
        this.battleDecision.anchor.y = 0;
	this.battleDecision.position.x = 20;
	this.battleDecision.position.y = 310;
        
	var textureBattleDecision_NWar = PIXI.Texture.fromImage("assets/unchecked_war.png");
	var textureBattleDecision_YWar = PIXI.Texture.fromImage("assets/checked_war.png");
	var textureBattleDecision_NNegotiate = PIXI.Texture.fromImage("assets/unchecked_negotiate.png");
	var textureBattleDecision_YNegotiate = PIXI.Texture.fromImage("assets/checked_negotiate.png");
        
        this.battleDecision_WarButton = new PIXI.Sprite(textureBattleDecision_NWar);
	this.battleDecision_WarButton.position.x = 20;
	this.battleDecision_WarButton.position.y = 330;
	this.battleDecision_WarButton.scale.y = this.battleDecision_WarButton.scale.x = 0.90;
        this.battleDecision_NegotiateButton = new PIXI.Sprite(textureBattleDecision_NNegotiate);
	this.battleDecision_NegotiateButton.position.x = 20;
	this.battleDecision_NegotiateButton.position.y = 370;
	this.battleDecision_NegotiateButton.scale.y = this.battleDecision_NegotiateButton.scale.x = this.battleDecision_WarButton.scale.x;
        */
        
        
        this.warriorSet = [];
        var warriorSetsSpacing = 150;
        for (var i=0; i<this.wariorsAvaliable.length; i++) {
            warriorNumber = this.wariorsAvaliable[i]-1;
            var textureWarrior = PIXI.Texture.fromImage(warriorTextures[warriorNumber]);
            warrior = new PIXI.Sprite( textureWarrior );
            warrior.position.x = 192 + (i*warriorSetsSpacing);
            warrior.position.y = 330;
            warrior.scale.y = warrior.scale.x = 0.7;
            
            uparrow = new PIXI.Sprite( PIXI.Texture.fromImage("assets/up_arrow.png") );
            uparrow.position.x = 210 + (i*warriorSetsSpacing);
            uparrow.position.y = 480;
            uparrow.scale.y = uparrow.scale.x = 0.7;
            
            downarrow = new PIXI.Sprite( PIXI.Texture.fromImage("assets/down_arrow.png") );
            downarrow.position.x = 210 + (i*warriorSetsSpacing);
            downarrow.position.y = 550;
            downarrow.scale.y = downarrow.scale.x = uparrow.scale.x;
            
            warriorcount = new PIXI.Text("0", {'font':"15px Arial", 'fill':"black", 'align':"left", 'wordWrap':true, 'wordWrapWidth':500 });
            warriorcount.position.x = 220 + (i*warriorSetsSpacing);
            warriorcount.position.y = 520;
            
            
            this.warriorSet.push( warrior );
            this.warriorSet.push( uparrow );
            this.warriorSet.push( warriorcount );
            this.warriorSet.push( downarrow );
        }
        
	// BOTTOM SECTION - Total Warrior Count
        this.totalWarriorCount = new PIXI.Text("Total Warriors:", {'font':"15px Arial", 'fill':"black", 'align':"left", 'wordWrap':true, 'wordWrapWidth':500 });
	this.totalWarriorCount.position.x = 730;
	this.totalWarriorCount.position.y = 330;
	this.totalWarriorCount.scale.y = this.totalWarriorCount.scale.x = 0.90;
        
	// BOTTOM SECTION - Battle Button
        this.battleButton = new PIXI.Sprite(  PIXI.Texture.fromImage("assets/battle_button.png")  );
	this.battleButton.position.x = 730;
	this.battleButton.position.y = 535;
	this.battleButton.scale.y = this.battleButton.scale.x = 0.90;
        
        
        
        
	// add the children, all at once
	// important becaouse graphics_back really should be first
	this.addChild(graphics_back);
	this.addChild(this.currentKhan);
	this.addChild(this.lilMongol);
	this.addChild(this.currentTime);
	this.addChild(this.currentBattle);
	this.addChild(this.battleDescription);
	this.addChild(this.battleMap);
        
        this.addChild(this.battleDecision);
        this.addChild(this.battleDecision_WarButton);
        this.addChild(this.battleDecision_NegotiateButton);
        
        this.addChild(this.battleTime);
        this.addChild(this.battleTime_DawnButton);
        this.addChild(this.battleTime_NoonButton);
        this.addChild(this.battleTime_NightButton);
        
        for (i=0; i<this.warriorSet.length; i++) {
            this.addChild(this.warriorSet[i]);
        }
        
        this.addChild(this.totalWarriorCount);
        this.addChild(this.battleButton);
	this.addChild(graphics_front);
	
	
        this.interactive = true;
    }
    
     StrategyScene.prototype.update = function () {
        _super.prototype.update.call(this);
    };
    
    StrategyScene.prototype._registerEvents = function () {
        var _this = this;
        //click scene = switch scene
        this.click = this.tap = function (data) {
            if(_this.isPaused()) {
                return;
            }
            tuto.Ezelia.ScenesManager.goToScene(_this.nextScene);
        };
    };
    return StrategyScene;
})(tuto.Ezelia.Scene);
