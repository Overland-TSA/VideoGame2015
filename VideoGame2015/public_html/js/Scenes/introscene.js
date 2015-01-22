var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var IntroScene = (function (_super) {
    __extends(IntroScene, _super);
    function IntroScene() {
        _super.call(this, 0xffffff);
        /*

        this.logo = PIXI.Sprite.fromImage("img/../assets.bunny.png");
        this.addChild(this.logo);

        this.logo.scale.x = ScenesManager.defaultWidth/250;
        this.logo.scale.y = this.logo.scale.x;

        this.logo.anchor.x = 0.5;
        this.logo.anchor.y = 0.5;
        this.logo.alpha = 0;

        // move the sprite to the center of the screen
        this.logo.position.x = ScenesManager.defaultWidth / 2;
        this.logo.position.y = ScenesManager.defaultHeight /2;
        */
    }
    IntroScene.prototype.update = function () {
        super.update.call(this);
        if (this.logo.alpha < 1)
            this.logo.alpha += 0.01;
        else
            ScenesManager.goToScene('bunny');
    };
    return IntroScene;
})(Scene);
