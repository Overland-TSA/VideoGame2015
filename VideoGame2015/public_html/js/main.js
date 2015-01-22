/*/ create an new instance of a pixi stage
var stage = new PIXI.Stage(0x66FF99);

// create a renderer instance.
//var renderer = PIXI.autoDetectRenderer(400, 300);

// add the renderer view element to the DOM
//document.body.appendChild(renderer.view);

//requestAnimFrame( animate );

// create a texture from an image path
var texture = PIXI.Texture.fromImage("./assets/bunny.png");
// create a new Sprite using the texture
var bunny = new PIXI.Sprite(texture);

// center the sprites anchor point
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

// move the sprite t the center of the screen
bunny.position.x = 200;
bunny.position.y = 150;

stage.addChild(bunny);

function animate() {
    
    requestAnimFrame( animate );
    
    // just for fun, lets rotate mr rabbit a little
    bunny.rotation += 0.1;
    
    // render the stage  
    renderer.render(stage);
}*/


/*var scenesManager = tuto.Ezelia.ScenesManager;
 
        //create
        scenesManager.create(300, 400);
 
        //create a the game scene
        var game = scenesManager.createScene('intro', Introscene);
        var game = scenesManager.createScene('bunny', stage);
 
        scenesManager.goToScene('intro');*/


//***************************************

        //get reference of ScenesManager;
        var scenesManager = tuto.Ezelia.ScenesManager;
	
        //note the scale parameter is set to true
        scenesManager.create(900, 600, true);
	
        //create a the game scene
        var game = scenesManager.createScene('game', new tuto.Ezelia.GameScene());
        var intro = scenesManager.createScene('intro', new IntroScene());
        var menu = scenesManager.createScene('start', new StartScene());

        scenesManager.goToScene('intro');
	//scenesManager.goToScene('start');

    