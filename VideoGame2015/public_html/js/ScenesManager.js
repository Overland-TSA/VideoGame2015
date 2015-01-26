// following this tutorial: http://ezelia.com/2013/pixi-tutorial
// originally written in TypeScript, translated and converted to fit my situation

// actually, now that tutorial is imported
// and can convert from that TypeScript to JavaScript
// no need for this file anymore

ScenesManager = {
    scenes: {}, // should be hashmap but a JS object is fine too :)
    currentScene: null,   // Scene
    renderer: null, //PIXI.IRenderer;
    
    create: function(width, height) {
        if (this.renderer) return this;
        
        this.renderer = PIXI.autoDetectRenderer(width, height);
        document.body.appendChild(this.renderer.view);
        requestAnimFrame(this.loop);
        return this;
    },
    
    
    loop: function() {
        // do the looping
        requestAnimFrame(function () { this.loop() });
        
        
        // does not exist
        // won't have paused scenes in game (for now anyway)
        // also, not implementing paused because not gonna 'extend' Stage
        if (!this.currentScene) return;
        
        
        currentScene.update();
        this.renderer.render(this.currentScene);
    },
    
    
    createScene: function(id, givenScene) {
        if (this.scenes[id]) return undefined;
        
        var scene;
        if (givenScene) {
            scene = givenScene;
        }
        else {
            scene = new Scene();
        }
        this.scenes[id] = scene;
        
        return scene;
    },
    
    goToScene: function(id) {
        
        if (this.scenes[id]) {
            if (this.currentScene) {
		this.currentScene.pause();
	    }
	    console.log("ScenesManager.goToScene: Switching to Scene " + id + " from " + this.currentScene);
            this.currentScene = this.scenes[id];
            this.currentScene.resume();
            return true;
        }
	console.log("ScenesManager.goToScene: Scene " + id + " not declared");
        return false;
    },
}