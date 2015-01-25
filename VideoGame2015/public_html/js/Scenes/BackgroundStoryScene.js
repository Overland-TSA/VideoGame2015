var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Class
var BackgroundStoryScene = (function (_super) {
    __extends(BackgroundStoryScene, _super);
    function BackgroundStoryScene(object) {
        _super.call(this);
        this.text=object["text"];
        this.nextScene=object["nextScene"];
        this.setBackgroundColor(0xf5f36f);
	
        this.textureMongol = PIXI.Texture.fromImage("assets/lill mongol.png");
	
        // when you interact with something, does it
        this._registerEvents();
	
	// have the mongol picture appear
	this.lilMongol = new PIXI.Sprite(this.textureMongol);
	this.lilMongol.anchor.x = this.lilMongol.anchor.y = 0.5;
	this.lilMongol.position.x = 790;
	this.lilMongol.position.y = 440;
	this.addChild(this.lilMongol)
	
        // adding the text
	this.titleText = new PIXI.Text(this.text, {font:"bold italic 40px Arial", fill:"red", align:"center",wordWrap:true, wordWrapWidth:700 });
	//this.titleText.width = 700;
        this.titleText.anchor.x = 0.5;
        this.titleText.anchor.y = 0.5;
	this.titleText.position.x = 450;
	this.titleText.position.y = 400 + this.titleText.height/2;
	this.addChild(this.titleText);
	
        this.interactive = true;
    }
    
     BackgroundStoryScene.prototype.update = function () {
        _super.prototype.update.call(this);
        //console.log(this.titleText.position)
        if(this.titleText.position.y + this.titleText.height > 0) {
            this.titleText.position.y -= 1;
        } else {
	    // wait a bit before switching
	    setTimeout(
		function(){tuto.Ezelia.ScenesManager.goToScene(this.nextScene);},
		2000
	    );
        }
    };
    
    BackgroundStoryScene.prototype._registerEvents = function () {
        var _this = this;
        //click scene = switch scene
        this.click = this.tap = function (data) {
            if(_this.isPaused()) {
                return;
            }
            tuto.Ezelia.ScenesManager.goToScene(this.nextScene);
        };
    };
    return BackgroundStoryScene;
})(tuto.Ezelia.Scene);
