var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Class
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        _super.call(this);
        this.setBackgroundColor(0xf5f36f);
        this.textureButton = PIXI.Texture.fromImage("img/button.png");
        this.textureButtonDown = PIXI.Texture.fromImage("img/buttonDown.png");
        this.textureButtonOver = PIXI.Texture.fromImage("img/buttonOver.png");
	
        this.textureMongol = PIXI.Texture.fromImage("assets/lill mongol.png");
	
        this.button = new PIXI.Sprite(this.textureButton);
        // Scaling and positionning
        this.button.scale.x = 1;
        this.button.scale.y = this.button.scale.x;
        this.button.anchor.x = 0.5;
        this.button.anchor.y = 0.5;
        // move the sprite to the center of the screen
        this.button.position.x = 570;
        this.button.position.y = 450;
        // make the button interactive..
        this.button.interactive = true;
        this._registerEvents();
        this.addChild(this.button);
	
	// have the mongol picture appear
	this.lilMongol = new PIXI.Sprite(this.textureMongol);
	this.lilMongol.anchor.x = this.lilMongol.anchor.y = 0.5;
	this.lilMongol.position.x = 790;
	this.lilMongol.position.y = 440;
	this.addChild(this.lilMongol)
	
	this.titleText = new PIXI.Text("The Great\nKhan", {font:"bold italic 50px Algerian", fill:"red", align:"center"});
	this.titleText.height = 322;
	this.titleText.width = 492;
        this.titleText.anchor.x = 0.5;
        this.titleText.anchor.y = 0.5;
	this.titleText.position.x = 250 + this.titleText.width/2;
	this.titleText.position.y = 250;
	this.addChild(this.titleText);
	
        this.interactive = true;
    }
    StartScene.prototype._registerEvents = function () {
        var _this = this;
        // set the mousedown and touchstart callback..
        this.button.mousedown = this.button.touchstart = function (data) {
            if(_this.isPaused()) {
                return;
            }
            this.isdown = true;
            this.setTexture(_this.textureButtonDown);
            this.alpha = 1;
        };
        // set the mouseup and touchend callback..
        this.button.mouseup = this.button.touchend = function (data) {
            if(_this.isPaused()) {
                return;
            }
            this.isdown = false;
            if(this.isOver) {
                this.setTexture(_this.textureButtonOver);
            } else {
                this.setTexture(_this.textureButton);
            }
        };
        // set the mouseover callback..
        this.button.mouseover = function (data) {
            if(_this.isPaused()) {
                return;
            }
            this.isOver = true;
            if(this.isdown) {
                return;
            }
            this.setTexture(_this.textureButtonOver);
        };
        // set the mouseout callback..
        this.button.mouseout = function (data) {
            if(_this.isPaused()) {
                return;
            }
            this.isOver = false;
            if(this.isdown) {
                return;
            }
            this.setTexture(_this.textureButton);
        };
        this.button.click = this.button.tap = function (data) {
            if(_this.isPaused()) {
                return;
            }
            tuto.Ezelia.ScenesManager.goToScene('background1');
        };
    };
    return StartScene;
})(tuto.Ezelia.Scene);
