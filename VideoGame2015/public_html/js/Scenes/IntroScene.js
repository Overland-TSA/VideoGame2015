var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var IntroScene = (function (_super) {
    __extends(IntroScene, _super);
    function IntroScene() {
        _super.call(this);
        this.setBackgroundColor(0xf5f36f);
        this.logo = this.titleText = new PIXI.Text("Brought to you by Overland TSA", {font:"bold italic 50px Algerian", fill:"brown", align:"center"});
        this.addChild(this.logo);
        this.logo.scale.x = 1;
        this.logo.scale.y = this.logo.scale.x;
        this.logo.anchor.x = 0.5;
        this.logo.anchor.y = 0.5;
        this.logo.alpha = 0;
        // move the sprite to the center of the screen
        this.logo.position.x = tuto.Ezelia.ScenesManager.defaultWidth / 2;
        this.logo.position.y = tuto.Ezelia.ScenesManager.defaultHeight / 2;
    }
    IntroScene.prototype.update = function () {
        _super.prototype.update.call(this);
        if(this.logo.alpha < 1) {
            this.logo.alpha += 0.01;
        } else {
	    // wait a bit before switching
	    setTimeout(
		function(){tuto.Ezelia.ScenesManager.goToScene('start');},
		4000
	    )
        }
    };
    return IntroScene;
})(tuto.Ezelia.Scene);
